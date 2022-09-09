import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Item.module.css'

const Item = (props) => {
    return (
        <div className={style.item}>
            <div className={style.ava}><img src={props.ava}></img></div>
            <div className={style.text}><NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink></div>
        </div>
    )
}

export default Item;