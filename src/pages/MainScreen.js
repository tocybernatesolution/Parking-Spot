import React from 'react'
import style from '../styles/mainscreen.module.css'
import QRCode from "react-qr-code";
const data = [
    { id: 1, name: 'John Doe',  age: "LAF 9291", occupation: 'Engineer' },
    { id: 2, name: 'Jane Smith',  age: "LAF 9291", occupation: 'Designer' },
    { id: 3, name: 'Sam Johnson',  age: "LAF 9291", occupation: 'Developer' },
    { id: 3, name: 'Sam Johnson',  age: "LAF 9291", occupation: 'Developer' },
    { id: 3, name: 'Sam Johnson',  age: "LAF 9291", occupation: 'Developer' },
    { id: 3, name: 'Sam Johnson',  age: "LAF 9291", occupation: 'Developer' },
    { id: 3, name: 'Sam Johnson',  age: "LAF 9291", occupation: 'Developer' },
    { id: 3, name: 'Sam Johnson',  age: "LAF 9291", occupation: 'Developer' },
    { id: 3, name: 'Sam Johnson',  age: "LAF 9291", occupation: 'Developer' },
    { id: 3, name: 'Sam Johnson',  age: "LAF 9291", occupation: 'Developer' },
    { id: 3, name: 'Sam Johnson',  age: "LAF 9291", occupation: 'Developer' },
    { id: 3, name: 'Sam Johnson',  age: "LAF 9291", occupation: 'Developer' },
    { id: 3, name: 'Sam Johnson',  age: "LAF 9291", occupation: 'Developer' },
    { id: 3, name: 'Sam Johnson',  age: "LAF 9291", occupation: 'Developer' },
    { id: 3, name: 'Sam Johnson',  age: "LAF 9291", occupation: 'Developer' },
];

export default function MainScreen() {
    return (
        <div className={style.container}>
            <div className={style.title}>
                <span>Hello Evano 👋🏼,</span>
            </div>
            <div style={{ height: 20 }} />
            <div className={style.cards}>
                <CardUi />
                <CardUi />
                <CardUi />
            </div>
            <div style={{ height: 20 }} />
            <div className={style.searchcard}>
                <div className={style.allQr}>
                    <strong>All QR Code</strong>
                    <span>Active QR Code</span>
                </div>
                <div className={style.button}>
                    <span>Generate New QR code</span>
                </div>


            </div>
            <div style={{ height: 20 }} />

            <div className={style.tableContainer}>
                <table className={style.table}>
                    <thead>
                        <tr>
                            <th>QR Code</th>
                            <th>Assign Users</th>
                            <th>Vehicle Number</th>
                            <th>Change Status</th>
                            <th>Download</th>
                            <th>Deleted</th>
                        </tr>
                    </thead>
                    <tbody >
                        {data.map((person) => (
                            <tr key={person.id}>
                                <td className={style.qrcode}>
                                    <QRCode
                                        size={100}
                                        style={{ height: "auto", maxWidth: "50%", width: "100%" }}
                                        value={person.id}
                                        viewBox={`0 0 256 256`}
                                    />
                                </td>
                                <td>{person.name}</td>
                                <td>{person.age }</td>
                                <td>{person.occupation}</td>
                                <td>{person.occupation}</td>
                                <td>{person.occupation}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>


        </div>
    )
}






const CardUi = () => (
    <div className={style.card}>
        <span className={style.cardtitle}>
            Total Qr Code
        </span>
        <strong >5,423</strong>
        <span className={style.tagline}>
            <span>
                16%
            </span>
            this month</span>
    </div>
)