import React from 'react'

function OffenseCard({ offense = { id: 0, text: "", views: 1, timestamp: "" } }) {
    return (
        <div className="min-w-screen flex items-center justify-center px-5 pt-5 pb-1">
            <div className="w-full mx-auto rounded-lg bg-white shadow-lg px-5 pt-5 pb-4 text-gray-800">
                <div className="w-full mb-10">
                    <div className="text-5xl text-indigo-500 text-left leading-tight h-3">“</div>
                    <p className="text-lg text-gray-600 text-center px-5">{offense.text}</p>
                    <div className="text-5xl text-indigo-500 text-right leading-tight h-3 -mt-3">”</div>
                </div>
                <div className="w-full flex justify-between pt-5">
                    <p className="text-md text-indigo-500 text-center">5 👀</p>
                    <p className="text-xs text-gray-500 text-center">🔗</p>
                </div>
            </div>
        </div>
    )
}

export default OffenseCard