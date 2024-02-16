import React from "react";
import { Link } from "react-router-dom";
import { employees } from "../utils/api";
import EmployeesList from "./EmployeesList";

// Placeholder admin goals data:
const goals = {
    sleepHoursThisMonth: 1545,
    sleepHoursGoal: 2800,
    revenueThisMonth: 150085,
    revenueGoal: 220000
}

export default function AdminHome() {

    return (
        <>
            <div>
                <h2>Employee Sleep Quality Goals</h2>
                <p>Total {goals.sleepHoursThisMonth.toLocaleString()} out of {goals.sleepHoursGoal.toLocaleString()} hours of sleep.</p>
                <p>Check out ways to improve your company numbers</p>
                <Link to="">See Report</Link>
            </div>
            <div>
                <h2>Monthly Client Tasks Met</h2>
                <p>Successfully completed 80 of 128 targeted tasks.</p>
            </div>
            <div>
                <h2>Monthly Revenue Goals</h2>
                <p>${goals.revenueThisMonth.toLocaleString()} out of ${goals.revenueGoal.toLocaleString()} revenue goal met.</p>
            </div>
            <div>
                <h2>Your Employees</h2>
                <button>Menu</button> {/* Need more information on the contents of this menu but for now it's here */}
                <Link to="">Register A New Employee</Link>
                <div>
                    <EmployeesList employees={employees}/>
                </div>
            </div>
        </>
    )
}