import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="app__logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><a href="#home">Inicio</a></li>
        <li className="p__opensans"><a href="#about">Nosotros</a></li>
        <li className="p__opensans"><a href="#menu">Menú</a></li>
        <li className="p__opensans"><a href="#awards">Galardones</a></li>
        <li className="p__opensans"><a href="#contact">Contacto</a></li>
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">Entrar / Registar</a>
        <div />
        <a href="/" className="p__opensans">Reservaciones</a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li><a href="#home" onClick={() => setToggleMenu(false)}>Inicio</a></li>
              <li><a href="#about" onClick={() => setToggleMenu(false)}>Nosotros</a></li>
              <li><a href="#menu" onClick={() => setToggleMenu(false)}>Menú</a></li>
              <li><a href="#awards" onClick={() => setToggleMenu(false)}>Galardones</a></li>
              <li><a href="#contact" onClick={() => setToggleMenu(false)}>Contacto</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;