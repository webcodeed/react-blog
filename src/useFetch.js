import { useState, useEffect } from "react"

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const controller = new AbortController()
        async function fetchData(url) {
            try {
                // const res = await fetch(url, { signal: controller.signal })
                // const data = await res.json()
                const data = [
                    {
                        "id": "9ca1",
                        "title": "Lorem ipsum",
                        "body": "Lorem ipsum dolor sit amet consectetur adipiscing elit ante, per tristique parturient tempus conubia augue fermentum gravida nisl, ultrices placerat turpis fusce aliquam purus aptent. Habitant hendrerit cras accumsan dictum scelerisque, ultrices integer egestas himenaeos, elementum est dui magna. Vitae at ornare facilisi aptent dictum ullamcorper leo lacus nostra primis, eget nascetur condimentum suscipit curabitur pharetra iaculis urna. Eros feugiat arcu nulla metus lacus lobortis tortor imperdiet aptent pharetra id dui, commodo cras penatibus netus montes ultrices nullam et porttitor ad.",
                        "author": "mario"
                    },
                    {
                        "id": "0e45",
                        "title": "Test 104",
                        "body": "Lorem ipsum dolor sit amet consectetur adipiscing elit ante, per tristique parturient tempus conubia augue fermentum gravida nisl, ultrices placerat turpis fusce aliquam purus aptent. Habitant hendrerit cras accumsan dictum scelerisque, ultrices integer egestas himenaeos, elementum est dui magna. Vitae at ornare facilisi aptent dictum ullamcorper leo lacus nostra primis, eget nascetur condimentum suscipit curabitur pharetra iaculis urna. Eros feugiat arcu nulla metus lacus lobortis tortor imperdiet aptent pharetra id dui, commodo cras penatibus netus montes ultrices nullam et porttitor ad.",
                        "author": "yoshi"
                    }
                ]

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
