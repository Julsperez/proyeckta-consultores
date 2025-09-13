import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const services = [
  {
    slug: 'seguridad-higiene',
    title: 'Seguridad e Higiene Ocupacional',
    desc: 'Ofrecemos apoyo especializado asegurando que tu organización cumpla con la normatividad vigente, minimice riesgos y promueva un ambiente laboral seguro y eficiente.',
    img: 'img/servicios/servicio_1_portada.jpg',
  },
  {
    slug: 'proteccion-civil',
    title: 'Promoción y capacitacion en temas de auditorias',
    desc: 'Brindamos recomendaciones específicas que garantizan hasta un 100% de conformidad con la normatividad aplicable.',
    img: 'img/servicios/servicio_2_portada.jpg',
  },
  {
    slug: 'gestion-ambiental',
    title: 'Gestión Ambiental',
    desc: 'Nos encargamos de que tu empresa cuente con la documentación, permisos y registros necesarios para operar en conformidad con la normatividad vigente.',
    img: 'img/servicios/servicio_3_portada.jpg',
  },
  {
    slug: 'certificaciones',
    title: 'Programa de Capacitación de Brigadas de Emergencia',
    desc: 'Garantizamos que tu organización esté preparada para responder de manera efectiva a situaciones de riesgo y cumpla con la normatividad vigente.',
    img: 'img/servicios/servicio_4_portada.jpg',
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