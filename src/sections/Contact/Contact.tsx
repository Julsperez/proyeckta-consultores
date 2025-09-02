import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

export interface ContactFormProps {
  showHeader?: boolean;
  className?: string;
  style?: React.CSSProperties;
  buttonColor?: string;
  buttonText?: string;
  defaultService?: string;
}

const initialForm = { name: '', email: '',  message: '' };

type Status = 'idle' | 'sending' | 'success' | 'error';

const ContactForm: React.FC<ContactFormProps> = ({
  className = '',
  style = {},
  buttonColor = 'var(--color-mostaza)',
  buttonText = 'Enviar Mensaje',
}) => {
  const [form, setForm] = useState({ ...initialForm });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [status, setStatus] = useState<Status>('idle');
  const formRef = useRef<HTMLFormElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (status === 'success' || status === 'error') {
      statusRef.current?.focus();
    }
  }, [status]);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!form.name) newErrors.name = 'El nombre es obligatorio';
    if (!form.email) newErrors.email = 'El correo es obligatorio';
    if (!form.message) newErrors.message = 'El mensaje es obligatorio';
    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'sending') return;
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setStatus('sending');
      sendEmail(e);
    }
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    const serviceId = 'service_ms4dw5r';
    const templateId = 'template_kx8sh07';
    const publicKey = '8z9B_64gfAikJbp_o';
    
    emailjs.sendForm(serviceId, templateId, formRef.current as HTMLFormElement, {
      publicKey: publicKey,
    }).then(
      () => {
        setStatus('success');
        setTimeout(() => {
          formRef.current?.reset();
          setForm({ ...initialForm });
          setStatus('idle');
        }, 3500);
      },
      () => {
        setStatus('error');
      }
    );
  };

  const handleRetry = () => {
    setForm({ ...initialForm });
    setErrors({});
    formRef.current?.reset();
    setStatus('idle');
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
        <div className="contact-form-block">
          {status === 'success' && (
            <div
              className="contact-status contact-status-success"
              tabIndex={-1}
              ref={statusRef}
              role="status"
              aria-live="polite"
            >
              <div className="success-check-anim">
                <svg viewBox="0 0 52 52" className="checkmark" aria-hidden="true">
                  <circle className="checkmark-circle" cx="26" cy="26" r="25" fill="none" />
                  <path className="checkmark-check" fill="none" d="M14 27l7 7 16-16" />
                </svg>
              </div>
              <div className="contact-status-message">¡Mensaje enviado con éxito!</div>
            </div>
          )}
          {status === 'error' && (
            <div
              className="contact-status contact-status-error"
              tabIndex={-1}
              ref={statusRef}
              role="status"
              aria-live="polite"
            >
              <div className="retry-anim">
                {/* <svg viewBox="0 0 48 48" className="retry-icon" aria-hidden="true">
                  <g>
                    <path d="M24 6a18 18 0 1 1-12.73 5.27" fill="none" stroke="#d32f2f" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="8 8 12 8 12 12" fill="none" stroke="#d32f2f" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                  </g>
                </svg> */}
                <svg viewBox="0 0 40 40" className="error-cross" aria-hidden="true">
                  <circle cx="20" cy="20" r="18" fill="none" />
                  <path className="error-cross-line error-cross-line1" d="M14 14 L26 26" />
                  <path className="error-cross-line error-cross-line2" d="M26 14 L14 26" />
                </svg>
              </div>
              <div className="contact-status-message">No se pudo enviar el correo. Inténtelo nuevamente.</div>
              <button type="button" className="contact-btn retry-btn" onClick={handleRetry} autoFocus>
                Intentar de nuevo
              </button>
            </div>
          )}
          {status === 'sending' && (
            <div
              className="contact-status contact-status-sending"
              tabIndex={-1}
              ref={statusRef}
              role="status"
              aria-live="polite"
            >
              <div className="loader-anim" aria-hidden="true">
                <span className="loader-circle"></span>
              </div>
              <div className="contact-status-message">Enviando mensaje…</div>
            </div>
          )}
          <form
            className={`contact-form ${className}`}
            style={status === 'success' || status === 'sending' || status === 'error' ? { display: 'none' } : style}
            ref={formRef}
            onSubmit={handleSubmit}
            noValidate
            aria-busy={status === 'sending'}
          >
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
                disabled={status === 'sending'}
              />
              <input
                type="email"
                name="email"
                placeholder="Correo electrónico*"
                value={form.email}
                onChange={handleChange}
                autoComplete="email"
                disabled={status === 'sending'}
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
              disabled={status === 'sending'}
            />
            {errors.message && <span className="error">{errors.message}</span>}
            <button
              type="submit"
              className="contact-btn"
              style={{ background: buttonColor, opacity: status === 'sending' ? 0.6 : 1, cursor: status === 'sending' ? 'not-allowed' : 'pointer' }}
              disabled={status === 'sending'}
              aria-disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Enviando…' : buttonText}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm; 