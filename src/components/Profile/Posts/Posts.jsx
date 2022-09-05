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
                    <textarea maxLength="40000" placeholder="Type anything..."></textarea>
                </div>
                <button className={style.button}>Send</button>
                <div className={style.content}>
                    <Post text='Oh, hi Mark!' likeCount='5000000000'/>
                    <Post text={`From fairest creatures we desire increase,
                                That thereby beauty's rose might never die,
                                But as the riper should by time decease,
                                His tender heir might bear his memory:
                                But thou, contracted to thine own bright eyes,
                                Feed'st thy light's flame with self-substantial fuel,
                                Making a famine where abundance lies,
                                Thyself thy foe, to thy sweet self too cruel.
                                Thou that art now the world's fresh ornament
                                And only herald to the gaudy spring,
                                Within thine own bud buriest thy content,
                                And, tender churl, mak'st waste in niggarding:
                                Pity the world, or else this glutton be,
                                To eat the world's due, by the grave and thee.`} 
                                likeCount='27'/>
                </div>
            </div>
    )
}

export default Posts;