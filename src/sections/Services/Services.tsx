import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const services = [
  {
    slug: 'seguridad-higiene',
    title: '',
    desc: '',
    img: '',
  },
  {
    slug: 'proteccion-civil',
    title: '',
    desc: '',
    img: '',
  },
  {
    slug: 'gestion-ambiental',
    title: '',
    desc: '',
    img: '',
  },
  {
    slug: 'certificaciones',
    title: '',
    desc: '',
    img: '',
  },
];

const Services: React.FC = () => {
  return (
    <section className="services" id="servicios">
      <h2 className="services-title">
        Somos expertos en <span className="accent">todos nuestros servicios</span>
      </h2>
      {/* <p>Todos nuestros servicios forman parte de las acciones a seguir para certificarte ante la siguientes ISO/OSHA</p> */}
      <div className="services-grid">
        {services.map((s) => (
          <div className="service-item" key={s.slug}>
            <img
              src={import.meta.env.BASE_URL + s.img}
              alt={s.title}
              className="service-img"
              loading="lazy"
            />
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
            <Link to={`/servicios/${s.slug}`} className="service-btn">
              Conocer más
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services; 