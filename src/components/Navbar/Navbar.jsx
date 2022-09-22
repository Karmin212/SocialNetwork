import React from 'react';
import style from './Navbar.module.css';
import Item from './Item/Item'
import Friends from './Friends/Friends';

const Navbar = (props) => {
    return (
        <div className={style.fustMenu}>
            <nav className={style.nav}>
                <Item text='Profile' link='/profile' />
                <Item text='News' link='/news' />
                <Item text='Subscriptions' link='/sub' />
                <Item text='Messages' link='/dialogs' />
                <Item text='Settings' link='/appsettings' />
            </nav>
            <Friends data={props.data.FriendsData}/>
        </div>
    )
}

export default Navbar;
