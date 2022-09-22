import React from 'react';
import style from './Friends.module.css';
import Item from './Item/Item';

const Friends = (props) => {
    let UsersFriends = props.data.map(f => <Item icon={f.icon}/>)
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
