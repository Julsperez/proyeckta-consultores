import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './About.css';

const About: React.FC = () => {
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
    <section className="about" id="nosotros">
      <div className="about__container">
        <div className="about__content">
          <h2 className="about__title">Sobre Nosotros</h2>

          <p className="about__lead">
            En <strong>Proteckta</strong> somos especialistas en
            <strong> Seguridad e Higiene Ocupacional</strong>, <strong>Protección Civil</strong>,
            <strong> Gestión Ambiental</strong> y <strong>Certificaciones Internacionales</strong>.
            Nuestra misión es ayudarte a cumplir con la normatividad vigente, prevenir riesgos y
            construir entornos laborales seguros, sostenibles y competitivos.
          </p>

          <p className="about__text">
            Contamos con un equipo de ingenieros y consultores registrados como
            <strong> Agentes Capacitadores Externos (DC5) ante la STPS</strong>, por lo que cada curso
            y programa cuenta con <strong>validez oficial</strong> y un enfoque práctico que impacta de
            forma real en la operación de nuestros clientes.
          </p>

          <div className="about__grid">
            <div className="about__block">
              <h3 className="about__subtitle">Nuestra Misión</h3>
              <p>
                Asegurar que las empresas cumplan con normas de seguridad laboral, protección civil
                y medio ambiente; minimizando riesgos legales y operativos, y fortaleciendo la
                cultura de prevención y responsabilidad social.
              </p>
            </div>

            <div className="about__block">
              <h3 className="about__subtitle">Nuestra Visión</h3>
              <p>
                Ser el aliado estratégico más confiable para organizaciones que buscan crecer de
                forma segura, sustentable y en cumplimiento con regulaciones nacionales e
                internacionales.
              </p>
            </div>
          </div>


          <div className="about__cta" style={{ display: 'flex', flexDirection: 'row', gap: '1rem', justifyContent: 'center', alignItems: 'center' }}>
            <button type="button" className="btn btn--primary" onClick={() => handleSectionNav('#servicios')}>
              Conoce nuestros servicios
            </button>
            <a className="normativa-btn" href="https://google.com.mx">
              Consulta nuestras normativas
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 