import React from 'react'
import style from '../styles/alluser.module.css'
import { FaSearch } from 'react-icons/fa';
import { FaCloudDownloadAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
const data = [
    { id: 1, name: 'John Doe', age: "LAF 9291", occupation: 'Engineer' },
    { id: 2, name: 'Jane Smith', age: "LAF 9291", occupation: 'Designer' },
    { id: 3, name: 'Sam Johnson', age: "LAF 9291", occupation: 'Developer' },
    { id: 3, name: 'Sam Johnson', age: "LAF 9291", occupation: 'Developer' },
    { id: 3, name: 'Sam Johnson', age: "LAF 9291", occupation: 'Developer' },
    { id: 3, name: 'Sam Johnson', age: "LAF 9291", occupation: 'Developer' },
    { id: 3, name: 'Sam Johnson', age: "LAF 9291", occupation: 'Developer' },
    { id: 3, name: 'Sam Johnson', age: "LAF 9291", occupation: 'Developer' },
    { id: 3, name: 'Sam Johnson', age: "LAF 9291", occupation: 'Developer' },
    { id: 3, name: 'Sam Johnson', age: "LAF 9291", occupation: 'Developer' },
    { id: 3, name: 'Sam Johnson', age: "LAF 9291", occupation: 'Developer' },
    { id: 3, name: 'Sam Johnson', age: "LAF 9291", occupation: 'Developer' },
    { id: 3, name: 'Sam Johnson', age: "LAF 9291", occupation: 'Developer' },
    { id: 3, name: 'Sam Johnson', age: "LAF 9291", occupation: 'Developer' },
    { id: 3, name: 'Sam Johnson', age: "LAF 9291", occupation: 'Developer' },
];

function Transaction() {
    return (
        <div className={style.container}>
            <div className={style.title}>
                <span>Hello Evano 👋🏼,</span>
            </div>
            <div style={{ height: 10 }} />
            <div className={style.searchcard}>
                <div className={style.allQr}>
                    <strong>Transactions</strong>
                </div>
                
                <div className={style.inputQRCode}>
                    <div className={style.inputIconWrapper}>
                        <FaSearch size={20} color="#aaa" />
                        <input placeholder="Search..." />
                    </div>
                </div>



            </div>
            <div style={{ height: 20 }} />
            <div className={style.tableContainer}>
                <table className={style.table}>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>UserName</th>
                            <th>Subscription Type</th>
                            <th>Amount</th>
                            <th>Subscription Request</th>
                            <th>Payment Status</th>
                        </tr>
                    </thead>
                    <tbody >
                        {data.map((person) => (
                            <tr key={person.id}>
                                <td className={style.qrcode}>
                                  {person.age}
                                </td>
                                <td className={style.centered}>{person.name}</td>
                                <td className={style.centered}>{person.age}</td>
                                <td className={style.centered}>{person.occupation}</td>
                                <td style={{ alignItems: "center", flex: 1, justifyContent: "center" }}><FaCloudDownloadAlt
                                    size={30}
                                    color='#00B087'
                                    style={{ alignSelf: "center", width: "90%" }}

                                /></td>
                                <td className={style.centered}>{person.occupation}</td>
                           
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            
        </div>
    )
}

export default Transaction