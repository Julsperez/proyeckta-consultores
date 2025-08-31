import React, { useState } from 'react';
import './Contact.css';

export interface ContactFormProps {
  showHeader?: boolean;
  className?: string;
  style?: React.CSSProperties;
  buttonColor?: string;
  buttonText?: string;
  serviceOptions?: string[];
  defaultService?: string;
}

const initialForm = { name: '', email: '', service: '', message: '' };

const ContactForm: React.FC<ContactFormProps> = ({
  className = '',
  style = {},
  buttonColor = 'var(--color-mostaza)',
  buttonText = 'Enviar Mensaje',
  serviceOptions,
  defaultService = '',
}) => {
  const [form, setForm] = useState({ ...initialForm, service: defaultService });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!form.name) newErrors.name = 'El nombre es obligatorio';
    if (!form.email) newErrors.email = 'El correo es obligatorio';
    if (serviceOptions && !form.service) newErrors.service = 'Selecciona un servicio';
    if (!form.message) newErrors.message = 'El mensaje es obligatorio';
    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      alert('Mensaje enviado');
      setForm({ ...initialForm, service: defaultService });
    }
  };

  return (
    <section className="contact-section" id="contacto">
      <div className="contact-header">
        <h1>Contáctanos</h1>
        <p className="contact-lead">
          ¿Tienes dudas o comentarios? Completa el formulario y nuestro equipo te responderá lo antes posible.
        </p>
      </div>
      <div className="contact-grid">
        <div className="contact-img-block">
          <img
            src={import.meta.env.BASE_URL + 'img/services/servicio_4_4.jpg'}
            alt="Oficina Proyeckta Consultores"
            className="contact-img"
            loading="lazy"
            width={600}
            height={400}
          />
        </div>
        <form className={`contact-form ${className}`} style={style} onSubmit={handleSubmit} noValidate>
          <p className="contact-form-lead">
            ¿Tienes una pregunta o comentario? Llena el formulario y te contactaremos pronto.
          </p>
          <div className="contact-form-row">
            <input
              type="text"
              name="name"
              placeholder="Nombre completo*"
              value={form.name}
              onChange={handleChange}
              autoComplete="name"
            />
            <input
              type="email"
              name="email"
              placeholder="Correo electrónico*"
              value={form.email}
              onChange={handleChange}
              autoComplete="email"
            />
          </div>
          {errors.name && <span className="error">{errors.name}</span>}
          {errors.email && <span className="error">{errors.email}</span>}
          <textarea
            name="message"
            placeholder="Tu mensaje*"
            value={form.message}
            onChange={handleChange}
            className="contact-form-message"
          />
          {errors.message && <span className="error">{errors.message}</span>}
          <button
            type="submit"
            className="contact-btn"
            style={{ background: buttonColor }}
          >
            {buttonText}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm; 