import React, { useState } from "react";

export default function ActivityLogForm({ entry, handleChange }) {

    return (
        <div className="text-xl">
            <form>
                <div className="flex justify-between my-1 h-9">
                    <label htmlFor="sleep_duration">Sleep Duration &#40;Hours&#41; *</label>
                    <input 
                        type="number"
                        name="sleep_duration"
                        id="sleep_duration"
                        value={entry.sleep_duration}
                        onChange={handleChange}
                        required={true}
                        step=".5"
                        min=".5"
                        max="24"
                        className="border-2 rounded-md w-1/2"
                    />
                </div>
                <div className="flex justify-between my-1 h-9">
                    <label htmlFor="bmi">BMI *</label>
                    <input
                        type="number"
                        name="bmi"
                        id="bmi"
                        value={entry.bmi_category}
                        onChange={handleChange}
                        required={true}
                        step="1"
                        min="0"
                        max="100"
                        className="border-2 rounded-md w-1/2"
                    />
                </div>
                <div className="flex justify-between my-1 h-9">
                    <label htmlFor="steps">Steps*</label>
                    <input
                        type="number"
                        name="steps"
                        id="steps"
                        value={entry.steps}
                        onChange={handleChange}
                        required={true}
                        step="100"
                        min="0"
                        max="10000"
                        className="border-2 rounded-md w-1/2"
                    />
                </div>
                <div className="flex justify-between my-1 h-9">
                    <label htmlFor="stress_level">Stress Level &#40;1-10&#41; *</label>
                    <input
                        type="number"
                        name="stress_level"
                        id="stress_level"
                        value={entry.stress_level}
                        onChange={handleChange}
                        required={true}
                        step="10"
                        min="0"
                        max="100"
                        className="border-2 rounded-md w-1/2"
                    />
                </div>
                <div className="flex justify-between my-1 h-9">
                    <label htmlFor="heart_rate">Heart Rate *</label>
                    <input
                        type="number"
                        name="heart_rate"
                        id="heart_rate"
                        value={entry.heart_rate}
                        onChange={handleChange}
                        required={true}
                        step="10"
                        min="0"
                        max="100"
                        className="border-2 rounded-md w-1/2"
                    />
                </div>
                <small>* Required Entry</small>
            </form>
        </div>
    )
}