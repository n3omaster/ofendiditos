import React, { useState } from 'react'

function OffensePost({ setOffenses }) {

    const [offense, setOffense] = useState({
        id: 0,
        text: "",
        views: 0,
        timestamp: ""
    })
    const [offensecount, setOffensecount] = useState(0)

    // Send the offense to the DB
    const handleSubmit = (event) => {

        setOffense({
            ...offense,
            text: event.target.value
        })
        setOffensecount(event.target.value.length)

        if (event.keyCode === 13 && event.shiftKey === false) {
            event.preventDefault();
            console.log('form submitted ✅');

            // Send to DB
            // Get ID

            // Add to the OffenseList
            setOffenses(offenses => [offense, ...offenses])

            // Clear the offense
            setOffense({ text: "" })
        }
    };

    return (
        <div className="animate__animated animate__fadeIn min-w-screen flex items-center justify-center px-5 py-5">
            <div className="w-full md:w-1/2 mx-auto rounded-lg bg-white shadow-2xl text-gray-800">
                <div className="w-full relative m-0 p-0">
                    <textarea
                        className="w-full h-48 resize-none rounded-md text-gray-600 text-center p-5 text-xl focus:outline-0"
                        onKeyDown={handleSubmit}
                        onChange={handleSubmit}
                        value={offense.text}
                        placeholder="¿Qué te ofende?"
                    />
                    <p className="text-xs text-right text-gray-300 absolute bottom-2 right-2">
                        {offensecount}/140
                    </p>
                </div>
            </div>
        </div>
    )
}

export default OffensePost