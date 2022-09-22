import React from 'react';
import style from './Item.module.css';

const Item = (props) => {
    return (
        <div className={style.icon}>
            <img src={props.icon}></img>
        </div>
    )
}

export default Item;
