import React, { useState } from 'react'
import OffenseCard from './OffenseCard'

function OffenseList() {

    // Get a list of 50 offenses from DB
    // Display them in a list
    const [offenses, setOffenses] = useState([
        { id: 1, text: 'Me ofende que me ofendan' },
        { id: 2, text: 'Me ofende que me ofendan' },
        { id: 3, text: 'Me ofende que me ofendan' },
        { id: 4, text: 'Me ofende que me ofendan' }
    ])

    return (
        <>
            {
                offenses.map(offense => {
                    return (
                        <OffenseCard key={offense.id} offense={offense} />
                    )
                })
            }
        </>
    )
}

export default OffenseList