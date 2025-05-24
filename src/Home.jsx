import { useLoaderData } from "react-router-dom"
import BlogList from "./BlogList"
import useFetch from "./useFetch"

const Home = () => {
    const {data: blogs, error} = useLoaderData()
    return (
        <>
            <div className="home">
                {error && <h2>Error Message: {error}</h2>}
                {blogs && <BlogList blogs={blogs.documents} title="All Blogs" />}
            </div>
        </>
    )
}

export default Home
