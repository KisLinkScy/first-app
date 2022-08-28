import React from "react";
import mContFoto from './ContFoto.module.css';

const ContFoto =(props)=>{
    return(
        <div>
            <div><p>Заголовок</p></div>
            <div className={mContFoto.contFoto}>
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.0BFS-rUbZhPKDO7VGIIv3gHaGo%26pid%3DApi&f=1" alt="dd"/>
            </div>
            <div className={mContFoto.descriptionBlock}>Описание фотографии</div>
        </div>
    )
}

export default ContFoto;