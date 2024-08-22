import BlogList from "./BlogList"
import useFetch from "./useFetch"

const Home = () => {
    const { data: blogs, isPending, error } = useFetch("http://localhost:3000/blogs")
    return (
        <>
            <div className="home">
                {isPending && <h2>Loading....</h2>}
                {error && <h2>Error Message: {error}</h2>}
                {blogs && <BlogList blogs={blogs} title="All Blogs" />}
            </div>
        </>
    )
}

export default Home
