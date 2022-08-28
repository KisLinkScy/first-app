import React from "react";
import mPost from './Post.module.css';

const Post = (props) => {
    return (
        <div>
            <div className={mPost.item}>
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.kptppMfCk-78Lv_EreEjUAHaKc%26pid%3DApi&f=1" />
                {props.message}
            </div>
            <div>
                <div className={mPost.span}>
                    <span>Like</span> {props.likeCount}
                    |
                    <span>DisLike</span> {props.disl}
                </div>
            </div>
        </div>
    )
}

export default Post;