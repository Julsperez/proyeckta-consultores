import React, { useState } from 'react';
// import { FaWhatsapp, FaPhone } from 'react-icons/fa';
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
  showHeader = true,
  className = '',
  style = {},
  buttonColor = '#F37C20',
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
      // Aquí puedes manejar el envío del formulario
      alert('Mensaje enviado');
      setForm({ ...initialForm, service: defaultService });
    }
  };

  return (
    <form className={`contact-form ${className}`} style={style} onSubmit={handleSubmit} noValidate>
      {showHeader && <h2>Contáctanos</h2>}
      <input
        type="text"
        name="name"
        placeholder="Nombre*"
        value={form.name}
        onChange={handleChange}
      />
      {errors.name && <span className="error">{errors.name}</span>}
      <input
        type="email"
        name="email"
        placeholder="Correo*"
        value={form.email}
        onChange={handleChange}
      />
      {errors.email && <span className="error">{errors.email}</span>}
      {serviceOptions && (
        <select
          name="service"
          value={form.service}
          onChange={handleChange}
        >
          <option value="">Servicio requerido*</option>
          {serviceOptions.map((opt, i) => (
            <option value={opt} key={i}>{opt}</option>
          ))}
        </select>
      )}
      {errors.service && <span className="error">{errors.service}</span>}
      <textarea
        name="message"
        placeholder="Mensaje*"
        value={form.message}
        onChange={handleChange}
      />
      {errors.message && <span className="error">{errors.message}</span>}
      <button
        type="submit"
        style={{ background: buttonColor, color: '#fff', borderRadius: 4, fontWeight: 600 }}
      >
        {buttonText}
      </button>
    </form>
  );
};

export default ContactForm; 