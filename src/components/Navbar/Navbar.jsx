import React from 'react';
import AppSettings from './Item/AppSettings';
import style from './Navbar.module.css';
import Item from './Item/Item'

const Navbar = () => {
    return (
        <nav className={style.nav}>
        <Item text='Profile'/>
        <Item text='News'/>
        <Item text='Subscriptions'/>
        <Item text='Messages'/>
        <AppSettings />
        </nav>
    )
}

export default Navbar;
