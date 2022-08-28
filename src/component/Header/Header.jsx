import React from "react";
import mHeader from './Header.module.css';

const Header = () => {
    return (
        <div className={mHeader.header}>
            <div className={mHeader.headerCon}>
                <img src="https://pngicon.ru/file/uploads/2_58.png" />
                <p>пгт. Безенчук ул. Северная д. 4</p>
                <pre>
                    Коллективное управление домом и придомовой территорией.{<br />}
                    Управление осуществляется непосредственно жильцами дома, с согласия большенста.
                </pre>
            </div>
        </div>
    )
} 

export default Header;