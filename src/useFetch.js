import { useState, useEffect } from "react"

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const controller = new AbortController()
        async function fetchData(url) {
            try {
                const res = await fetch(url, { signal: controller.signal })
                const data = await res.json()

                setIsPending(false)
                setData(data)
            } catch (error) {
                setIsPending(false)
                setError(error.message)
            }
        }

        setTimeout(() => {
            fetchData(url)
        }, 1500)

    }, [])

    return { data, isPending, error }
}

export default useFetch
