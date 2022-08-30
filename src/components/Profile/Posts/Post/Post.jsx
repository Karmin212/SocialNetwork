import style from './Post.module.css'
import React from 'react';

const Post = () => {
    return (
        <div className={style.post}>
            <div className={style.item}>
                <img src='https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg'></img>
                <div className={style.text}>post 1</div>
            </div>
            <div className={style.like}>
                <span>♥</span>
            </div>
        </div>
    )
}

export default Post;