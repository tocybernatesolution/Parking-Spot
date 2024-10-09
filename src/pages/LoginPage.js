import React, { useEffect } from 'react';
import LogoCard from '../components/Logo/LogoCard';
import style from '../styles/login.module.css';

function LoginPage() {
    useEffect(() => {
        const handleBackButton = (event) => {
            const input = document.querySelector('input:focus');
            if (input) {
                input.blur(); // Dismiss the keyboard by blurring the focused input
                event.preventDefault(); // Prevent default back action
                return false; // Prevents the browser's default behavior
            }
        };

        window.addEventListener('popstate', handleBackButton);

        return () => {
            window.removeEventListener('popstate', handleBackButton);
        };
    }, []);

    return (
        <div className={`flex flex-col min-h-screen items-center ${style.container}`}>
            <div className={style.content}>
                <LogoCard />
                <p className={style.tageline}>Sign In To Parking Spot Admin</p>
                <div className="w-full max-w-md mt-5">
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 mt-2 bg-transparent py-3"
                    />
                </div>
                <div className="w-full max-w-md mt-5">
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 mt-2 bg-transparent py-3"
                        multiple={false}
                    />
                </div>
                <div className={`w-full max-w-md mt-10 flex justify-center items-center p-10 ${style.btn}`}
                    onClick={() => {
                        alert("jkfgjkdfkj");
                    }}
                >
                    <span>login</span>
                </div>
                <div style={{ height: 80 }} />
            </div>
        </div>
    );
}

export default LoginPage;
