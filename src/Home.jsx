import { useState, useEffect } from "react"
import BlogList from "./BlogList"

const Home = () => {
    const [blogs, setBlogs] = useState(null)
    const [isPending, setIsPending] = useState(true)

    useEffect(() => {
        async function fetchData(url) {
            const res = await fetch(url)
            const data = await res.json()

            setIsPending(false)
            setBlogs(data)
        }

        setTimeout(() => {
            fetchData("http://localhost:3000/blogs")
        }, 1500)
    }, [])

    return (
        <>
            <div className="home">
                {isPending && <h2>Loading....</h2>}
                {blogs && <BlogList blogs={blogs} title="All Blogs" />}
            </div>
        </>
    )
}

export default Home
