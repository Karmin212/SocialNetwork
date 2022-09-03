import React from 'react';
import style from './AppSettings.module.css';

const AppSettings = () => {
    return (<div className={`${style.item} ${style.settings} ${style.a}`}>
        <a>Settings</a>
        </div>
    )
}

export default AppSettings;