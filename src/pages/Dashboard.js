import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa'; // Import the hamburger icon
import style from '../styles/dashboard.module.css';
import { IoIosHome } from "react-icons/io";
import LogoCard from '../components/Logo/LogoCard';
import MainScreen from './MainScreen';
function Dashboard() {
    const [activeTab, setActiveTab] = useState('Home');
    const [drawerOpen, setDrawerOpen] = useState(false); // State for controlling drawer

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
        setDrawerOpen(false); // Close the drawer when a tab is clicked (on mobile)
    };

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    const renderContent = () => {
        switch (activeTab) {
            case 'Home':
                return <MainScreen />
            case 'Profile':
                return <div>This is your Profile</div>;
            case 'Settings':
                return <div>Configure your Settings here</div>;
            default:
                return <div>Welcome to the Dashboard</div>;
        }
    };

    return (
        <div className={style.dashboardContainer}>

            <button className={style.hamburger} onClick={toggleDrawer}>
                <FaBars />
            </button>

            <div className={`${style.sidebar} ${drawerOpen ? style.open : ''}`}>
                <img
                    className={style.logo}

                    src="/Logo.png" alt="My Image" />
                <ul className={style.box}>
                    <li
                        className={activeTab === 'Home' ? style.active : style.unactive}
                        onClick={() => handleTabClick('Home')}
                    >
                        <IoIosHome />
                        Dashboard
                    </li>
                    <li
                        className={activeTab === 'Profile' ? style.active : style.unactive}
                        onClick={() => handleTabClick('Profile')}
                    >
                        <IoIosHome />

                        All User
                    </li>
                    <li
                        className={activeTab === 'Settings' ? style.active : style.unactive}
                        onClick={() => handleTabClick('Settings')}
                    >
                        <IoIosHome />

                        Transaction History
                    </li>
                </ul>
            </div>

            <div className={style.contentArea}>
                {renderContent()}
            </div>
        </div>
    );
}

export default Dashboard;
