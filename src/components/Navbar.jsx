import { FaMapMarkedAlt, FaUser } from 'react-icons/fa'; // Icons from Font Awesome
import { TbFountainFilled } from "react-icons/tb";
import '../style/Navbar.css'; // Importamos el archivo CSS

const Navbar = () => {
  return (
    <div className="navbar">
      <a href="/" className="nav-item">
        <FaMapMarkedAlt className="nav-icon" />
        <span className="nav-text">Map</span>
      </a>

      <a href="/login" className="nav-item">
        <FaUser className="nav-icon" />
        <span className="nav-text">Login</span>
      </a>

      <a href="/about" className="nav-item">
        <TbFountainFilled className="nav-icon" />
        <span className="nav-text">About</span>
      </a>
    </div>
  );
}

export default Navbar;

