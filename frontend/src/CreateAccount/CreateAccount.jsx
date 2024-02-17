import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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
            // Navigate to user page
            navigate("/user/home");
        }
    };

    return (
        <div className="container">
            <h1>You're On the Journey to Better Mental Health</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="userType" onChange={handleUserTypeChange}></label>
                    <select name="dropdown" id="userType" value={userType}>
                        <option value="/">Select Type of Account</option>
                        <option value="admin">Admin</option>
                        <option value="user">User</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="username"></label>
                    <input type="text" id="username" value={username} placeholder="Enter Username" onChange={handleUsernameChange} />
                </div>
                <div>
                    <label htmlFor="password"></label>
                    <input type="password" id="password" value={password} placeholder="Password" onChange={handlePasswordChange} />
                </div>
                <div>
                    <label htmlFor="password"></label>
                    <input type="password" id="password" value={password} placeholder="Comfirm Password" onChange={handlePasswordChange} />
                </div>
                <div>
                    <Link to="/admin/home">
                        <button type="submit">REGISTER</button>
                    </Link>
                </div>
            </form>
        </div>
    )
}

