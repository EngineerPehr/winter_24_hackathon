import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export default function CreateUserAccount() {
    let user;
    const [userFullname, setUserFullname] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleUserFullnameChange = (e) => {
        setUserFullname(e.target.value)
    }

    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="mt-8 text-3xl font-bold">
                You"re On the Journey to Better Mental Health
            </h1>
            <div
                className="mt-5 mb-2 block w-1/2 rounded border-2 border-black px-6 pb-[6px] pt-2 text-s font-medium leading-normal text-primary"
                data-te-ripple-init
            >
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col items-center justify-center">
                        {/* User fullname input */}
                        <div
                            className="relative my-6 py-2 px-2 w-full rounded border-2"
                            data-te-input-wrapper-init
                        >
                            <label htmlFor="fullname"></label>
                            <input
                                type="string"
                                id="fullname"
                                value={userFullname}
                                placeholder="First and Last Name"
                                onChange={handleUserFullnameChange}
                            />
                        </div>
                        {/* Username input */}
                        <div
                            className="relative mb-6 py-2 px-2 w-full rounded border-2"
                            data-te-input-wrapper-init
                        >
                            <label htmlFor="username"></label>
                            <input
                                type="string"
                                id="username"
                                value={username}
                                placeholder="Enter Username"
                                onChange={handleUsernameChange}
                            />
                        </div>
                        {/* Password input */}
                        <div
                            class="relative mb-6 py-2 px-2 w-full rounded border-2"
                            data-te-input-wrapper-init
                        >
                            <label htmlFor="password"></label>
                            <input
                                type="string"
                                id="password"
                                value={password}
                                placeholder="Password"
                                onChange={handlePasswordChange}
                            />
                        </div>
                        <div
                            class="relative mb-6 py-2 px-2 w-full rounded border-2"
                            data-te-input-wrapper-init
                        >
                            <label htmlFor="password"></label>
                            <input
                                type="string"
                                id="password"
                                value={password}
                                placeholder="Confirm Password"
                                onChange={handlePasswordChange}
                            />
                        </div>
                        {/* Continue button */}
                        <div className="flex flex-col items-center justify-center">
                            <button
                                type="submit"
                                className="button-dark-rounded w-full mx-20"
                            >
                                <a href="/user/registerForm">CONTINUE</a>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
