import React from 'react';
import './FloatingWhatsAppButton.css';

interface FloatingWhatsAppButtonProps {
  color?: string;
  image?: string;
  url?: string;
  message?: string;
  marginBottom?: string;
}

const DEFAULT_URL =
  'https://wa.me/525620191598?text=Hola%2C%20me%20interesa%20una%20cotizaci%C3%B3n.';
const DEFAULT_IMAGE = import.meta.env.BASE_URL + 'img/WhatsApp_icon.png';
const DEFAULT_COLOR = '#25d366';
const DEFAULT_MESSAGE = 'Solicita una Cotización';
const DEFAULT_MARGIN_BOTTOM = '0rem';

const FloatingWhatsAppButton: React.FC<FloatingWhatsAppButtonProps> = ({
  color = DEFAULT_COLOR,
  image = DEFAULT_IMAGE,
  url = DEFAULT_URL,
  message = DEFAULT_MESSAGE,
  marginBottom = DEFAULT_MARGIN_BOTTOM,
}) => (
  <div className="floating-whatsapp-btn" style={{background: color, marginBottom: marginBottom}}>
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      style={{ background: color, borderRadius: '50%' }}
    >
      <span>{message}</span>
      <img
        src={image}
        alt="WhatsApp"
        style={{ width: 56, height: 56 }}
      />
    </a>
  </div>
);

export default FloatingWhatsAppButton;
