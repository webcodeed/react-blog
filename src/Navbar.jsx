import { Form, Link } from "react-router-dom"

const Navbar = ({ user }) => {
    return (
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
            </div>
            <div className="auth">
                {user ? (
                    <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                        <p> Welcome, {user.name}</p>
                        <Form action="/" method="post">
                            <button>Logout</button>
                        </Form>
                    </div>
                ) : (
                    <div className="btn-group">
                        <Link to="/login">Log In</Link>
                        <Link to="/register">Register</Link>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar
