import React from 'react';
import './FloatingWhatsAppButton.css';

const WHATSAPP_URL =
  'https://wa.me/525580129631?text=Hola%2C%20me%20interesa%20una%20cotizaci%C3%B3n.';

const FloatingWhatsAppButton: React.FC = () => (
  <div className="floating-whatsapp-btn">
    <span>Solicita una Cotización</span>
    <a
      href={WHATSAPP_URL}
      
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
    >
      <img
        src={import.meta.env.BASE_URL + 'img/WhatsApp_icon.png'}
        alt="WhatsApp"
        style={{ width: 56, height: 56 }}
      />
    </a>
  </div>
);

export default FloatingWhatsAppButton;
