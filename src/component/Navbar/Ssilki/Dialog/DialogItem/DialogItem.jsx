import React from "react";
import mDialog from './../Dialog.module.css';
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialog/*' + props.id;

    return (
        <div className={mDialog.item}>
            <NavLink to={path} className={navData => navData.isActive ? mDialog.active : mDialog.item}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;