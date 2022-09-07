import React from 'react';
import style from './Item.module.css'

const Item = (props) => {
    return (
        <div className={style.item}>
            <div className={style.ava}><img src={props.ava}></img></div>
            <div className={style.text}>{props.text}</div>
        </div>
    )
}

export default Item;