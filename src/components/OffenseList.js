import React, { useState } from 'react'
import OffenseCard from './OffenseCard'

function OffenseList({ offenses }) {

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