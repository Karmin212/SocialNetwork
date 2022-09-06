import React from 'react';
import style from './Navbar.module.css';
import Item from './Item/Item'

const Navbar = () => {
    return (
        <nav className={style.nav}>
        <Item text='Profile' link='/profile'/>
        <Item text='News' link='/news'/>
        <Item text='Subscriptions' link='/sub'/>
        <Item text='Messages' link='/dialogs'/>
        <Item text='Settings' link='/appsettings'/>
        </nav>
    )
}

export default Navbar;
