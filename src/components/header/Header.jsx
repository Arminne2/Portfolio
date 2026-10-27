import { Link } from "react-router-dom";
import "./header.css";
import logo from "../../assets/brocoli.png";
import { useState } from "react";
import Modal from "../modal/Modal.jsx";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="header">
      <Link to="/broccoli" className="nav-link">
        <img className="picture" src={logo} alt="photo de profil" />
      </Link>
      <nav className="nav-bar">
        <ul>
          <li className="about-me">
            <Link to="/" className="nav-link">
              Accueil
            </Link>
          </li>
          <li>
            <Link to="/project" className="nav-link">
              Projets
            </Link>
          </li>
          <li onClick={toggleModal}>Contact</li>
        </ul>
      </nav>
      {isModalOpen && <Modal onClose={closeModal} />}
    </div>
  );
};

export default Header;
