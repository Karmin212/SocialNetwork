import Posts from './Posts/Posts';
import style from './Profile.module.css'
import React from 'react';
import AvatarDiscription from './AvatarDiscription/AvatarDiscription';

const Profile = () => {
    return (
        <div className={style.profile}>
            <AvatarDiscription/>
            <Posts/>
        </div>
    )
}

export default Profile;