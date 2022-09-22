import React from 'react';
import Item from './Item/Item';
import style from './Right_messages.module.css'

const Right_messages = (props) => {

    let MessagesElements = props.MessagesData.map(m => (<Item id={m.id} person={m.person} ava={m.ava} text={m.text}/>))

    return (
        <div className={style.messages}>
            {MessagesElements}
        </div>
    )
}

export default Right_messages;