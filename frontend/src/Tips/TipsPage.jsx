import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function useQuery() {
    return new URLSearchParams(useLocation().search)
}

export default function TipsPage({ options }) {
    return (
        <div>
            <h1>{options.title}</h1>
            <h2>{options.subtitle1}</h2>
            <h2>{options.subtitle2}</h2>
            {/* Add more elements as needed */}
        </div>
    )
}

// Parent Component
function ParentComponent() {
    const query = useQuery()
    let options

    const queryStrategy = query.get('strategy')

    if (queryStrategy === 'Sleep Disorder Guide') {
        options = {
            title: 'Sleep Disorder Guide',
            subtitle1: 'Personalize Your Sleep Routine',
            subtitle2: 'Common Sleep Disorders',
            subtitle3: 'Consult With A Licensed Sleep Specialist',
            subtitle4: 'Sleep Disorder Self Help Modules',
        }
    } else if (queryStrategy === 'Physical Fitness Guide') {
        options = {
            title: 'Physical Fitness Guide',
            subtitle1: 'Select A Workout Plan That Fits Your Needs',
            subtitle2: 'The Link Between Physical Activity and Mental Health',
            subtitle3: 'Find Local Trails and Parks',
            subtitle4: 'Nutrition Tips and Mindful Meals',
        }
    } else if (queryStrategy === 'Meditation & Relaxation Guide') {
        // Handle other strategies or set a default options object
        options = {
            title: 'Meditation & Relaxation Guide',
            subtitle1: 'Meditation Techniques',
            subtitle2: 'Setup Deep Breathing Reminders',
            subtitle3: 'In Depth Mood Tracker',
            subtitle4: "Sights & Sounds for A Better Night's Sleep",
        }

        return <TipsPage options={options} />
    }

    // Link to this page
    ;<Link to="/tips?strategy=nutrition">Improve your nutrition!</Link>
}
