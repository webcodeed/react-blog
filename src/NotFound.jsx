import { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"

function NotFound() {
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            navigate("/")
        }, 2000)
    }, [])

    return (
        <div className="not-found">
            <h2>Sorry</h2>
            <p>That page cannot be found</p>
            <Link to="/">Back to homepage...</Link>
        </div>
    )
}

export default NotFound
