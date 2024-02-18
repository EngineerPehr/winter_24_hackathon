import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../utils/Footer";

export default function LoginPage() {
    const [userType, setUserType] = useState('');
    const navigate = useNavigate(); // Initialize useHistory hook
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUserTypeChange = (e) => {
        setUserType(e.target.value);
    }

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (userType === "admin") {
            // If admin is selected, navigate to admin page
            navigate("/admin/home");
        } else {
            // Navigate to user account page
            navigate("/user/account");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="mt-8 text-3xl font-bold">You're On the Journey to Better Mental Health</h1>
            <div className="mt-5 mb-2 block w-1/2 rounded border-2 border-black px-6 pb-[6px] pt-2 text-s font-medium leading-normal text-primary"
                data-te-ripple-init>
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col items-center justify-center">
                        {/* Select user type */}
                        <div className="relative mt-8 mb-1 py-3 w-full rounded border-2" data-te-input-wrapper-init>
                            <label htmlFor="userType" onChange={handleUserTypeChange}></label>
                            <select name="dropdown" id="userType" value={userType}>
                                <option value="/">Select Type of Account</option>
                                <option value="admin">Admin</option>
                                <option value="user">User</option>
                            </select>
                        </div>
                        {/* Username input */}
                        <div className="relative mt-6 mb-6 w-full rounded border-2" data-te-input-wrapper-init>
                            <label htmlFor="username"></label>
                            <input type="text" id="username" value={username} placeholder="Enter Username" onChange={handleUsernameChange} />
                        </div>
                        {/* Password input */}
                        <div class="relative mb-6 w-full rounded border-2" data-te-input-wrapper-init>
                            <label htmlFor="password"></label>
                            <input type="password" id="password" value={password} placeholder="Password" onChange={handlePasswordChange} />
                        </div>
                        <div class="relative mb-6 w-full rounded border-2" data-te-input-wrapper-init>
                            <label htmlFor="password"></label>
                            <input type="password" id="password" value={password} placeholder="Confirm Password" onChange={handlePasswordChange} />
                        </div>
                        {/* Register button */}
                        <div className="flex flex-col items-center justify-center">
                            <button
                                type="submit" 
                                className="button-dark-rounded w-full mx-20"
                             >
                                REGISTER
                            </button>
                        </div>
                    </div>
                </form>
            </div>

            {/* Footer section */}
            <div>
                <Footer />
            </div>            
        </div>
        )
    }