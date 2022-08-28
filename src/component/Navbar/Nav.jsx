import React from "react";
import { NavLink } from "react-router-dom";
import mNav from './Nav.module.css'

const Nav = (props) => {
    return (
        <div className={mNav.nav}>
            Novigation
            <div className={mNav.item}>
                <NavLink to={'/cont'} className={navData => navData.isActive ? mNav.active : mNav.item}>Profile</NavLink>
            </div>
            <div className={mNav.item}>
                <NavLink to={'/dialog'} className={navData => navData.isActive ? mNav.active : mNav.item}>Dialog</NavLink>
            </div>
            <div className={mNav.item}>
                <NavLink to={'/news'} className={navData => navData.isActive ? mNav.active : mNav.item}>News</NavLink>
            </div>
            <div className={mNav.item}>
                <NavLink to={'/music'} className={navData => navData.isActive ? mNav.active : mNav.item}>Music</NavLink>
            </div>
            <div className={mNav.item}>
                <NavLink to={'/pichers'} className={navData => navData.isActive ? mNav.active : mNav.item}>Pichers</NavLink>
            </div>
            <div className={mNav.item}>
                <NavLink to={'/setting'} className={navData => navData.isActive ? mNav.active : mNav.item}>Setting</NavLink>
            </div>
        </div>
    )
}

export default Nav;