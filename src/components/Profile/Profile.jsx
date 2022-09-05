import Posts from './Posts/Posts';
import React from 'react';
import AvatarDiscription from './AvatarDiscription/AvatarDiscription';

const Profile = () => {
    return (
        <div>
            <AvatarDiscription/>
            <Posts/>
        </div>
    )
}

export default Profile;