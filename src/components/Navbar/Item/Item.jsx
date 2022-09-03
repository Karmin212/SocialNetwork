﻿import React from 'react';
import style from './Item.module.css';

const Item = (props) => {
    return (<div className={`${style.item} ${style.a}`}>
        <a>{props.text}</a>
        </div>
    )
}

export default Item;