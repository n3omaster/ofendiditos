import { useState } from "react"

export const useVisit = (initialVisit = 1) => {

    const [visit, setVisit] = useState(initialVisit)

    const hit = () => {
        setVisit(visit => visit + 1)
    }

    return [visit, hit]
}