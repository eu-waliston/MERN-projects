import React from "react";
import styled from "styled-components";

/* Material Icons */
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificarionActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";


const Header = () => {
    return (
        <HeaderWrapper>
            <HeaderLeft>
                <img src="https://clipartcraft.com/images/soul-eater-logo-black-star-5.png" alt="Popular" />
            </HeaderLeft>

            <HeaderInput>
                <SearchIcon />
                <input placeholder="Search Popular" type={"text"} />
            </HeaderInput>

            <HeaderCenter>
                <div className="header__option header__option--active" >
                    <HomeIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <FlagIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <SubscriptionsOutlinedIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <StorefrontOutlinedIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <SupervisedUserCircleIcon fontSize="large" />
                </div>
            </HeaderCenter>

            <HeaderRight>
                <div className="header__info">
                    <Avatar src="https://clipartcraft.com/images/soul-eater-logo-black-star-5.png" />
                    <h4>WeSantos</h4>
                </div>

                <IconButton>
                    <AddIcon />
                </IconButton>

                <IconButton>
                    <ForumIcon />
                </IconButton>

                <IconButton>
                    <NotificarionActiveIcon />
                </IconButton>

                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>
            </HeaderRight>
        </HeaderWrapper>
    )
}

/* STYLED COMPONENTS */
const HeaderWrapper = styled.div`
    display: flex;
    padding: 15px 20px;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    background-color: #fff;
    z-index: 100;
    top:0;
    box-shadow: 0px 5px 8px -9px rgba(0,0,0, 0.75);
`

const HeaderLeft = styled.div`
    display:flex;
    justify-content:space-evenly;
    img {
        height: 40px;
    }
`
const HeaderInput = styled.div`
    display: flex;
    align-items: center;
    background-color: #eff2f5;
    padding: 10px;
    margin-left: 10px;
    border-radius: 33px;
    input {
        border: none;
        background-color: transparent;
        outline-width: 0;
    }

`

const HeaderCenter = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    .header__option {
        display: flex;
        align-items: center;
        padding: 10px 30px;
        cursor: pointer;

        .MuiSvgIcon-root {
            color: gray
        }
        &:hover {
            background-color: #eff2f5;
            border-radius: 10px;
            align-items: center;
            padding: 0 30px;
            border-bottom: none;

            .MuiSvgIcon-root {
            color: #2e81f4;
            }
        }
    }

    .header_option--active {
        border-bottom: 4px solid #2e81f4;
        .MuiSvgIcon-root {
            color: #2e81f4;
        }
    }
`

const HeaderRight = styled.div `
    display: flex;
    .header__info {
        display: flex;
        align-items: center;

        h4 {
            margin-left: 10px;
        }
    }
`

export default Header;