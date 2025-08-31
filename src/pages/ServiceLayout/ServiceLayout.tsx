import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ServiceLayout.css';
import services from '../../data/services'; // ← ahora .ts

const B = import.meta.env.BASE_URL;

const ServiceLayout: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const svc = services.find((s) => s.id === id);

  useEffect(() => {
    if (svc) {
      document.title = `${svc.title} — Proyeckta Consultores`;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [id, svc]);

  if (!svc) {
    return (
      <main className="service404">
        <h1>Servicio no encontrado</h1>
        <p>El servicio solicitado no existe o ha sido removido.</p>
        <Link className="btn btn--primary" to="/servicios">Ver todos los servicios</Link>
      </main>
    );
  }

  const waHref = `https://wa.me/525512345678?text=${encodeURIComponent(
    `Hola, quiero una cotización de ${svc.title}`
  )}`;

  return (
    <div>
      <header className="service-hero">
        <h1>{svc.title}</h1>
      </header>

      <div className="service-layout">
        <div className="service-content">
          <section className="service-info">
            {/* Render de HTML seguro (el contenido viene de un archivo estático controlado por ti) */}
            <div
              className="service-description"
              dangerouslySetInnerHTML={{ __html: svc.description }}
            />
            <h2>El servicio incluye:</h2>
            <ul className="service-highlights">
              {svc.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
              <li>Entre otros beneficios más.</li>
            </ul>
            
          </section>

          <aside className="service-image-block">
            <img
              src={`${B}${svc.image.replace(/^\//, '')}`}
              alt={svc.title}
              width={600}
              height={400}
              loading="lazy"
              className="service-image"
              decoding="async"
            />
          </aside>
        </div>
      </div>

      <footer className="service-cta-block">
        <p>¿Listo para llevar tu empresa al siguiente nivel?</p>
        <div className="service-cta-btns">
          <a href={waHref} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
            ¡Agendar llamada!
          </a>
        </div>
      </footer>
    </div>
  );
};

export default ServiceLayout;
