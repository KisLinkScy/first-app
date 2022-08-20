import React from "react";
import mMyPost from './MyPost.module.css';
import Post from "./Post/Post";

const MyPost = () => {
    return (
        <div>
            <div>
                <textarea></textarea>
                <button>Add message</button>
                <div>
                    <Post />
                    <Post />
                </div>
            </div>
        </div>
    )
}

export default MyPost;