import React from 'react';
import style from './Left_dialogs.module.css'
import Title from './Title/Title';
import Item from './Item/Item';

const Left_dialogs = () => {
    return (
        <div className={style.dialogs}>
            <Title />
            <Item ava="https://n1s1.hsmedia.ru/6b/e3/4a/6be34af2ebc9310ce7a37951eb062e3a/728x485_1_e93e65b549b74f838183ba0696058a6f@1200x800_0xac120003_8396543791615827348.jpg" text="Gena" />
            <Item ava="https://static.mk.ru/upload/entities/2015/08/10/articles/detailPicture/6e/0c/65/829952131_3022582.jpg" text="Zlata" />
            <Item ava="https://uznayvse.ru/images/stories/uzn_1401128858.jpeg" text="Margorita" />
            <Item ava="https://usatiki.ru/wp-content/uploads/2019/10/yazyk-koshki-pod-mikroskopom.jpg" text="Barbie" />
            <Item ava="https://static.mk.ru/upload/entities/2019/12/04/05/articles/detailPicture/ca/7c/1f/aa/fca7f8280e3f02659fbcca0cacfc781e.jpg" text="Ken" />
        </div>
    )
}

export default Left_dialogs;