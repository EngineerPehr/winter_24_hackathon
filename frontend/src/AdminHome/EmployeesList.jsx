import React from "react";
import EmployeeCard from "./EmployeeCard";

export default function EmployeesList({ employees }) {
    return (
        <ul>
        {employees.map((employee) => 
            <li key={employee.person_id}>
                <EmployeeCard employee={employee}/>
            </li>
        )}
    </ul>
    )
}