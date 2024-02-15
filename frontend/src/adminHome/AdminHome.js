import React from "react";
import { employees } from "../utils/api";
import EmployeesList from "./EmployeesList";

function AdminHome() {

    return (
        <>
            <div>
                <h2>Employee Sleep Quality Goals</h2>
            </div>
            <div>
                <h2>Monthly Client Tasks Met</h2>
            </div>
            <div>
                <h2>Monthly Revenue Goals</h2>
            </div>
            <div>
                <h2>Your Employees</h2>
                <a href="">Register A New Employee</a>
                <div>
                    <EmployeesList employees={employees}/>
                </div>
            </div>
        </>
    )
}

export default AdminHome