﻿import Posts from './Posts/Posts';
import React from 'react';
import AvatarDiscription from './AvatarDiscription/AvatarDiscription';

const Profile = (props) => {
    return (
        <div>
            <AvatarDiscription/>
            <Posts PostsData={props.PostsData}/>
        </div>
    )
}

export default Profile;