const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:5001";

// Some sample data to play around with until we get the backend connected
export const employees = [
    {
        person_id: 1,
        name: "James Lycett",
        department_id: 1,
        admin: true,
        age: 32,
        gender: "Male",
        sleep_duration: 7.5,
        quality_of_sleep: 5,
        physical_activity_level: 30,
        bmi_category: "Normal",
        blood_pressure: "123/83",
        heart_rate: 72,
        daily_steps: 6000,
        stress_level: 4,
    },
    {
        person_id: 2,
        name: "Albert Einstein",
        department_id: 1,
        admin: true,
        age: 45,
        gender: "Male",
        sleep_duration: 6.5,
        quality_of_sleep: 8,
        physical_activity_level: 50,
        bmi_category: "Normal",
        blood_pressure: "122/82",
        heart_rate: 80,
        daily_steps: 3000,
        stress_level: 6,
    },
    {
        person_id: 3,
        name: "Carl Sagan",
        department_id: 2,
        admin: true,
        age: 36,
        gender: "Male",
        sleep_duration: 8.0,
        quality_of_sleep: 8,
        physical_activity_level: 50,
        bmi_category: "Normal",
        blood_pressure: "120/75",
        heart_rate: 65,
        daily_steps: 7000,
        stress_level: 3,
    },
    {
        person_id: 4,
        name: "Alan Turing",
        department_id: 2,
        admin: true,
        age: 25,
        gender: "Male",
        sleep_duration: 6.2,
        quality_of_sleep: 2,
        physical_activity_level: 20,
        bmi_category: "Normal",
        blood_pressure: "130/90",
        heart_rate: 85,
        daily_steps: 3000,
        stress_level: 7,
    },
    {
        person_id: 5,
        name: "John Nash",
        department_id: 1,
        admin: false,
        age: 56,
        gender: "Male",
        sleep_duration: 5.5,
        quality_of_sleep: 5,
        physical_activity_level: 50,
        bmi_category: "Normal",
        blood_pressure: "125/85",
        heart_rate: 85,
        daily_steps: 2000,
        stress_level: 3,
    },
    {
        person_id: 6,
        name: "Enrico Fermi",
        department_id: 1,
        admin: false,
        age: 40,
        gender: "Male",
        sleep_duration: 6.5,
        quality_of_sleep: 6,
        physical_activity_level: 60,
        bmi_category: "Normal",
        blood_pressure: "118/70",
        heart_rate: 60,
        daily_steps: 8000,
        stress_level: 8,
    },
    {
        person_id: 7,
        name: "Alexander Fleming",
        department_id: 2,
        admin: false,
        age: 42,
        gender: "Male",
        sleep_duration: 7.2,
        quality_of_sleep: 2,
        physical_activity_level: 20,
        bmi_category: "Normal",
        blood_pressure: "122/82",
        heart_rate: 72,
        daily_steps: 2000,
        stress_level: 2,
    },
    {
        person_id: 8,
        name: "Ada Lovelace",
        department_id: 2,
        admin: false,
        age: 30,
        gender: "Female",
        sleep_duration: 6.5,
        quality_of_sleep: 3,
        physical_activity_level: 40,
        bmi_category: "Normal",
        blood_pressure: "120/80",
        heart_rate: 80,
        daily_steps: 3000,
        stress_level: 5,
    },
]