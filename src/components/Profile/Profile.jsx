﻿import Posts from './Posts/Posts';
import React from 'react';
import AvatarDiscription from './AvatarDiscription/AvatarDiscription';

const Profile = (props) => {debugger;
    return (
        <div>
            <AvatarDiscription/>
            <Posts PostsData={props.data.PostsData}/>
        </div>
    )
}

export default Profile;