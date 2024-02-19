import React from "react";
import { Link } from "react-router-dom";
import EmployeesList from "./EmployeesList"
import graph from "./graph.jpg"
import ProgressBar from "../utils/ProgressBar";
import DropDownMenuButton from "../utils/DropDownMenuButton";



export default function AdminHome() {
    // Placeholder admin goals data:
    const goals = {
        sleepHoursThisMonth: 1545,
        sleepHoursGoal: 2800,
        tasksMet: 80,
        tasksGoal: 128,
        companyMood: "Decent"
    }
    // Options to pass down to <DropDownMenuButton/>
    const menuOptions = [
        {
            option: "Profile",
            route: "",
        },
        {
            option: "Report History",
            route: "",
        },
        {
            option: "Settings",
            route: "",
        },
        {
            option: "Full List of Employees",
            route: "",
        },
        {
            option: "IT Help Desk",
            route: "",
        },
    ]
    // Calculate percent progress towards a goal
    const sleepHoursProgress = (goals.sleepHoursThisMonth / goals.sleepHoursGoal) * 100
    const tasksProgress = (goals.tasksMet / goals.tasksGoal) * 100


    return (
        <div className="columns-2">
            <div className="break-after-column m-6">
                <div className="columns-2">
                    <img src={graph} style={{ width: "200px"}} alt="company mood graph"></img>
                    <h2 className="text-3xl my-3">Company Mood</h2>
                    <h3 className="text-2xl font-bold">{goals.companyMood}</h3>
                </div>
                <div className="my-3">
                    <h2 className="text-2xl">Employee Sleep Quality Goals</h2>
                    <div className="my-3">
                        <ProgressBar completed={100} progress={Math.round(sleepHoursProgress)}/>
                    </div>
                    <p>Total {goals.sleepHoursThisMonth.toLocaleString()} out of {goals.sleepHoursGoal.toLocaleString()} hours of sleep.</p>
                    <p className="mt-1">Check out ways to improve your company numbers</p>

                    <div className="mt-3">
                        <Link className="button-white-rounded border-4 px-10">See Report</Link>
                    </div>
                </div>
                <div className="my-3">
                    <h2 className="text-2xl">Monthly Client Tasks Met</h2>
                    <div className="my-3">
                        <ProgressBar completed={100} progress={Math.round(tasksProgress)}/>
                    </div>
                    <p>Successfully completed {goals.tasksMet} of {goals.tasksGoal} targeted tasks.</p>
                </div>
            </div>
            <div className="bg-gray-300 m-6 pb-3">
                <div className="flex relative justify-center px-3 py-1">
                    <h2 className="text-2xl">Your Employees</h2>
                    <div className="absolute right-5 mt-2">
                        <DropDownMenuButton options={menuOptions} />
                    </div>
                </div>
                <hr className="h-px border-0" style={{ backgroundColor: "#000000"}}/>
                <div className="flex justify-center px-3">
                    <Link to="/register" className="button-white-rounded my-6 w-full ml-auto">Register A New Employee</Link>
                </div>
                <div className="overflow-y-auto h-96">
                    <EmployeesList />
                </div>
            </div>
        </div>
    )
}


/*
<select name="admin-options" id="admin-options">
                    <option value="">Menu</option>
                    <option value="profile">Profile</option>
                    <option value="report_history">Report History</option>
                    <option value="employees_list">Full List of Employees</option>
                    <option value="settings">Settings</option>
                    <option value="help_desk">IT Help Desk</option>
                </select>
*/
