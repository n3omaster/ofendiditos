import React, { useEffect } from 'react'
import { useHitView } from '../hooks/useHitView'

// Wouter Router like React Router
import { Link } from "wouter";

function OffenseCard({ offense = { id: 0, text: "", views: 1, timestamp: "" } }) {

    // Use a custom Hook for the visits
    // useHitView()

    return (
        <Link to={`/offense/${offense.id}`}>
            <a className="animate__animated animate__fadeIn min-w-screen flex items-center justify-center px-5 pt-5 pb-1">
                <div className="w-full mx-auto rounded-lg bg-white shadow-lg px-5 pt-5 pb-4 text-gray-800">
                    <div className="w-full mb-10">
                        <div className="text-5xl text-indigo-500 text-left leading-tight h-3">“</div>
                        <p className="text-lg text-gray-600 text-center px-5">{offense.text}</p>
                        <div className="text-5xl text-indigo-500 text-right leading-tight h-3 -mt-3">”</div>
                    </div>
                    <div className="w-full flex justify-between pt-5">
                        <p className="text-sm text-gray-600 text-center">5 <span className='ml-1'>👀</span></p>
                        <p>🔗</p>
                    </div>
                </div>
            </a>
        </Link>
    )
}

export default OffenseCard