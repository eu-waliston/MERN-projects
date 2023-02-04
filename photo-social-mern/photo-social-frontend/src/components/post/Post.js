import React from "react";
import './Post.css'

import { Avatar } from '@mui/material'; 

const Post = () => {
    return (
        <div className="post">
            <div className="post__header">
                <Avatar 
                    className="post__avatar"
                    alt="TWD"
                    src={require("../assets/1.png")}
                />
                <h3>TDWP</h3>
            </div>
            <img className="post__image"
                src="https://www.techlifediary.com/wp-content/uploads/2020/06/react-js.png" alt="React"
            />
            <h4 className="post__text">
                <strong>thewebdev</strong>&#x1F525;Build a MEssaging app with MERN (MongoDB, Express, React JS, Node JS)&#x1F525;
            </h4>
        </div>
    )
}
export default Post;