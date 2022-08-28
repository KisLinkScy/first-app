import React from "react";
import mMyPost from './MyPost.module.css';
import Post from "./Post/Post";

const MyPost = (props) => {

    let postElements = props.postDate.map(
        post => <Post message={post.message} likeCount={post.likeCount} disl={post.disl}/>
    )

    return (
        <div>
            <h3>My posts</h3>
            <div className={mMyPost.area}>
                <div><textarea></textarea></div>
                <div><button>Add message</button></div>
                <div className={mMyPost.posts}>

                    {postElements}
                    
                </div>
            </div>
        </div>
    )
}

export default MyPost;