import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Create = () => {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [author, setAuthor] = useState("mario")

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const blog = { title, body, author }

        await fetch("http://localhost:3000/blogs", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog),
        })

        navigate("/")
    }

    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                {/* Blog Titlr */}
                <label htmlFor="title">Blog Title:</label>
                <input
                    type="text"
                    id="title"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                {/* Blog Body i.e main content */}
                <label htmlFor="body">Blog Body:</label>
                <textarea
                    id="body"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                {/* Blog Author */}
                <label htmlFor="author">Blog Author:</label>
                <select
                    id="author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="mario">Mario</option>
                    <option value="yoshi">Yoshi</option>
                </select>
                {/* Submit Button */}
                <button>Add Blog</button>
            </form>
        </div>
    )
}

export default Create
