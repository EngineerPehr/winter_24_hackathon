import React, { useState } from "react";
import sleepingPersonImage from "./sleeping_person.jpg";
import { FaEyeSlash, FaX } from "react-icons/fa6";

export default function EmployeeCard({ employee }) {
    const [hidden, setHidden] = useState(false)

    const toggleVisibility = () => {
        hidden ? setHidden(false) : setHidden(true)
    }

    if (hidden) {
        return <button onClick={toggleVisibility}>Show</button>
    } else {
        return (
            <>
            <div className="flex relative w-auto p-2 border my-2 border-gray-200 rounded-lg shadow hover:bg-gray-100">
                <div className="flex-none w-32">
                    <img src={sleepingPersonImage} style={{ width: "100px"}} alt="sleeping person"></img>
                </div>
                <div className="flex-auto w-64">
                    <h3>{employee.name}</h3>
                    <h4>Age: {employee.age}</h4>
                    <h4>Gender: {employee.gender}</h4>
                    <h4>Sleep Hours: {employee.sleep_duration}</h4>
                </div>
                <div className="flex flex-col justify-around text-xl">
                    <button><FaX /></button>
                    <button onClick={toggleVisibility} ><FaEyeSlash /></button>
                </div>
            </div>
            </>
        )
    }
}