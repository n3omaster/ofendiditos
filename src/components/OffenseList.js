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
        <div className='grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2'>
            {
                offenses.map(offense => {
                    return (
                        <OffenseCard key={offense.id} offense={offense} />
                    )
                })
            }
        </div>
    )
}

export default OffenseList