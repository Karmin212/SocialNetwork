import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let MessagesData = [
  {id:1, person:'', ava:'https://n1s1.hsmedia.ru/6b/e3/4a/6be34af2ebc9310ce7a37951eb062e3a/728x485_1_e93e65b549b74f838183ba0696058a6f@1200x800_0xac120003_8396543791615827348.jpg', text:'Hi! How are you?'},
  {id:1, person:'I', ava:'https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg', text:"Hi! I'm a bit busy trying to build a website with React"},
  {id:1, person:'', ava:'https://n1s1.hsmedia.ru/6b/e3/4a/6be34af2ebc9310ce7a37951eb062e3a/728x485_1_e93e65b549b74f838183ba0696058a6f@1200x800_0xac120003_8396543791615827348.jpg', text:'Okay, good luck'}
]

let DialogsData = [
  {id:1, ava:'https://n1s1.hsmedia.ru/6b/e3/4a/6be34af2ebc9310ce7a37951eb062e3a/728x485_1_e93e65b549b74f838183ba0696058a6f@1200x800_0xac120003_8396543791615827348.jpg', name:'Gena'},
  {id:2, ava:'https://static.mk.ru/upload/entities/2015/08/10/articles/detailPicture/6e/0c/65/829952131_3022582.jpg', name:'Zlata'},
  {id:3, ava:'https://uznayvse.ru/images/stories/uzn_1401128858.jpeg', name:'Margorita'},
  {id:4, ava:'https://usatiki.ru/wp-content/uploads/2019/10/yazyk-koshki-pod-mikroskopom.jpg', name:'Barbie'},
  {id:5, ava:'https://static.mk.ru/upload/entities/2019/12/04/05/articles/detailPicture/ca/7c/1f/aa/fca7f8280e3f02659fbcca0cacfc781e.jpg', name:'Ken'},
]

let PostsData = [
  {id:1, text:['Thanks Dimych for his lessons. ', <a href='https://www.youtube.com/c/ITKAMASUTRA' style={{ textDecoration: 'none', color: '#24D1F8'}}>His youtube.</a>], likeCount:300},
  {id:2, text:"Oh, hi Mark!", likeCount:3000},
  {id:3, text:`From fairest creatures we desire increase,
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
  To eat the world's due, by the grave and thee.`, likeCount:27}
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App MessagesData={MessagesData} DialogsData={DialogsData} PostsData={PostsData}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
