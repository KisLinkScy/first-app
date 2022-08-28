import React from "react";
import mDialog from './../Dialog.module.css';

const Message = (props) =>{
    return(
        <div className={mDialog.message}>
            {props.message}
        </div>
    )
}

export default Message;