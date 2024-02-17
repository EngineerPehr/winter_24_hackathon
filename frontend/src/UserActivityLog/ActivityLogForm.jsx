import React, { useState } from "react";

export default function ActivityLogForm() {
    const [entry, setEntry] = useState({
        sleep_duration: "",
        bmi_category: "",
        steps: "",
        stress_level: "",
        heart_rate: "",
    })

    return (
        <div className="text-xl">
            <form>
                <div className="flex justify-between my-1 h-9">
                    <label htmlFor="sleep-duration">Sleep Duration &#40;Hours&#41; *</label>
                    <input type="number" name="sleep-duration" id="sleep-duration" value={entry.sleep_duration} placeholder="" className="border-2 rounded-md w-1/2"/>
                </div>
                <div className="flex justify-between my-1 h-9">
                    <label htmlFor="bmi">BMI *</label>
                    <input type="number" name="bmi" id="bmi" value={entry.bmi_category} placeholder="" className="border-2 rounded-md w-1/2"/>
                </div>
                <div className="flex justify-between my-1 h-9">
                    <label htmlFor="steps">Steps*</label>
                    <input type="number" name="steps" id="steps" value={entry.steps} placeholder="" className="border-2 rounded-md w-1/2"/>
                </div>
                <div className="flex justify-between my-1 h-9">
                    <label htmlFor="stress-level">Stress Level &#40;1-10&#41; *</label>
                    <input type="number" name="stress-level" id="stress-level" value={entry.stress_level} placeholder="" className="border-2 rounded-md w-1/2"/>
                </div>
                <div className="flex justify-between my-1 h-9">
                    <label htmlFor="heart-rate">Heart Rate *</label>
                    <input type="number" name="heart-rate" id="heart-rate" value={entry.heart_rate} placeholder="" className="border-2 rounded-md w-1/2"/>
                </div>
                <small>* Required Entry</small>
            </form>
        </div>
    )
}