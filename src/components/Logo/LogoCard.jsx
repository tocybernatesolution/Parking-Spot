import React from 'react'
import style from './logo.module.css'
function LogoCard() {
  return (
    <div className={style.container}>
     <img
     className={style.logo}
     
     src="/Logo.png" alt="My Image" />
    </div>
  )
}

export default LogoCard