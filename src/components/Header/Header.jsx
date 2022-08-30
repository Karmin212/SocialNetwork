import React from 'react';
import style from './Header.module.css'

const Header = () => {
    return (
        <header className={style.header}>
            <img src='https://cdn-icons-png.flaticon.com/512/263/263080.png'></img>
            <div className={style.name}>Name</div>
            <div className={style.title}>Your life, your rules!</div>
        </header>
    )
}

export default Header;