import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ServiceLayout.css';
import services from '../../data/services'; // ← ahora .ts
import { PopupModal, useCalendlyEventListener } from 'react-calendly';

const B = import.meta.env.BASE_URL;

const ServiceLayout: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const svc = services.find((s) => s.id === id);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [open, setOpen] = useState(false);

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

  // Escucha cuando se agenda un evento
  useCalendlyEventListener({
    onEventScheduled: (e) => {
      console.log("Evento agendado:", e.data.payload);
      setOpen(false); // cierra el modal automáticamente
      setShowConfirmation(true);
      setTimeout(() => setShowConfirmation(false), 3000);
    },
  });
  
  return (
    <div>
      <header className="service-hero">
        <h1>{svc.title}</h1>
      </header>

      <div className="service-layout">
        <div className="service-content">
          <section className="service-info">
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

      <footer className="service-cta-block" id="footer-service-layout">
        <p>¿Listo para llevar tu empresa al siguiente nivel?</p>
        <div className="hero-buttons service-cta-btn">
            {showConfirmation ? (
              <div className="hero-confirmation-anim service-cta-btn" role="status" aria-live="polite">
                <svg viewBox="0 0 52 52" className="checkmark" aria-hidden="true">
                  <circle className="checkmark-circle" cx="26" cy="26" r="25" fill="none" />
                  <path className="checkmark-check" fill="none" d="M14 27l7 7 16-16" />
                </svg>
                <div className="hero-confirmation-message">¡Evento agendado con éxito!</div>
              </div>
            ) : (
              <button className="cta-btn service-cta-btn" onClick={() => setOpen(true)}>
                ¡Agenda una Cotización!
              </button>
            )}
            <PopupModal
              url="https://calendly.com/julsperez"
              rootElement={document.getElementById("footer-service-layout") as HTMLElement}
              open={open}
              onModalClose={() => setOpen(false)}
            />
          </div>
      </footer>
    </div>
  );
};

export default ServiceLayout;
