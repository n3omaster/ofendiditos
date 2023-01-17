import React, { useState, useEffect } from 'react'
import OffenseList from '../components/OffenseList'
import OffensePost from '../components/OffensePost'

export const HomePage = () => {

    // Get a list of 50 offenses from DB
    const [offenses, setOffenses] = useState([
        { id: 1, text: 'Me ofende que me ofendan' },
        { id: 2, text: 'Me ofende que me ofendan' },
        { id: 3, text: 'Me ofende que me ofendan' },
        { id: 4, text: 'Me ofende que me ofendan' },
        { id: 5, text: 'Me ofende que me ofendan' },
        { id: 6, text: 'Me ofende que me ofendan' },
        { id: 7, text: 'Me ofende que me ofendan' },
        { id: 8, text: 'Me ofende que me ofendan' },
        { id: 9, text: 'Me ofende que me ofendan' },
        { id: 10, text: 'Me ofende que me ofendan' },
        { id: 11, text: 'Me ofende que me ofendan' },
        { id: 12, text: 'Me ofende que me ofendan' },
        { id: 13, text: 'Me ofende que me ofendan' },
    ])

    // Create a useEffect for localstorage saing on every chane
    useEffect(() => {
        localStorage.setItem('offenses', JSON.stringify(offenses))
    }, [offenses])

    return (
        <>
            <p className='text-center mb-8'>El lugar ideal para soltar tu veneno</p>
            <OffensePost setOffenses={setOffenses} />
            <OffenseList offenses={offenses} />
        </>
    )
}
