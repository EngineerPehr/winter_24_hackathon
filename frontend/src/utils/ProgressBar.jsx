import React from 'react';

export default function ProgressBar({ completed, progress }) {

    const completedBarStyle = {
        width: `${completed}%`,
    }

    const progressBarStyle = {
        width: `${progress}%`,
    }

    if (!completed) {
        return (
        <>
        <div className="my-3">
            <div className="bg-black h-2.5 rounded-full" style={ progressBarStyle }></div>
        </div>
        </>
        )
    } else {
        return (
            <>
            <div className="my-3">
                <div className="bg-black h-2.5 rounded-full" style={ progressBarStyle }></div>
            </div>
            <div className="">
                <div className="bg-black h-2.5 rounded-full" style={ completedBarStyle }></div>
            </div>
            </>
        )
    }
}
