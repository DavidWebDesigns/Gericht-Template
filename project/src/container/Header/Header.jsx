import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Explora nuevas posibilidades" />
      <h1 className="app__header-h1">Encuentra nuevos sabores</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Comparte mediante tu pagina web el contenido de tu restaurante. Causa la mejor impresión desde cualquier dispositivo </p>
      <button type="button" className="custom__button">Ver Menu</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;