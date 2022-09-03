import style from './Post.module.css'
import React from 'react';

const Post = (props) => {
    return (
        <div className={style.post}>
            <div className={style.item}>
                <img src='https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg'></img>
                <div className={style.text}>{props.text}</div>
            </div>
            <div className={style.like}>
                <span>♥ {props.likeCount}</span>
            </div>
        </div>
    )
}

export default Post;