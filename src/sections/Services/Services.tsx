import React, { useEffect, useRef, useState } from 'react';
import ContactForm from '../Contact/Contact';
import './Services.css';

const services = [
  {
    slug: 'consultoria',
    title: 'Consultoría',
    desc: 'Asesoría profesional para tu negocio.',
    img: 'img/optimized/image-6-1280.jpg',
  },
  {
    slug: 'estrategia',
    title: 'Estrategia',
    desc: 'Desarrollo de estrategias efectivas.',
    img: 'img/optimized/image-2-986.jpg',
  },
  {
    slug: 'soporte',
    title: 'Soporte',
    desc: 'Acompañamiento y soporte continuo.',
    img: 'img/optimized/image-3-1280.jpg',
  },
  {
    slug: 'capacitacion',
    title: 'Capacitación',
    desc: 'Capacitación con validez oficial.',
    img: 'img/optimized/image-4-1280.jpg',
  },
];

const AUTO_INTERVAL = 4000;

function getSlidesToShow(width: number) {
  if (width >= 1200) return 2;
  if (width >= 1024) return 1;
  return 1;
}

const Services: React.FC = () => {
  const [active, setActive] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(getSlidesToShow(window.innerWidth));
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);
  const intervalRef = useRef<any>(null);

  const totalSlides = Math.ceil(services.length / slidesToShow);

  useEffect(() => {
    const handleResize = () => {
      setSlidesToShow(getSlidesToShow(window.innerWidth));
      setIsDesktop(window.innerWidth >= 1024);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % totalSlides);
    }, AUTO_INTERVAL);
    return () => clearInterval(intervalRef.current);
  }, [totalSlides]);

  const goToSlide = (idx: number) => {
    setActive(idx);
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % totalSlides);
    }, AUTO_INTERVAL);
  };

  // Servicios a mostrar en el slide actual
  // const startIdx = active * slidesToShow;
  // const visibleServices = services.slice(startIdx, startIdx + slidesToShow);

  return (
    <section className="services" id="services">
      <h2 className="services-title">
        Somos expertos en <span className="accent">todos nuestros servicios</span>
      </h2>
      <div className={`services-main${isDesktop ? ' desktop' : ''}${slidesToShow === 2 ? ' two-slides' : ''}`}>
        <div className="services-carousel">
          <div className="services-slides" style={{ transform: `translateX(-${active * 100}%)` }}>
            {Array.from({ length: totalSlides }).map((_, slideIdx) => {
              const slideServices = services.slice(slideIdx * slidesToShow, slideIdx * slidesToShow + slidesToShow);
              return (
                <div className="services-slide" key={slideIdx} style={slidesToShow === 2 ? { flexDirection: 'row' } : {}}>
                  {slideServices.map((s) => (
                    <div className="service-item" key={s.slug}>
                      <img src={import.meta.env.BASE_URL + s.img} alt={s.title} className="service-img" loading="lazy" />
                      <h3>{s.title}</h3>
                      <p>{s.desc}</p>
                      <a href={`/servicios/${s.slug}`} className="service-btn">Conocer más</a>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
          <div className="services-indicators">
            {Array.from({ length: totalSlides }).map((_, idx) => (
              <button
                key={idx}
                className={`indicator${active === idx ? ' active' : ''}`}
                onClick={() => goToSlide(idx)}
                aria-label={`Ir al slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
        <div className="services-form-container">
          <ContactForm
            showHeader={false}
            buttonColor="#F37C20"
            buttonText="Enviar Mensaje"
            serviceOptions={services.map(s => s.title)}
            className="services-contact-form"
          />
        </div>
      </div>
    </section>
  );
};

export default Services; 