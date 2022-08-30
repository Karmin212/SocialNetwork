import style from './AvatarDiscription.module.css'
import React from 'react';

const AvatarDiscription = () => {
    return (
            <div className={style.ad}>
                <div><img src='https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg'></img></div>
                <div className={style.d}>discription</div>
            </div>
    )
}

export default AvatarDiscription;