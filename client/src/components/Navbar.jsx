import {Link} from "react-router-dom";
import "../css/Navbar.css"

function Navbar(){
    return(
        <nav className="navbar">
            <div className="navbar-brand">
                <img src="punk.jpg" alt="Logo" className="Logo"/>
                <Link to="/" className="brand">MOVIEPHILE</Link>
            </div>
            <div className="navbar-links">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/favourites" className="nav-link">Fav</Link>
            </div>
        </nav>
    )
}

export default Navbar