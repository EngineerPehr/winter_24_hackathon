import React from "react";
import { Link } from "react-router-dom";
import { employees } from "../utils/api";
import EmployeesList from "./EmployeesList"
import graph from "./graph.jpg"

// Placeholder admin goals data:
const goals = {
    sleepHoursThisMonth: 1545,
    sleepHoursGoal: 2800,
    revenueThisMonth: 150085,
    revenueGoal: 220000,
    companyMood: "Decent"
}

export default function AdminHome() {

    return (
        <>
            <div>
                <img src={graph} style={{ width: "100px"}} alt="company mood graph"></img>
                <h2>Company Mood</h2>
                <h3>{goals.companyMood}</h3>
            </div>
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
                <h2>Your Employees</h2>
                <select name="admin-options" id="admin-options">
                    <option value="">Menu</option>
                    <option value="profile">Profile</option>
                    <option value="report_history">Report History</option>
                    <option value="employees_list">Full List of Employees</option>
                    <option value="settings">Settings</option>
                    <option value="help_desk">IT Help Desk</option>
                </select>
                <div>
                    <Link to="">Register A New Employee</Link>
                </div>
                <div>
                    <EmployeesList employees={employees}/>
                </div>
            </div>
        </>
    )
}
