import React from 'react';
import './FloatingWhatsAppButton.css';

interface FloatingWhatsAppButtonProps {
  color?: string;
  image?: string;
  url?: string;
  message?: string;
  marginBottom?: string;
  button?: string;
}
const baseUrl = import.meta.env.BASE_URL;

const DEFAULT_URL =
  'https://wa.me/525620191598?text=Hola%2C%20me%20interesa%20una%20cotizaci%C3%B3n.';
const DEFAULT_IMAGE = baseUrl + 'img/';
const DEFAULT_ICON = 'WhatsApp_icon.png';
const DEFAULT_COLOR = 'none';
const DEFAULT_MESSAGE = null;
const DEFAULT_MARGIN_BOTTOM = '0rem';
const DEFAULT_BUTTON = "whatsapp";


const FloatingWhatsAppButton: React.FC<FloatingWhatsAppButtonProps> = ({
  color = DEFAULT_COLOR,
  image = DEFAULT_IMAGE + DEFAULT_ICON,
  url = DEFAULT_URL,
  message = DEFAULT_MESSAGE,
  marginBottom = DEFAULT_MARGIN_BOTTOM,
  button = DEFAULT_BUTTON,
}) => (
  <div className="floating-whatsapp-btn" style={{background: color, marginBottom: marginBottom, padding: '0'}}>
    <a
      className='button-link'
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      style={{ background: color, borderRadius: '50%' }}
    >
      {message && (
        <span style={{margin: '1rem', fontSize: '1rem', fontWeight: 'bold'}}>{message}</span>
      )}
      {button !== "normativa" && (
        <img
          src={image}
          alt="WhatsApp"
          style={{ width: 56, height: 56 }}
        />
      )}
    </a>
  </div>
);

export default FloatingWhatsAppButton;
