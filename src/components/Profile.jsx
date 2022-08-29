import React from 'react';
import style from './Profile.module.css'

const Profile = () => {
    return (
        <div className={style.profile}>
            <div className={style.ad}>
                <div><img src='https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg'></img></div>
                <div className={style.d}>discription</div>
            </div>
            <div className={style.posts}>
                <div className={style.title}>
                    My posts
                </div>
                <div className={style.adnew}>
                    new post
                </div>
                <button className='button Profile_button__hLjwM'>Send</button>
                <div className={style.content}>
                    <div className={style.item}>
                        <img src='https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg'></img>
                        <div className={style.text}>post 1</div>
                    </div>
                    <div className={style.item}>
                        <img src='https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg'></img>
                        <div className={style.text}>post 2</div>
                    </div>
                    <div className={style.item}>
                        <img src='https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg'></img>
                        <div className={style.text}>post 3</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;