import React, { useEffect, useState, useRef } from 'react';
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
  const [currentSlide, setCurrentSlide] = useState(0);
  const autoplayInterval = 4000; // ms, puedes hacerlo configurable si lo deseas
  const autoplay = true; // puedes hacerlo configurable si lo deseas
  const slideTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (svc) {
      document.title = `${svc.title} — Proteckta`;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [id, svc]);

  // Autoplay effect
  useEffect(() => {
    if (!svc || !autoplay) return;
    if (slideTimeout.current) clearTimeout(slideTimeout.current);
    slideTimeout.current = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % svc.carousel.length);
    }, autoplayInterval);
    return () => {
      if (slideTimeout.current) clearTimeout(slideTimeout.current);
    };
  }, [currentSlide, svc, autoplay]);

  const goToSlide = (idx: number) => {
    setCurrentSlide(idx);
  };
  const prevSlide = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setCurrentSlide((prev) => (prev - 1 + svc.carousel.length) % svc.carousel.length);
  };
  const nextSlide = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setCurrentSlide((prev) => (prev + 1) % svc.carousel.length);
  };

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
            <div>
              <a href="https://google.com.mx" style={{ color: '#0056b3', textDecoration: 'underline', fontWeight: 'bold' }}>
                Solicita nuestro catálogo de normatividad
              </a>
              <span> que cubrimos o pregunta por el servicio que requieres.</span>
            </div>
            <h2>El servicio incluye:</h2>
            <ul className="service-highlights">
              <strong>
                {svc.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
                <li>Entre otros servicios más.</li>
              </strong>
            </ul>
            
          </section>

          <aside className="service-image-block">
            {/* Carousel start */}
            {svc && svc.carousel && svc.carousel.length > 0 && (
              <div className="carousel-container">
                <button
                  className="carousel-btn carousel-btn--left"
                  onClick={prevSlide}
                  aria-label="Anterior"
                >
                  ◀
                </button>
                <div className="carousel-slide-area">
                  <img
                    src={`${B}${svc.carousel[currentSlide].replace(/^\//, '')}`}
                    alt={`${svc.title} slide ${currentSlide + 1}`}
                    className="carousel-image"
                    width={600}
                    height={400}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <button
                  className="carousel-btn carousel-btn--right"
                  onClick={nextSlide}
                  aria-label="Siguiente"
                >
                  ▶
                </button>
                <div className="carousel-indicators">
                  {svc.carousel.map((_, idx) => (
                    <button
                      key={idx}
                      className={`carousel-dot${idx === currentSlide ? ' active' : ''}`}
                      onClick={() => goToSlide(idx)}
                      aria-label={`Ir al slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            )}
            {/* Carousel end */}
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
              url="https://calendly.com/alejan_carballo"
              rootElement={document.getElementById("footer-service-layout") as HTMLElement}
              open={open}
              onModalClose={() => setOpen(false)}
            />
          </div>
          <a className="normativa-btn" href="https://google.com.mx" style={{marginTop: '1rem', marginBottom: '1rem'}}>
            Consulta nuestras normativas
          </a>
      </footer>
    </div>
  );
};

export default ServiceLayout;
