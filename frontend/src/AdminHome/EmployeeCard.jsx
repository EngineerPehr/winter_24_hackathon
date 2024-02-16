import React, { useState } from "react";
import sleepingPersonImage from "./sleeping_person.jpg";

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
            <div>
                <img src={sleepingPersonImage} style={{ width: "100px"}} alt="sleeping person"></img>
            </div>
            <div>
                <h3>{employee.name}</h3>
                <h4>Age: {employee.age}</h4>
                <h4>Gender: {employee.gender}</h4>
                <h4>Sleep Hours: {employee.sleep_duration}</h4>
            </div>
            <div>
                <button>X</button>
                <button onClick={toggleVisibility} >Hide</button>
            </div>
            </>
        )
    }
}