import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo_alura from "../../assets/Logo.svg";
import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav>
      <Link to="/" onClick={closeMenu}><img src={logo_alura} alt="logo-alura" /></Link>
      
      <div className="nav-grande">
      <ul  >
          <li><Link to="/" >Home</Link></li>
          <li><Link to="/favorites" >Favorite</Link></li>
          <li><Link to="/new-video" >New video</Link></li>
        </ul>
      </div>


      <div className="navigation-movil">
        <ul className={`menu ${isOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/favorites" onClick={closeMenu}>Favorite</Link></li>
          <li><Link to="/new-video" onClick={closeMenu}>New video</Link></li>
        </ul>
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <i className="ri-close-fill"></i> : <i className="ri-align-justify"></i>}
        </div>
      </div>
    </nav>
  );
}

export default Header;