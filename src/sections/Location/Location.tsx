import React from 'react';
import './Location.css';

// const toEmbedSrc = (address: string, zoom = 16) =>
//   `https://www.google.com/maps?q=${encodeURIComponent(address)}&z=${zoom}&output=embed`;

const Location: React.FC = () => {
  const address = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.128175593435!2d-99.01065862415741!3d19.363601942879487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1e2b40ef8c5d7%3A0x47c6101cce3e23b6!2sIndependencia%2015%2C%20Santa%20Martha%20Acatitla%2C%20Iztapalapa%2C%2009510%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses!2smx!4v1756649080526!5m2!1ses!2smx";
  // const embed =  toEmbedSrc(address, 16);

  return (
    <section className="location-section" id="ubicacion">
      <h2 className="services-title">
        Nuestra ubicación es estratégica
      </h2>
      <div className="location-address">
        <p>C. Independencia 15, Col. Santa Martha Acatitla, Iztapalapa CDMX, 09510</p>
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