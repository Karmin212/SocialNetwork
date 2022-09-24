import React from 'react';
import style from './Icon.module.css';

const Icon = (props) => {
    return (
        <div className={style.icon}>
            <img src={props.icon}></img>
        </div>
    )
}

export default Icon;
