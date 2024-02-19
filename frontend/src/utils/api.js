const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:5001";

// Some placeholder data to play around with until we get the backend connected
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

const headers = new Headers()
headers.append("Content-Type", "application/json")


async function fetchJson(url, options, onCancel) {
    try {
        const response = await fetch(url, options)

        if (response.status === 204) {
            return null
        }

        const payload = await response.json()

        if (payload.error) {
            return Promise.reject({ message: payload.error })
        }

        return payload.data

    } catch (error) {
        if (error.name !== "AbortError") {
            console.error(error.stack)
            throw error
        }

        return Promise.resolve(onCancel)
    }
}

// Returns an array of all users
export async function listUsers(signal) {
    const url = `${API_BASE_URL}/data`

    return await fetchJson(url, { headers, signal })
}

// Returns a single user with the matching userId
export async function readUserById(userId, signal) {
    const url = `${API_BASE_URL}/data/${userId}`
    const options = {
        method: "GET",
        headers,
        signal
    }

    return await fetchJson(url, options)
}

// Creates a new user
export async function createUser(user, signal) {
    const url = `${API_BASE_URL}/data`
    const options = {
        method: "POST",
        headers,
        body: JSON.stringify({ data: user}),
        signal
    }

    return await fetchJson(url, options)
}

// Updates an existing user
export async function updateUser(userId, updatedUser, signal) {
    const url = `${API_BASE_URL}/data/${userId}`
    const options = {
        method: "PUT",
        headers,
        body: JSON.stringify({ data: updatedUser }),
        signal
    }

    return await fetchJson(url, options)
}

// Deletes a user (if the user exists, obviously)
export async function deleteUser(userId, signal) {
    const url = `${API_BASE_URL}/data/${userId}`
    const options = {
        method: "DELETE",
        headers,
        signal
    }

    return await fetchJson(url, options)
}

// Returns an array of all entries for all users
// Will probably adapt this to list all entries for *one* user
// Maybe add a query for a range of dates idk
export async function listEntries(signal) {
    const url = `${API_BASE_URL}/entries`

    return await fetchJson(url, { headers, signal })
}

// Creates a new entry
export async function createEntry(entry, signal) {
    const url = `${API_BASE_URL}/entries`
    const options = {
        method: "POST",
        headers,
        body: JSON.stringify({ data: entry}),
        signal
    }

    return await fetchJson(url, options)
}

// Returns a single entry with the matching entryId
export async function readEntryById(entryId, signal) {
    const url = `${API_BASE_URL}/entries/${entryId}`
    const options = {
        method: "GET",
        headers,
        signal
    }

    return await fetchJson(url, options)
}

export async function readEntriesByPerson(userId, signal) {
    const url = `${API_BASE_URL}/entries/user/${userId}`
    const options = {
        method: "GET",
        headers,
        signal
    }

    return await fetchJson(url, options)
}

// Deletes an entry (if the entry exists, obviously)
export async function deleteEntry(entryId, signal) {
    const url = `${API_BASE_URL}/entries/${entryId}`
    const options = {
        method: "DELETE",
        headers,
        signal
    }

    return await fetchJson(url, options)
}
