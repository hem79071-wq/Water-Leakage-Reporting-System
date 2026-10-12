import { Link } from "react-router-dom";
import "../App.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>💧 Water Leak Reporter</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>

        <Link to="/report">Report</Link>

        <Link to="/about">About</Link>

        <Link to="/admin-login">Admin</Link>
      </div>
    </nav>
  );
}

export default Navbar;