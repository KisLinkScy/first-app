import React from "react";
import mcont from './Cont.module.css'

const Cont = () => {
    return (
        <div className={mcont.cont}>
            Content
            <div>
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.0BFS-rUbZhPKDO7VGIIv3gHaGo%26pid%3DApi&f=1" />
            </div>
            <div>ava+description</div>
            <div>
                My posts
                <div>
                    New posts
                    <div>
                        <div className={mcont.item}>
                            Post 1
                        </div>
                        <div className={mcont.item}>
                            Post 2
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cont;