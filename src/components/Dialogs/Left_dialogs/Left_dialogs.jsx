import React from 'react';
import style from './Left_dialogs.module.css'
import Title from './Title/Title';
import Item from './Item/Item';

const Left_dialogs = (props) => {

    let dialogsElement = props.DialogsData.map(d => <Item id={d.id} ava={d.ava} name={`${d.name}`}/>)

    return (
        <div className={style.dialogs}>
            <Title />
            {dialogsElement}
        </div>
    )
}

export default Left_dialogs;