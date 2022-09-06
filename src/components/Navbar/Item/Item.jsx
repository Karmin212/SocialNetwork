import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Item.module.css';

const Item = (props) => {
    return (<div className={`${style.item} ${style.a} ` + ((props.text==='Settings') ? `${style.settings}` : '')}>
        <NavLink to={props.link}>{props.text}</NavLink>
        </div>
    )
}

export default Item;