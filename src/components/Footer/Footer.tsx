import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Footer.css';

const servicios = [
  { label: 'Seguridad e Higiene Ocupacional', to: '/servicios/seguridad-higiene' },
  { label: 'Promoción y capacitacion en temas de auditorias', to: '/servicios/proteccion-civil' },
  { label: 'Gestión Ambiental', to: '/servicios/gestion-ambiental' },
  { label: 'Programa de Capacitación de Brigadas de Emergencia', to: '/servicios/certificaciones' },
];

const navegacion = [
  { label: 'Inicio', to: '/#inicio' },
  { label: 'Sobre Nosotros', to: '/#nosotros' },
  { label: 'Ubicación', to: '/#ubicacion' },
  { label: 'Contacto', to: '/#contacto' },
];

const Footer: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSectionNav = (hash: string) => {
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
    <footer className="footer">
      <div className="footer-bg">
        <div className="footer-content">
          <div className="footer-col">
            <h3 className="footer-title">SERVICIOS</h3>
            <ul className="footer-list">
              {servicios.map((s) => (
                <li key={s.to}>
                  <Link to={s.to} className="footer-link">{s.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h3 className="footer-title">NAVEGACIÓN</h3>
            <ul className="footer-list">
              {navegacion.map((n) => (
                <li key={n.to}>
                  {n.to.startsWith('/#') ? (
                    <button type="button" className="footer-link footer-link-btn" onClick={() => handleSectionNav(n.to.replace('/', ''))}>
                      {n.label}
                    </button>
                  ) : (
                    <Link to={n.to} className="footer-link">{n.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        © 2025. Todos los derechos reservados por Proyeckta Consultores S.C.
      </div>
    </footer>
  );
};

export default Footer; 