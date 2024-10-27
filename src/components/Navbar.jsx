import { FaMapMarkedAlt, FaUser } from 'react-icons/fa'; // Icons from Font Awesome
import { TbFountainFilled } from "react-icons/tb";
import '../style/Navbar.css'; // Importamos el archivo CSS
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/about" className="nav-item">
        <TbFountainFilled className="nav-icon" />
        <span className="nav-text">About</span>
      </Link>

      <Link to="/home" className="nav-item">
        <FaMapMarkedAlt className="nav-icon" />
        <span className="nav-text">Map</span>
      </Link>

      <Link to="/" className="nav-item">
        <FaUser className="nav-icon" />
        <span className="nav-text">Login</span>
      </Link>
    </div>
  );
}

export default Navbar;

