import React from 'react';
import AppSettings from './Item/AppSettings';
import style from './Navbar.module.css';
import Item from './Item/Item'

const Navbar = () => {
    return (
        <nav className={style.nav}>
        <Item text='Profile' link='/profile'/>
        <Item text='News' link='/news'/>
        <Item text='Subscriptions' link='/sub'/>
        <Item text='Messages' link='/dialogs'/>
        <AppSettings />
        </nav>
    )
}

export default Navbar;
