import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const services = [
  {
    slug: 'ambiente-laboral',
    title: 'Estudios de ambiente laboral',
    desc: 'Nos comprometemos a que tu centro de trabajo cuente con un entorno laboral seguro, saludable y conforme a la normativa vigente.',
    img: 'img/servicios/servicio_1_1.jpg',
  },
  {
    slug: 'capacitacion',
    title: 'Capacitación en normatividad.',
    desc: 'Nos enfocamos en fortalecer las competencias de los trabajadores mediante programas de capacitación diseñados conforme a la normatividad vigente.',
    img: 'img/servicios/servicio_2_1.jpg',
  },
  {
    slug: 'primeros-auxilios',
    title: 'Primeros auxilios',
    desc: 'Nos enfocamos en fortalecer la preparación de los trabajadores mediante programas de capacitación en primeros auxilios.',
    img: 'img/servicios/servicio_3_1.jpg',
  },
];

const Services: React.FC = () => {
  return (
    <section className="services" id="servicios">
      <h2 className="services-title">
        Somos expertos en <span className="accent">consultoría en seguridad e higiene ocupacional</span>
      </h2>
      <div className="services-grid">
        {services.map((s) => (
          <div className="service-item" key={s.slug}>
            <div className="service-img-container">
              <img
                src={import.meta.env.BASE_URL + s.img}
                alt={`${s.title} - Consultoría en seguridad e higiene ocupacional México`}
                className="service-img"
                loading="lazy"
              />
            </div>
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