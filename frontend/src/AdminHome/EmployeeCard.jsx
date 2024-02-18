import React, { useState } from "react";
import { deleteUser } from "../utils/api";
import sleepingPersonImage from "./sleeping_person.jpg";
import { FaEyeSlash, FaEye } from "react-icons/fa6";
import RemoveEmployeeButton from "./RemoveEmployeeButton";

export default function EmployeeCard({ employee, setError, loadUsers}) {
    const [hidden, setHidden] = useState(false)
    const [openModal, setOpenModal] = useState(false);

    // RemoveEmployeeButton functionality, deletes
    async function handleDelete() {
        const abortController = new AbortController()
    
        try {
            await deleteUser(employee.person_id, abortController.signal)
        } catch (er) {
            setError(er)
        } finally {
            setOpenModal(false)
            loadUsers()
        }
        return () => abortController.abort()
    }

    // Hides this card
    const toggleVisibility = () => {
        hidden ? setHidden(false) : setHidden(true)
    }


    if (hidden) {
        return (
            <>
            <div className="flex justify-between p-2 my-2 hover:bg-gray-100">
                <h3 className="font-bold">{employee.username}</h3>
                <button onClick={toggleVisibility} className="text-lg"><FaEye /></button>
            </div>
            </>
        )
    } else {
        return (
            <>
            <div className="flex relative w-auto p-2 my-2 hover:bg-gray-100">
                <div className="flex-none w-32">
                    <img src={sleepingPersonImage} style={{ width: "100px"}} alt="sleeping person"></img>
                </div>
                <div className="flex-auto w-64">
                    <h3 className="font-bold">{employee.username}</h3>
                    <h4>Age: {employee.age}</h4>
                    <h4>Stress Level: {employee.stress_level}</h4>
                    <h4>Sleep Hours: {employee.sleep_duration}</h4>
                </div>
                <div className="flex flex-col justify-around text-xl">
                    <RemoveEmployeeButton openModal={openModal} setOpenModal={setOpenModal} handleDelete={handleDelete}/>
                    <button onClick={toggleVisibility} ><FaEyeSlash /></button>
                </div>
            </div>
            </>
        )
    }
}