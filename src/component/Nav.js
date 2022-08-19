import React from "react";
import mNav from './Nav.module.css'

const Nav = () => {
    return (
        <div className={mNav.nav}>
            Novigation
            <div className={`${mNav.item} ${mNav.active}`}>
                <a>Profile</a>
            </div>
            <div className={mNav.item}>
                <a>News</a>
            </div>
            <div className={mNav.item}>
                <a>Musiic</a>
            </div>
            <div className={mNav.item}>
                <a>Pichers</a>
            </div>
            <div className={mNav.item}>
                <a>Setting</a>
            </div>
        </div>
    )
}

export default Nav;