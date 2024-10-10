import React from 'react'
import style from '../styles/mainscreen.module.css'
const data = [
    { id: 1, name: 'John Doe', age: 28, occupation: 'Engineer' },
    { id: 2, name: 'Jane Smith', age: 34, occupation: 'Designer' },
    { id: 3, name: 'Sam Johnson', age: 23, occupation: 'Developer' },
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
            <div className={style.tableContainer}>
                <table className={style.table}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Occupation</th>
                            <th>Occupation</th>
                            <th>Occupation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((person) => (
                            <tr key={person.id}>
                                <td>{person.id}</td>
                                <td>{person.name}</td>
                                <td>{person.age}</td>
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