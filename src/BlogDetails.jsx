import { useParams, useNavigate, useLoaderData, useActionData, Form } from "react-router-dom"

const BlogDetails = () => {
    const {id} = useParams()
    const { data: blog, error } = useLoaderData()
    const actionErrMsg = useActionData()

    return (
        <div className="blog-details">
            {error && <div>{error}</div>}
            {actionErrMsg && (
                <p style={{ fontWeight: "bold", marginBottom: "20px" }}>{actionErrMsg}</p>
            )}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <Form action={`/blogs/${id}`} method="delete">
                        <button>delete</button>
                    </Form>
                </article>
            )}
        </div>
    )
}

export default BlogDetails
