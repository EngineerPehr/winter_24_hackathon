import React from "react";
import { Link } from "react-router-dom";

/*
Just for reference until we get the api hooked up
    const user = {
        "person_id": 374,
        "gender": "Female",
        "age": 59,
        "occupation": "Nurse",
        "sleep_duration": "8.1",
        "quality_of_sleep": 9,
        "physical_activity_level": 75,
        "stress_level": 3,
        "bmi_category": "Overweight",
        "blood_pressure": "140/95",
        "heart_rate": 68,
        "daily_steps": 7000,
        "sleep_disorder": "Sleep Apnea"
    }
*/

export default function UserHome() {
    return (
        <>
            <div>
                <h2>Welcome Anonymous369</h2>
                <hr />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis laborum deleniti provident fugit suscipit explicabo quis quos. Nesciunt, dolorem mollitia?</p>
            </div>
            <div>
                <Link>Log Activity</Link>
                <Link>Past Reports</Link>
            </div>
            <div>
                <h2>Recommended Goals</h2>
                <h4>Sleep Duration: 8 hours per day</h4>
                <h4>BMI 18.5% to 24.9%</h4>
                <h4>Steps: 6,000 to 8,000 steps per day</h4>
                <h4>Stress Levels: Below 5</h4>
                <h4>Heart Rate: Below 70</h4>
            </div>
            <div>
                <h2>Last Month Metrics</h2>
                <div>
                    <select name="user-options" id="user-options" >
                        <option>Profile</option>
                        <option>Report History</option>
                        <option>Additional Resources</option>
                        <option>Settings</option>
                        <option>Privacy Policy</option>
                    </select>
                </div>
                <hr />
                <div>
                    <h3>Sleep Duration</h3>
                    <p>Your Average: # value</p>
                </div>
                <div>
                    <h3>BMI</h3>
                    <p>Your Average: # value</p>
                </div>
                <div>
                    <h3>Heart Rate</h3>
                    <p>Your Average: # value</p>
                </div>
                <div>
                    <h3>Steps Per Day</h3>
                    <p>Your Average: # value</p>
                </div>
                <div>
                    <h3>Blood Pressure</h3>
                    <p>Your Average: # value</p>
                </div>
            </div>
        </>
    )
}
