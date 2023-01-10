import { useState, useEffect } from "react"

export const useHitView = (offense_id) => {

    const [view, viewState] = useState(0)

    // useEffect for hit a view ++
    useEffect(() => {
        // get the current offense views and add one
        console.log(view)
        viewState(view + 1)
    }, [offense_id])

    return view
}