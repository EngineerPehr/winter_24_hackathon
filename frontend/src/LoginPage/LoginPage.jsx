import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Username:", username);
        console.log("Password:", password);
    }

    return (
        <div className="container">
            <h1>Welcome Back to Workplace Wellness</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username"></label>
                    <input type="text" id="username" value={username} placeholder="Enter Username" onChange={handleUsernameChange} />
                </div>
                <div>
                    <label htmlFor="password"></label>
                    <input type="password" id="password" value={password} placeholder="........" onChange={handlePasswordChange} />
                </div>
                <div>
                    <p>Forget your password?</p>
                    <Link to="">Reset Password</Link>
                </div>
                <div>
                    <button type="submit">SIGN IN</button>
                </div>

            </form>
        </div>
    )
}

