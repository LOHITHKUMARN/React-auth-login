import { Link } from 'react-router-dom';
import './style.css';

export default function Navbar() {
    return (
        <nav className="navbar">
            <h2 className="logo">🌐 MyWebsite</h2>
            <div className="nav-links">
                <Link to="/about">About</Link>
                <Link to="/services">Services</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/logout" className="logout-btn">Logout</Link>
            </div>
        </nav>
    );
}