import { useState, useEffect } from "react"

export const useHitView = () => {

    const [view, viewState] = useState()

    // setTimeout
    setTimeout(() => {
        viewState(view => view + 1)
        console.log("first")
    }, 1000);

    // useEffect for hit a view ++
    useEffect(() => {
        // Send a hit to DB for this view
        // {offense.id} {offense.views} + 1 view count
    }, [])

    return view
}
