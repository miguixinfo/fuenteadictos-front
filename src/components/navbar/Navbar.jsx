import { FaMapMarkedAlt, FaUser } from 'react-icons/fa'; // Icons from Font Awesome
import { TbFountainFilled } from "react-icons/tb";
import './Navbar.css'; // Importamos el archivo CSS
import { Link } from 'react-router-dom';
import { useState } from 'react';
import AboutModal from '../../pages/aboutus/AboutModal';

const Navbar = () => {

  const [showModal, setShowModal] = useState(false)

  // Functions to open and close the modal
  const openModal = () => setShowModal(true)
  const closeModal = () => setShowModal(false)

  return (
    <div className="navbar">
      <button onClick={openModal} className="nav-item no-button">
        <TbFountainFilled className="nav-icon" />
        <span className="nav-text">About</span>
      </button>

      <Link to="/home" className="nav-item">
        <FaMapMarkedAlt className="nav-icon" />
        <span className="nav-text">Map</span>
      </Link>

      <Link to="/" className="nav-item">
        <FaUser className="nav-icon" />
        <span className="nav-text">Login</span>
      </Link>

      <AboutModal isOpen={showModal} onClose={closeModal} />
    </div>
  );
}

export default Navbar;

