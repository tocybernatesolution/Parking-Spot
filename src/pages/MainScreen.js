import React, { useState } from 'react'
import style from '../styles/mainscreen.module.css'
import QRCode from "react-qr-code";
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

export default function MainScreen() {
    const [isModalOpen, setModalOpen] = useState(false);
    const toggleModal = () => {
        setModalOpen(!isModalOpen);
    }
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
                <div className={style.button}
                    onClick={() => {
                        toggleModal()
                    }}
                >
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
                                        // style={{ height: "auto", maxWidth: "50%", width: "100%" }}
                                        style={{
                                            alignSelf: "center", width: "70%",

                                            height: "auto",
                                        }}


                                        value={person.id}
                                        viewBox={`0 0 256 256`}
                                    />
                                </td>
                                <td className={style.centered}>{person.name}</td>
                                <td className={style.centered}>{person.age}</td>
                                <td className={style.centered}>{person.occupation}</td>
                                <td style={{ alignItems: "center", flex: 1, justifyContent: "center" }}><FaCloudDownloadAlt
                                    size={30}
                                    color='#00B087'
                                    style={{ alignSelf: "center", width: "90%" }}

                                /></td>
                                <td><MdDelete
                                    size={30}
                                    color='#00B087'
                                    style={{ alignSelf: "center", width: "90%" }}


                                /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {isModalOpen && (
                <Modal onClose={toggleModal}>
                    <div style={{ width: "100%", display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
                        <h2 className={style.modaltitle} style={{ margin: "0 auto", position: "absolute", left: "50%", transform: "translateX(-50%)" }}>QR Code Generation</h2>
                        <IoMdClose
                            size={24}
                            color="red"
                            style={{ cursor: "pointer" }}
                        />
                    </div>
                    <div style={{height:5}} />
                    <p className={style.desc}>Enter the Amount of Qr Code</p>
                    <div style={{height:10}} />
                    <div className={style.inputQRCode}>
                        <input 
                        
                        placeholder='200                '
                        />
                    </div>
                    <div style={{height:15}} />
                    <div className={style.codes}>
                      <QRCodee />
                      <QRCodee />
                      <QRCodee />
                      <QRCodee />
                      <QRCodee />
                      <QRCodee />
                      <QRCodee />
                      <QRCodee />
                      <QRCodee />
                      <QRCodee />
                      <QRCodee />
                      <QRCodee />
                      <QRCodee />
                      <QRCodee />
                      <QRCodee />
                    </div>

              
                </Modal>
            )}
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

const Modal = ({ children, onClose }) => {
    return (
        <div className={style.modalBackdrop}>
            <div className={style.modalContent}>
                {children}
                {/* <button onClick={onClose}>Close Modal</button> */}
            </div>
        </div>
    );
}


const QRCodee=()=>(
    <div className={style.qrcode}>
    <QRCode
        size={100}
        // style={{ height: "auto", maxWidth: "50%", width: "100%" }}
        style={{
            alignSelf: "center", width: "70%",

            height: "auto",
        }}


        value={"Hello"}
        viewBox={`0 0 256 256`}
    />
</div>
)