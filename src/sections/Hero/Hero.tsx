import React, { useEffect, useRef, useState } from 'react';
import './Hero.css';

const heroImages = [
  {
    base: 'image-2',
    sources: [
      { srcSet: 'img/optimized/image-2-986.webp', type: 'image/webp', media: '(min-width: 768px)' },
      { srcSet: 'img/optimized/image-2-986.jpg', type: 'image/jpeg', media: '(min-width: 768px)' },
      { srcSet: 'img/optimized/image-2-640.webp', type: 'image/webp' },
      { srcSet: 'img/optimized/image-2-640.jpg', type: 'image/jpeg' },
    ],
    fallback: 'img/optimized/image-2-986.jpg',
  },
  {
    base: 'image-9',
    sources: [
      { srcSet: 'img/optimized/image-9-1920.webp', type: 'image/webp', media: '(min-width: 1280px)' },
      { srcSet: 'img/optimized/image-9-1920.jpg', type: 'image/jpeg', media: '(min-width: 1280px)' },
      { srcSet: 'img/optimized/image-9-1280.webp', type: 'image/webp', media: '(min-width: 768px)' },
      { srcSet: 'img/optimized/image-9-1280.jpg', type: 'image/jpeg', media: '(min-width: 768px)' },
      { srcSet: 'img/optimized/image-9-640.webp', type: 'image/webp' },
      { srcSet: 'img/optimized/image-9-640.jpg', type: 'image/jpeg' },
    ],
    fallback: 'img/optimized/image-9-1920.jpg',
  },
  {
    base: 'image-17',
    sources: [
      { srcSet: 'img/optimized/image-17-1600.webp', type: 'image/webp', media: '(min-width: 1280px)' },
      { srcSet: 'img/optimized/image-17-1600.jpg', type: 'image/jpeg', media: '(min-width: 1280px)' },
      { srcSet: 'img/optimized/image-17-1280.webp', type: 'image/webp', media: '(min-width: 768px)' },
      { srcSet: 'img/optimized/image-17-1280.jpg', type: 'image/jpeg', media: '(min-width: 768px)' },
      { srcSet: 'img/optimized/image-17-640.webp', type: 'image/webp' },
      { srcSet: 'img/optimized/image-17-640.jpg', type: 'image/jpeg' },
    ],
    fallback: 'img/optimized/image-17-1600.jpg',
  },
  {
    base: 'image-43',
    sources: [
      { srcSet: 'img/optimized/image-43-1280.webp', type: 'image/webp', media: '(min-width: 768px)' },
      { srcSet: 'img/optimized/image-43-1280.jpg', type: 'image/jpeg', media: '(min-width: 768px)' },
      { srcSet: 'img/optimized/image-43-640.webp', type: 'image/webp' },
      { srcSet: 'img/optimized/image-43-640.jpg', type: 'image/jpeg' },
    ],
    fallback: 'img/optimized/image-43-1280.jpg',
  },
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
    // Espera DISPLAY_DURATION, luego inicia el fade-out
    timeoutRef.current = setTimeout(() => {
      setPrev(current);
      setIsFading(true);
      setShowFadeIn(false);
      // Cuando termina el fade-out, cambia la imagen y hace fade-in
      fadeTimeoutRef.current = setTimeout(() => {
        setCurrent((prevIdx) => (prevIdx + 1) % heroImages.length);
        setIsFading(false);
        setShowFadeIn(true);
        // Quita el fade-in después de la animación
        setTimeout(() => setShowFadeIn(false), FADE_DURATION);
      }, FADE_DURATION);
    }, DISPLAY_DURATION);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (fadeTimeoutRef.current) clearTimeout(fadeTimeoutRef.current);
    };
  }, [current]);

  const bgImage = heroImages[current];
  const prevImage = prev !== null && isFading ? heroImages[prev] : null;

  return (
    <section className="hero-section">
      <div className="hero-bg">
        {/* Imagen anterior (fade out) */}
        {prevImage && (
          <picture className="hero-img-layer fade-out">
            {prevImage.sources.map((src, i) => (
              <source key={i} {...src} />
            ))}
            <img
              src={import.meta.env.BASE_URL + prevImage.fallback}
              alt=""
              className="hero-img"
              aria-hidden="true"
              draggable="false"
              style={{ zIndex: 1 }}
            />
          </picture>
        )}
        {/* Imagen actual (fade in solo si showFadeIn) */}
        <picture className={`hero-img-layer${showFadeIn ? ' fade-in' : ''}`}>
          {bgImage.sources.map((src, i) => (
            <source key={i} {...src} />
          ))}
          <img
            src={import.meta.env.BASE_URL + bgImage.fallback}
            alt="Consultoría en Seguridad, Higiene, Protección Civil y Gestión Ambiental"
            className="hero-img"
            loading="eager"
            aria-hidden="true"
            draggable="false"
            style={{ zIndex: 2 }}
          />
        </picture>
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
            <a href="#contact" className="cta-btn">Solicitar Cotización</a>
            <a
              href="https://wa.me/525512345678?text=Hola%2C%20me%20interesa%20una%20cotizaci%C3%B3n."
              className="whatsapp-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 