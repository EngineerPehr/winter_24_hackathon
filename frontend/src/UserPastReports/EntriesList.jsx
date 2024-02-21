import React, { useState, useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import { readEntriesByPerson } from "../utils/api";
import EntryCard from "./EntryCard";
import Spinner from "../utils/Spinner";

export default function EntriesList({ listOrder }) {
    const { userId } = useParams()
    const [entries, setEntries] = useState([])

    // Fetches all users from the API
    const loadEntries = useCallback(async () => {
        const abortController = new AbortController()
    
        try {
            const response = await readEntriesByPerson(userId, abortController.signal)
            setEntries(response)
        } catch (er) {
            console.error(er)
        } finally {
            abortController.abort()
        }
    }, [])
    
    useEffect(() => loadEntries, [loadEntries])

    useEffect(() => setEntries(entries.toReversed()), [listOrder])

    if (entries.length) {
        return (
            <>
            <ul>
                {entries.map((entry) => 
                    <li key={entry.entry_id}>
                        <EntryCard entry={entry} loadEntries={loadEntries} />
                    </li>
                )}
            </ul>
            </>
        )
    } else {
        return <h3 className="text-center mt-8 text-3xl font-bold bg-primary-2 border-2 border-accent-2 rounded-sm">No Entries Yet</h3>
    }
}