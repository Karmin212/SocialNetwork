import React from 'react';
import style from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={style.nav}>
            <div className={`${style.item} ${style.a}`}>
                <a>Profile</a>
            </div>
            <div className={`${style.item} ${style.a}`}>
                <a>News</a>
            </div>
            <div className={`${style.item} ${style.a}`}>
                <a>Subscriptions</a>
            </div>
            <div className={`${style.item} ${style.a}`}>
                <a>Messages</a>
            </div>
            <div className={`${style.item} ${style.settings} ${style.a}`}>
                <a>Settings</a>
            </div>
        </nav>
    )
}

export default Navbar;
