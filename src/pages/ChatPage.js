import React from 'react'
import style from '../styles/chat.module.css'
import { RiUserForbidFill } from "react-icons/ri";
function ChatPage() {
  return (
    <div className={style.container}>
        <div  className={style.header}>
        <RiUserForbidFill  size={30}/>
            <text >Unknow</text>
        </div>
    </div>
  )
}

export default ChatPage