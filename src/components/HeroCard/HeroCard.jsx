import React from 'react';
import LogoCard from '../Logo/LogoCard';
import style from './herocard.module.css';

export default function HeroCard() {
  return (
    <div className="flex flex-col min-h-screen"> {/* Changed min h-screens to min-h-screen */}
      <LogoCard />
      <div style={{ height: 10 }} />
      <div className={`flex-grow ${style.content} `}> 
        <div className={style.left}>
          <h1 className={style.text}>
            Scan QR to Instantly Access
            <span className={style.text1}> Vehicle Owner Details</span>
          </h1>
          <p className={style.short}>
            Quick and Easy Way to Retrieve Vehicle Owner Information with a Simple QR Scan
          </p>
          <div className={style.btn}
          onClick={()=>{
            alert("jkfgjkdfkj")
          }}
          
          >
            <span>Scan QR</span>
          </div>
        </div>
        <div className={style.right}>
         <img src='/scan.png' />
        </div>
      </div>
    </div>
  );
}
