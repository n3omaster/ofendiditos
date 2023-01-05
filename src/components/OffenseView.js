import React from 'react'
import { useVisit } from "../hooks/useVisit";

export const OffenseView = ({ params }) => {

    // Use custom hook for a visit hit
    const [visit, hit] = useVisit(params.views)

    return (
        <>
            <h1>{params.id} {visit}</h1>
            <button onClick={hit}>Hit</button>
        </>
    )
}