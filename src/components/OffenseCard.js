import React from 'react'
import { useHitView } from '../hooks/useHitView'

// Wouter Router like React Router
import { Link } from "wouter";

function OffenseCard({ offense = { id: 0, text: "", views: 1, timestamp: "1 hour" } }) {

    // Custom hook for a visit hit and return the number of visits
    const visits = useHitView(offense.id)

    return (
        <Link to={`/offense/${offense.id}`}>
            <a href={`/offense/${offense.id}`} className="animate__animated animate__fadeIn min-w-screen flex items-center justify-center px-5 pt-5 pb-1">
                <div className="w-full mx-auto rounded-lg bg-white shadow-lg px-3 pt-1 pb-1 text-gray-800">
                    <div className="w-full">
                        <div className="text-5xl text-indigo-500 text-left h-3">“</div>
                        <p className="text-lg text-gray-600 text-center px-5 py-2 break-normal">{offense.text}</p>
                        <div className="text-5xl text-indigo-500 text-right h-3 -mt-3">”</div>
                    </div>
                    <div className="w-full flex justify-between pt-6 opacity-10 hover:opacity-90">
                        <p className="text-xs text-gray-600 text-center">{visits} views</p>
                        <p className="text-xs text-gray-600 text-center">{offense.timestamp} ago</p>
                    </div>
                </div>
            </a>
        </Link>
    )
}

export default OffenseCard