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
            Brindamos asesoría integral en seguridad, higiene ocupacional y medio ambiente, 
            diseñada para apoyar a industrias, instituciones públicas y centros de trabajo. 
            Nuestras soluciones contribuyen a prevenir riesgos, reducir costos operativos y elevar la productividad, 
            manteniendo como prioridad la salud y seguridad del capital humano.
          </p>

          <div className="about__grid">
            <div className="about__block">
              <h3 className="about__subtitle">Nuestra Misión</h3>
              <p>
              Nos distinguimos por ser una organización enfocada en posicionarse como un referente en el mercado. 
              Nuestro compromiso es brindar a los clientes un servicio con altos estándares de calidad mediante buenas prácticas profesionales, 
              contamos con un equipo altamente capacitado.
              </p>
            </div>

            <div className="about__block">
              <h3 className="about__subtitle">Nuestra Visión</h3>
              <p>
              Buscamos ser reconocidos como una entidad que establece estándares de excelencia en la atención a sus clientes, 
              destacando por la implementación de prácticas responsables y el estricto cumplimiento de la normatividad y regulaciones aplicables.
              </p>
            </div>
          </div>


          <div className="about__cta about__cta--row">
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