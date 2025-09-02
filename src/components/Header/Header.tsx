import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Header.css';

const baseUrl = import.meta.env.BASE_URL;

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuToggle = () => setMenuOpen((open) => !open);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSectionNav = (hash: string) => {
    setMenuOpen(false);
    if (location.pathname !== "/") {
      navigate(`/${hash}`);
      setTimeout(() => {
        const el = document.getElementById(hash.replace('#', ''));
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const el = document.getElementById(hash.replace('#', ''));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.hash = hash;
      }
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-area">
          <button
            type="button"
            className="logo-link logo-btn"
            aria-label="Inicio"
            onClick={() => handleSectionNav('#inicio')}
          >
            <img
              src={`${baseUrl}img/logo-proyeckta_2.jpeg`}
              alt="Logo Proyeckta Consultores"
              className="header-logo"
              height={50}
              style={{ maxHeight: 50 }}
            />
          </button>
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
            <li>
              <button type="button" className="nav-link nav-btn" onClick={() => handleSectionNav('#servicios')}>
                Servicios
              </button>
            </li>
            <li>
              <button type="button" className="nav-link nav-btn" onClick={() => handleSectionNav('#nosotros')}>
                Sobre Nosotros
              </button>
            </li>
            <li>
              <button type="button" className="nav-link nav-btn" onClick={() => handleSectionNav('#contacto')}>
                Contacto
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header; 