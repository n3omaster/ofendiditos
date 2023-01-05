import React, { useState } from 'react'
import OffenseList from '../components/OffenseList'
import OffensePost from '../components/OffensePost'

export const HomePage = () => {

    // Get a list of 50 offenses from DB
    // Display them in a list
    const [offenses, setOffenses] = useState([
        { id: 1, text: 'Me ofende que me ofendan' },
        { id: 2, text: 'Me ofende que me ofendan' },
    ])

    return (
        <>
            <p className='text-center mb-8'>El lugar ideal para soltar tu veneno</p>
            <OffensePost setOffenses={setOffenses} />
            <OffenseList offenses={offenses} />
        </>
    )
}
