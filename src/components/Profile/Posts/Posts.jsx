import style from './Posts.module.css'
import React from 'react';
import Post from './Post/Post';

const Posts = () => {
    return (
            <div className={style.posts}>
                <div className={style.title}>
                    My posts
                </div>
                <div className={style.adnew}>
                    <textarea maxlength="40000" placeholder="Type anything..."></textarea>
                </div>
                <button className={style.button}>Send</button>
                <div className={style.content}>
                    <Post/>
                    <Post/>
                </div>
            </div>
    )
}

export default Posts;