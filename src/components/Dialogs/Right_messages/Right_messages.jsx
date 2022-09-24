import React from 'react';
import Item from './Item/Item';
import style from './Right_messages.module.css'

const Right_messages = (props) => {

    let MessagesElements = props.MessagesData.map(m => (<Item id={m.id} person={m.person} ava={m.ava} text={m.text} />))

    let newMessageElement = React.createRef();

    let addMessage = () => {
        let text=newMessageElement.current.value;
        alert(text);
    }

    return (
        <div className={style.Right_messages}>
            <div className={style.messages}>
                {MessagesElements}
            </div>
            <div className={style.newMessage}>
                <div className={style.messageArea}><textarea ref={newMessageElement} placeholder="Type here"></textarea></div>
                <button onClick={addMessage}>Send</button>
            </div>
        </div>
    )
}

export default Right_messages;