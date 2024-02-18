import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import DropDownMenuButton from "../utils/DropDownMenuButton";
import ActivityLogForm from "./ActivityLogForm";
import SuggestionCard from "./SuggestionCard";

export default function UserActivityLog() {
    const { userId } = useParams()
    // Options to pass down to <DropDownMenuButton/>
    const menuOptions = [
        {
            option: "Profile",
            route: `/user/${userId}/home`,
        },
        {
            option: "Report History",
            route: "",
        },
        {
            option: "Additional Resources",
            route: "",
        },
        {
            option: "Settings",
            route: "",
        },
        {
            option: "Privacy Policy",
            route: "",
        },
    ]
    const suggestions = [
        {
            title: "Nutrition Tips",
            tip: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            title: "Relaxation Sounds",
            tip: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            title: "Meditation Guide",
            tip: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            title: "Link Audio Books",
            tip: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
    ]
    const navigate = useNavigate(); // Initialize useHistory hook
    const [entry, setEntry] = useState({
        sleep_duration: 6,
        bmi: 0,
        steps: 0,
        stress_level: 0,
        heart_rate: 0,
    })

    // Placeholder for data that will be pulled from the backend
    const userType = "user"

    // Adds form data to appropriate entry property as the user types in the field
    function handleChange({ target: { name, value }}) {
        setEntry((previousEntry) => ({
            ...previousEntry,
            [name]: value
        }))
    }

    // Awaiting a submit button and an api to submit to
    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (userType === "admin") {
            // If admin is selected, navigate to admin page
            navigate("/admin/home");
        } else {
            // Navigate to user page
            navigate("/user/home");
        }
    };

    return (
        <div className="columns-2">
            <div className="break-after-column m-6">
                <div className="">
                    <h2 className="text-3xl font-bold">Today's Activity</h2>
                </div>
                <div className="mt-6">
                    <ActivityLogForm entry={entry} handleChange={handleChange} handleSubmit={handleSubmit}/>
                </div>
                <div className="flex flex-col my-2">
                    <Link className="w-6/12 button-dark-rounded my-2">PAST REPORTS</Link>
                </div>
                <div className="">
                    <h2 className="text-2xl">Daily Goal Reminder</h2>
                    <div className="text-lg">
                        <h3>Sleep Duration: 8 hours per day</h3>
                        <h3>BMI 18.5% to 24.9%</h3>
                        <h3>Steps: 6,000 to 8,000 steps per day</h3>
                        <h3>Stress Levels: Below 5</h3>
                        <h3>Heart Rate: Below 70</h3>
                    </div>
                </div>
            </div>
            <div className="bg-gray-300 m-6">
                <div className="flex relative justify-center px-3">
                <h2 className="text-2xl">Sleep Quality Guides</h2>
                    <div className="absolute right-5 mt-1.5">
                        <DropDownMenuButton options={menuOptions} />
                    </div>
                </div>
                <hr className="h-px border-0" style={{ backgroundColor: "#000000"}}/>
                <div className="px-3 pb-1">
                    <SuggestionCard suggestion={suggestions[0]} />
                    <SuggestionCard suggestion={suggestions[1]} />
                    <SuggestionCard suggestion={suggestions[2]} />
                    <SuggestionCard suggestion={suggestions[3]} />
                </div>
            </div>
        </div>
    )
}