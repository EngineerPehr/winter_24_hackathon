import React from "react";
import sleepingPersonImage from "./sleeping_person.jpg";

export default function EmployeeCard({ employee }) {
    return (
        <>
            <img src={sleepingPersonImage} style={{ width: "100px"}} alt="sleeping person"></img>
            <h3>{employee.name}</h3>
            <h4>Age: {employee.age}</h4>
            <h4>Gender: {employee.gender}</h4>
            <h4>Sleep Hours: {employee.sleep_duration}</h4>
        </>
    )
}