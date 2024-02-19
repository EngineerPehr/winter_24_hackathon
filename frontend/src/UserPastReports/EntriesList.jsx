import React, { useState, useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import { readEntriesByPerson } from "../utils/api";
import EntryCard from "./EntryCard";
import Spinner from "../utils/Spinner";

export default function EntriesList() {
    const { userId } = useParams()
    const [entries, setEntries] = useState([])
    const [error, setError] = useState(null)

    // Fetches all users from the API
    const loadEntries = useCallback(async () => {
        const abortController = new AbortController()
    
        try {
            console.log(`userId: ${userId}`)
            const response = await readEntriesByPerson(userId, abortController.signal)
            setEntries(response)
        } catch (error) {
            setError(error)
        } finally {
            abortController.abort()
        }
    }, [])
    
    useEffect(() => loadEntries, [loadEntries])

    if (entries) {
        return (
            <>
            <ul>
                {entries.map((entry) => 
                    <li key={entry.entry_id}>
                        <EntryCard entry={entry} setError={setError} loadEntries={loadEntries} />
                    </li>
                )}
            </ul>
            </>
        )
    } else {
        return <Spinner />
    }
}