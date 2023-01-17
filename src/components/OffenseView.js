import React from 'react'

export const OffenseView = ({ params }) => {
    return (
        <>
            <h1>{params.id}</h1>
            <button>Hit</button>
        </>
    )
}