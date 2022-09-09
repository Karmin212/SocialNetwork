import React from 'react';
import Item from './Item/Item';
import style from './Right_messages.module.css'

const Right_messages = () => {

    let MessagesData = [
        {id:1, person:'', ava:'https://n1s1.hsmedia.ru/6b/e3/4a/6be34af2ebc9310ce7a37951eb062e3a/728x485_1_e93e65b549b74f838183ba0696058a6f@1200x800_0xac120003_8396543791615827348.jpg', text:'Hi! How are you?'},
        {id:1, person:'I', ava:'https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg', text:"Hi! I'm a bit busy trying to build a website with React"},
        {id:1, person:'', ava:'https://n1s1.hsmedia.ru/6b/e3/4a/6be34af2ebc9310ce7a37951eb062e3a/728x485_1_e93e65b549b74f838183ba0696058a6f@1200x800_0xac120003_8396543791615827348.jpg', text:'Okay, good luck'}
    ]

    let MessagesElements = MessagesData.map(m => (<Item id={m.id} person={m.person} ava={m.ava} text={m.text}/>))

    return (
        <div className={style.messages}>
            {MessagesElements}
        </div>
    )
}

export default Right_messages;