import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const servicios = [
  { label: 'Seguridad e Higiene Ocupacional', to: '/servicios/seguridad-higiene' },
  { label: 'Promoción y capacitacion en temas de auditorias', to: '/servicios/proteccion-civil' },
  { label: 'Gestión Ambiental', to: '/servicios/gestion-ambiental' },
  { label: 'Programa de Capacitación de Brigadas de Emergencia', to: '/servicios/certificaciones' },
];

const navegacion = [
  { label: 'Inicio', to: '/' },
  { label: 'Sobre Nosotros', to: '/#nosotros' },
  { label: 'Ubicación', to: '/#ubicacion' },
  { label: 'Contacto', to: '/#contacto' },
];

const Footer: React.FC = () => (
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
                <Link to={n.to} className="footer-link">{n.label}</Link>
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

export default Footer; 