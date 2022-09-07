import React from 'react';
import Left_dialogs from './Left_dialogs/Left_dialogs';
import Right_messages from './Right_messages/Right_messages';
import style from './Dialogs.module.css'

const Dialogs = (props) => {
    return (
        <div className={style.dialogs}>
            <Left_dialogs />
            <Right_messages />
        </div>
    )
}

export default Dialogs;