import React from "react";
import './Post.css'

import { Avatar } from '@mui/material';

const Post = ({ username, caption, imageUrl }) => {
    return (
        <div className="post">
            <div className="post__header">
                <Avatar
                    className="post__avatar"
                    alt={username}
                    src={require("../assets/1.png")}
                />
                <h3>{username}</h3>
            </div>
            <img className="post__image"
                src={imageUrl} alt="React"
            />
            <h4 className="post__text">
                <strong>{username}</strong>{caption}
            </h4>
        </div>
    )
}
export default Post;