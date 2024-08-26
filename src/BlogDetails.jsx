import { useParams, useNavigate } from "react-router"
import useFetch from "./useFetch"

const BlogDetails = () => {
    const { id } = useParams()
    const { data: blog, error, isPending } = useFetch(`http://localhost:3000/blogs/${id}`)

    const navigate = useNavigate()
    const handleDelete = async () => {
        await fetch("http://localhost:3000/blogs/" + id, {
            method: "DELETE",
        })

        navigate("/")
    }

    return (
        <div className="blog-details">
            {isPending && <h1>Loading...</h1>}
            {error && <h1>{error}</h1>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleDelete}>Delete</button>
                </article>
            )}
        </div>
    )
}

export default BlogDetails
