import React, { useState } from 'react';
import './Header.css';

const baseUrl = import.meta.env.BASE_URL;

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuToggle = () => setMenuOpen((open) => !open);
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-area">
          <a href="/" className="logo-link" aria-label="Inicio">
            <img
              src={`${baseUrl}img/logo-proyeckta_2.jpeg`}
              alt="Logo Proyeckta Consultores"
              className="header-logo"
              height={50}
              style={{ maxHeight: 50 }}
            />
          </a>
          <span className="brand-name">Proteckta Consultores S.C.</span>
        </div>
        <button
          className={`menu-toggle${menuOpen ? ' open' : ''}`}
          aria-label="Abrir menú de navegación"
          aria-expanded={menuOpen}
          onClick={handleMenuToggle}
        >
          <span className="hamburger"></span>
        </button>
        <nav className={`nav${menuOpen ? ' open' : ''}`}>
          <ul>
            <li><a href="/#servicios" onClick={handleLinkClick}>Servicios</a></li>
            <li><a href="/#nosotros" onClick={handleLinkClick}>Sobre Nosotros</a></li>
            <li><a href="/#contacto" onClick={handleLinkClick}>Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header; 