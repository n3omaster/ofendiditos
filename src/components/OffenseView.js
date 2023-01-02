import React from 'react'

export const OffenseView = ({ params }) => {

    console.log(params.id)

    return (
        <>
            <h1>{params.id}</h1>
        </>
    )
}