import React from "react";
import mCont from './Cont.module.css'
import ContFoto from "./ContFoto/ContFoto";
import MyPost from "./MyPosts/MyPost";


const Cont = (props) => {
   
    return (
        <div className={mCont.cont}>
            <ContFoto/>
            <ContFoto />
            <MyPost postDate={props.postDate} />
        </div>
    )
}

export default Cont;
/*<img src={Foto} alt="dd"/>*/