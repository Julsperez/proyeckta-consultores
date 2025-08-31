import React from 'react';
import './Location.css';

// const toEmbedSrc = (address: string, zoom = 16) =>
//   `https://www.google.com/maps?q=${encodeURIComponent(address)}&z=${zoom}&output=embed`;

const Location: React.FC = () => {
  const address = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1881.3308153644605!2d-99.16888949340587!3d19.427020595443906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff35f5bd1563%3A0x6c366f0e2de02ff7!2sEl%20%C3%81ngel%20de%20la%20Independencia!5e0!3m2!1ses!2smx!4v1756513923803!5m2!1ses!2smx";
  // const embed =  toEmbedSrc(address, 16);

  return (
    <section className="location-section" id="ubicacion">
      <h2 className="services-title">
        Nuestra ubicación es estratégica
      </h2>
      <div className="location-address">
        <p>El Ángel de la Independencia</p>
      </div>
      <div className="map-embed">
        <iframe
          title="Ubicación"
          src={address}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </section>
  );
};

export default Location; 