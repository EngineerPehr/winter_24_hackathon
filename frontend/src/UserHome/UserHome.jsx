import React from "react";
import { Link, useParams } from "react-router-dom";
import DropDownMenuButton from "../utils/DropDownMenuButton";
import ProgressBar from "../utils/ProgressBar";


export default function UserHome() {
    const { userId } = useParams()
    // Options to pass down to <DropDownMenuButton/>
    const menuOptions = [
        {
            option: "Profile",
            route: `/user/${userId}/home`,
        },
        {
            option: "Report History",
            route: ``,
        },
        {
            option: "Additional Resources",
            route: ``,
        },
        {
            option: "Settings",
            route: ``,
        },
        {
            option: "Privacy Policy",
            route: ``,
        },
    ]

    return (
        <div className="columns-2">
            <div className="break-after-column m-6">
                <div className="pt-2">
                    <h2 className="text-3xl font-bold">Welcome Anonymous369</h2>
                    <hr className="h-px border-0" style={{ backgroundColor: "#000000"}} />
                    <p className="my-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
                <div className="flex flex-col pb-5">
                    <Link to={`/user/${userId}/log`} className="w-5/12 button-white-rounded my-2" reloadDocument>LOG ACTIVITY</Link>
                    <Link to={``} className="w-5/12 button-dark-rounded my-2">PAST REPORTS</Link>
                </div>
                <div className="mt-5">
                    <h2 className="text-2xl">Recommended Goals</h2>
                    <div className="text-lg mt-2">
                        <h3>Sleep Duration: 8 hours per day</h3>
                        <h3>BMI 18.5% to 24.9%</h3>
                        <h3>Steps: 6,000 to 8,000 steps per day</h3>
                        <h3>Stress Levels: Below 5</h3>
                        <h3>Heart Rate: Below 70</h3>
                    </div>
                </div>
            </div>
            <div className="bg-gray-300 m-6">
                <div className="flex relative justify-center px-3 pt-3">
                <h2 className="text-2xl">Last Month Metrics</h2>
                    <div className="absolute right-5 mt-1.5">
                        <DropDownMenuButton options={menuOptions} />
                    </div>
                </div>
                <hr className="h-px border-0" style={{ backgroundColor: "#000000"}}/>
                <div className="mt-3 p-3">
                    <div className="border-2 border-black p-1 pb-4 my-2">
                        <h3 className="text-xl">Sleep Duration</h3>
                        <p>Your Average: # value</p>
                        <ProgressBar completed={false} progress={75} />
                    </div>
                    <div className="border-2 border-black p-1 pb-4 my-2">
                        <h3 className="text-xl">BMI</h3>
                        <p>Your Average: # value</p>
                        <ProgressBar completed={false} progress={70} />
                    </div>
                    <div className="border-2 border-black p-1 pb-4 my-2">
                        <h3 className="text-xl">Heart Rate</h3>
                        <p>Your Average: # value</p>
                        <ProgressBar completed={false} progress={90} />
                    </div>
                    <div className="border-2 border-black p-1 pb-4 my-2">
                        <h3 className="text-xl">Steps Per Day</h3>
                        <p>Your Average: # value</p>
                        <ProgressBar completed={false} progress={75} />
                    </div>
                    <div className="border-2 border-black p-1 pb-4 mt-2">
                        <h3 className="text-xl">Blood Pressure</h3>
                        <p>Your Average: # value</p>
                        <ProgressBar completed={false} progress={85} />
                    </div>
                </div>
            </div>
        </div>
    )
}
