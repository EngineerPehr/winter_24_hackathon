import React, { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createUser } from '../utils/api'

export default function CreateAccount() {
    const [userType, setUserType] = useState('')
    const navigate = useNavigate() // Initialize useHistory hook
    const [user, setUser] = useState({
        username: '',
        admin: true,
    })
    const [password, setPassword] = useState('')

    const handleUserTypeChange = (e) => {
        setUserType(e.target.value)
    }

    function handleChange({ target: { name, value } }) {
        if (name === 'dropdown') {
            setUserType(value)
            setUser((previousUser) => ({
                ...previousUser,
                admin: value,
            }))
        } else if (name === 'password') {
            setPassword(value)
        } else {
            setUser((previousUser) => ({
                ...previousUser,
                [name]: value,
            }))
        }
    }

    const submitUser = useCallback(
        async (user) => {
            const abortController = new AbortController()

            try {
                const response = await createUser(user, abortController.signal)
                return response
            } catch (error) {
                console.error(error)
                throw error
            } finally {
                abortController.abort()
            }
        },
        [user]
    )

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await submitUser(user)

            if (userType === 'admin') {
                // If admin is selected, navigate to Create admin account page
                navigate('/admin/home')
            } else {
                // Navigate to Create user account page
                navigate(`/user/${response.person_id}/home`)
            }
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="mt-8 text-3xl font-bold">
                You're On the Journey to Better Mental Health
            </h1>
            <div
                className="mt-5 mb-2 block w-1/2 rounded border-2 border-black px-6 pb-[6px] pt-2 text-s font-medium leading-normal text-primary"
                data-te-ripple-init
            >
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col items-center justify-center">
                        {/* Select user type */}
                            <label htmlFor="userType"></label>
                            <select
                            className=" mt-8 mb-2 py-2 w-full rounded border-2"
                                name="dropdown"
                                id="userType"
                                onChange={handleUserTypeChange}
                            >
                                <option value="/">
                                    Select Type of Account
                                </option>
                                <option value="admin">Admin</option>
                                <option value="user">User</option>
                            </select>
                        {/* Username input */}
                            <label htmlFor="username"></label>
                            <input
                            className="relative my-6 py-2 px-2 w-full rounded border-2"
                                type="text"
                                id="username"
                                name="username"
                                value={user.username}
                                placeholder="Enter Username"
                                onChange={handleChange}
                            />
                        {/* Password input */}
                            <label htmlFor="password"></label>
                            <input
                            className="relative mb-6 py-2 px-2 w-full rounded border-2"
                                type="password"
                                id="password"
                                name="password"
                                value={password}
                                placeholder="Password"
                                onChange={handleChange}
                            />
                        {/* <div
                            class="relative mb-6 py-2 px-2 w-full rounded border-2"
                            data-te-input-wrapper-init
                        >
                            <label htmlFor="password"></label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                placeholder="Confirm Password"
                                onChange={handlePasswordChange}
                            />
                        </div> */}
                        {/* Register button */}
                        <div className="flex flex-col items-center justify-center">
                            <button
                                type="submit"
                                className="button-dark-rounded w-full mx-20"
                            >
                                REGISTER
                            </button>
                        </div>
                        <p>
                            Or,{' '}
                            <a href="/login" className="underline">
                                Sign In
                            </a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}
