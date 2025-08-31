import React, { useEffect, useRef, useState } from 'react';
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

  return (
    <section className="hero-section">
      <div className="hero-bg">
        {/* Imagen anterior (fade out) */}
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
        {/* Imagen actual (fade in solo si showFadeIn) */}
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
            <a href="#contact" className="cta-btn">Agenda una Cotización</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 