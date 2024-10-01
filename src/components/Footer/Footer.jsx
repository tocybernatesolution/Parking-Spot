import React from 'react'
import style from './footer.module.css'
function Footer() {
    return (
        <div class={`flex flex-col bg-white-200  h-auto  ${style.content}`}>
            <div
                style={{ height: 20 }}

            />
            <h1 className={style.heading}>Scan QR to Instantly Verify <br /> Membership Status </h1>
            <p className={style.pg}>Effortlessly Check and Confirm Membership Details with a Quick QR Scan</p>
            <div className={style.cards}>
               
<CardUI imgPath={"/users.png"} title={"Commit to a Year of Benefits"} desc={"Unlock exclusive advantages with our comprehensive one-year plan designed for your success"} />
<CardUI imgPath={"/benefits.png"} title={" Double Your Benefits"} desc={"Enjoy extended benefits and savings with our flexible two-year plan tailored to meet your needs."} />
<CardUI imgPath={"/secure.png"}  title={"Secure Your Future "} desc={"Experience long-term advantages and unmatched value with our robust three-year plan, ensuring peace of mind."} />
<CardUI imgPath={"/secure.png"}  title={"Secure Your Future "} desc={"Experience long-term advantages and unmatched value with our robust three-year plan, ensuring peace of mind."} />
            </div>


            <div
                style={{ height: 20 }}

            />
        </div>
    )
}

export default Footer


const CardUI=({imgPath,title,desc})=>(
    <div className={style.card}>
    <div className={style.iconcard}>
        <img
            src={imgPath} />
    </div>
    <h1 className={style.title}>{title}</h1>
    <p className={style.pg}>{desc}</p>
</div>
)