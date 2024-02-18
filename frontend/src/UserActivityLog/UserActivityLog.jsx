import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import DropDownMenuButton from "../utils/DropDownMenuButton";
import ActivityLogForm from "./ActivityLogForm";
import SuggestionCard from "./SuggestionCard";
import { createEntry } from "../utils/api";

export default function UserActivityLog() {
    const { userId } = useParams()
    const [error, setError] = useState(null)
    // Options to pass down to <DropDownMenuButton/>
    const menuOptions = [
        {
            option: "Dashboard",
            route: `/user/${userId}/home`,
        },
        {
            option: "Report History",
            route: `/user/${userId}/history`,
        },
        {
            option: "Log Activity",
            route: `/user/${userId}/log`,
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
    const date = new Date()
    const navigate = useNavigate(); // Initialize useHistory hook
    const [entry, setEntry] = useState({
        sleep_duration: "",
        bmi_category: "Normal",
        daily_steps: "",
        stress_level: "",
        heart_rate: "",
        date: date
    })

    // Adds form data to appropriate entry property as the user types in the field
    function handleChange({ target: { name, value }}) {
        setEntry((previousEntry) => ({
            ...previousEntry,
            [name]: value
        }))
    }

    // Creates a new entry with today's date
    const handleSubmit = async (e) => {
        e.preventDefault();

        const abortController = new AbortController()

        try {
            await createEntry(entry, abortController.signal)
        } catch (er) {
            setError(er)
        } finally {
            abortController.abort()
            navigate(`/user/${userId}/home`);
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
                    <Link to={`/user/${userId}/history`} className="w-6/12 button-dark-rounded my-2" reloadDocument>PAST REPORTS</Link>
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