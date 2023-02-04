import React from "react";
import './Post.css'

const Post = () => {
    return (
        <div className="post">
            <h3>TWD</h3>
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