/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

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
          <p> Welcome, Guest</p>
        ) : (
          <div className="btn-group">
            <button>Log In</button>
            <button>Register</button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
