import React, { useEffect, useRef, useState } from 'react';
import { PopupModal, useCalendlyEventListener } from "react-calendly";
import './Hero.css';

const heroImageNames = [
  'hero_1.jpg',
  'hero_2.jpg',
  'hero_3.jpg',
  'hero_4.jpg',
];

const FADE_DURATION = 800; // ms
const DISPLAY_DURATION = 3000; // ms

const Hero: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [isFading, setIsFading] = useState(false);
  const [showFadeIn, setShowFadeIn] = useState(false);
  const timeoutRef = useRef<any>(null);
  const fadeTimeoutRef = useRef<any>(null);
  const [open, setOpen] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setPrev(current);
      setIsFading(true);
      setShowFadeIn(false);
      fadeTimeoutRef.current = setTimeout(() => {
        setCurrent((prevIdx) => (prevIdx + 1) % heroImageNames.length);
        setIsFading(false);
        setShowFadeIn(true);
        setTimeout(() => setShowFadeIn(false), FADE_DURATION);
      }, FADE_DURATION);
    }, DISPLAY_DURATION);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (fadeTimeoutRef.current) clearTimeout(fadeTimeoutRef.current);
    };
  }, [current]);

  const getImageUrl = (name: string) => `${import.meta.env.BASE_URL}img/hero/${name}`;

  const bgImage = getImageUrl(heroImageNames[current]);
  const prevImage = prev !== null && isFading ? getImageUrl(heroImageNames[prev]) : null;

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
    <section className="hero-section" id="inicio">
      <div className="hero-bg">
        {prevImage && (
          <img
            src={prevImage}
            alt=""
            className="hero-img hero-img-layer fade-out"
            aria-hidden="true"
            draggable="false"
            style={{ zIndex: 1 }}
          />
        )}
        <img
          src={bgImage}
          alt="Consultoría en Seguridad, Higiene, Protección Civil y Gestión Ambiental"
          className={`hero-img hero-img-layer${showFadeIn ? ' fade-in' : ''}`}
          loading="eager"
          aria-hidden="true"
          draggable="false"
          style={{ zIndex: 2 }}
        />
        <div className="hero-overlay"></div>
      </div>
      <div className="hero-content">
        <div className="hero-content-inner">
          <h1>
            Consultoría en Seguridad, Higiene,<br />
            Protección Civil y Gestión Ambiental
          </h1>
          <p>
            Generamos confianza a través de cumplimiento normativo, capacitación con validez oficial y atención inmediata.
          </p>
          <div className="hero-buttons">
            {showConfirmation ? (
              <div className="hero-confirmation-anim" role="status" aria-live="polite">
                <svg viewBox="0 0 52 52" className="checkmark" aria-hidden="true">
                  <circle className="checkmark-circle" cx="26" cy="26" r="25" fill="none" />
                  <path className="checkmark-check" fill="none" d="M14 27l7 7 16-16" />
                </svg>
                <div className="hero-confirmation-message">¡Evento agendado con éxito!</div>
              </div>
            ) : (
              <button className="cta-btn" onClick={() => setOpen(true)}>
                ¡Agenda una Cotización!
              </button>
            )}
            <PopupModal
              url="https://calendly.com/julsperez"
              rootElement={document.getElementById("inicio") as HTMLElement}
              open={open}
              onModalClose={() => setOpen(false)}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 