import React, { useState } from "react";

import { Avatar, Input } from "@material-ui/core";
import  VideocamIcon  from "@material-ui/icons/Videocam";
import  PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";

import styled from "styled-components";

const Messenger = () => {
    const [input, setInput] = useState('');
    const [image, setimage] = useState(null);

    const handleChange = (e) => {
        if(e.traget.value[0]){
            setimage(e.target.files[0])
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <MEssangerWrapper>
            <MessangerTop>
                <Avatar src="https://clipartcraft.com/images/soul-eater-logo-black-star-5.png"/>

                <form>
                    <input 
                        type={"text"}
                        className="messenger__input"
                        placeholder="What's on your mind?"
                    />
                </form>
            </MessangerTop>
        </MEssangerWrapper>
    )
}