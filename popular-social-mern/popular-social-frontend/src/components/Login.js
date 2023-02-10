import React from 'react';
import styled from 'styled-components';

import { signInWithPopup } from 'firebase/auth';

import { GoogleAuthProvider } from "firebase/auth";
import { Button } from '@material-ui/core';
import { auth } from '../firebase'

import { useStateValue } from '../StateProvider';
import { actionType } from '../Reducer';

const provider = new GoogleAuthProvider();

const Login = () => {
    const [{}, dispatch] = useStateValue();
    const signIn = async () => {
   
         signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;

                console.log(result);
                dispatch({
                    type: actionType.SET_USER,
                    user: result.user
                })
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
            })
    }
return (
    <LoginWrapper>
        <div className='login__logo'>
            <img src={require("./images/logo_login.png")} alt='login' />
            <h1>Popular Social</h1>
        </div>
        <Button
            type="submit"
            className='login__btn'
            onClick={signIn}
        >Sign In</Button>
    </LoginWrapper>
)
}

const LoginWrapper = styled.div`
    display: grid;
    place-items: center;
    height: 100vh;
    .login__logo {
        display: flex;
        flex-direction: column;
        img {
            object-fit: contain;
            height: 150px;
            max-width: 200px;
        }
    }
    .login__btn {
        width: 300px;
        background-color: #2e81f4;
        color: #2ff2f5;
        font-weight: 800;
        &:hover {
            background-color: #fff;
            color: #2e81f4;
        }
    }
`

export default Login;