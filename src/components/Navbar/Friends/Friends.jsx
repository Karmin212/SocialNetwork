import React from 'react';
import style from './Friends.module.css';
import Icon from './Icon/Icon';

const Friends = (props) => {
    let UsersFriends = props.data.map(f => <Icon id={f.id} icon={f.icon}/>)
    return (
        <div className={style.friends}>
            <div className={style.title}>Friends</div>
            <div className={style.icons}>
                {UsersFriends}
            </div>
        </div>
    )
}

export default Friends;
