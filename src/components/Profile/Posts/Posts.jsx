import style from './Posts.module.css'
import React from 'react';
import Post from './Post/Post';

const Posts = (props) => {

    let PostsElements = props.PostsData.map(i => <Post id={i.id} text={i.text} likeCount={i.likeCount}/>)

    let newPostElement = React.createRef();

    let AddPost = () => {
        let text = newPostElement.current.value;
        alert(text)
    }

    return (
            <div className={style.posts}>
                <div className={style.title}>
                    My posts
                </div>
                <div className={style.adnew}>
                    <textarea ref={newPostElement} maxLength="40000" placeholder="Type anything..."></textarea>
                </div>
                <button onClick={AddPost}>Send</button>
                <div className={style.content}>
                    {PostsElements}
                </div>
            </div>
    )
}

export default Posts;