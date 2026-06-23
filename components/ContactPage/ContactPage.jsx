'use client';

import { useState } from 'react';
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa';

import {
  FiSend,
  FiUser,
  FiMail,
  FiPhone,
  FiMessageSquare,
  FiPaperclip,
  FiCheckCircle,
  FiAlertCircle,
} from 'react-icons/fi';

import Link from 'next/link';
import Head from 'next/head';

const WHATSAPP_NUMBER = '919960224245'; // country code + number, no + or spaces

const infoCards = [
  {
    icon: <FaMapMarkerAlt size={22} />,
    title: 'Visit Us',
    content:
      'Plot No.3, 2nd Floor, Indraprastha Apartment, Dronacharya Nagar, Trimurti Nagar, Nagpur – 440022',
    link: 'https://maps.app.goo.gl/PRN4ZYVoDxMU9yav5',
    linkLabel: 'Get Directions',
    color: '#1e3a8a',
    bg: '#eff6ff',
  },
  {
    icon: <FaMapMarkerAlt size={22} />,
    title: 'Branch Office',
    content:
      'Office No 5, 2nd floor, Siddhivinayak towers, Bibvewadi Road, Pune 411037, India',
    link: 'https://maps.app.goo.gl/8Eqm48maYwbauaw66',
    linkLabel: 'Get Directions',
    color: '#1e3a8a',
    bg: '#eff6ff',
  },
  {
    icon: <FaPhoneAlt size={22} />,
    title: 'Call Us',
    content: '+91 9960224245',
    link: 'tel:+919960224245',
    linkLabel: 'Call Now',
    color: '#1e3a8a',
    bg: '#eff6ff',
  },
  {
    icon: <FaEnvelope size={22} />,
    title: 'Email Us',
    content: 'contact@brainhuntventures.com',
    content2: 'jobs@brainhuntventures.com',
    link: 'mailto:contact@brainhuntventures.com',
    linkLabel: 'Send Email',
    color: '#1e3a8a',
    bg: '#eff6ff',
  },
];

const socials = [
  {
    icon: <FaFacebook size={18} />,
    href: 'https://www.facebook.com/brainhuntventures/',
    label: 'Facebook',
  },
  {
    icon: <FaInstagram size={18} />,
    href: 'https://www.instagram.com/brainhuntventures/',
    label: 'Instagram',
  },
  {
    icon: <FaTwitter size={18} />,
    href: 'https://twitter.com/brainhuntventures',
    label: 'Twitter',
  },
  {
    icon: <FaLinkedin size={18} />,
    href: 'https://www.linkedin.com/company/brainhunt-venture-pvt-ltd/',
    label: 'LinkedIn',
  },
];

export default function ContactPage() {

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [file, setFile] = useState(null);

  // ✅ STATUS STATE ADDED
  const [status, setStatus] = useState('');

  const handleChange = (e) =>
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  const handleFile = (e) => setFile(e.target.files[0] || null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setStatus('sending');

      const text = [
        `👋 *New Enquiry – BrainHunt Ventures*`,
        ``,
        `👤 *Name:* ${form.name}`,
        `📧 *Email:* ${form.email}`,
        `📞 *Phone:* ${form.phone}`,
        `💬 *Message:*`,
        form.message,
        file
          ? `📎 *Attachment:* ${file.name} _(please send separately)_`
          : '',
      ]
        .filter(Boolean)
        .join('\n');

      const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        text
      )}`;

      window.open(url, '_blank');

      setStatus('success');

      // Reset form
      setForm({
        name: '',
        email: '',
        phone: '',
        message: '',
      });

      setFile(null);

      // Auto remove success message
      setTimeout(() => {
        setStatus('');
      }, 4000);

    } catch (error) {
      console.error(error);

      setStatus('error');

      setTimeout(() => {
        setStatus('');
      }, 4000);
    }
  };

  return (
    <>
      <Head>
        <title>Contact Us – BrainHunt Ventures</title>

        <meta
          name="description"
          content="Get in touch with BrainHunt Ventures for recruitment, HR consulting, payroll, BGV and more."
        />
      </Head>

      <style>{`
        .contact-page { background: #fff; min-height: 100vh; }

        /* hero strip */
        .contact-hero {
          background: #04112b;
          padding: 100px 6vw 60px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .contact-hero::before {
          content: '';
          position: absolute; inset: 0;
          background-image: radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px);
          background-size: 28px 28px;
          pointer-events: none;
        }

        .contact-hero::after {
          content: '';
          position: absolute;
          top: -80px; left: 50%; transform: translateX(-50%);
          width: 600px; height: 400px; border-radius: 50%;
          background: radial-gradient(circle, rgba(37,99,235,0.2) 0%, transparent 70%);
          pointer-events: none;
        }

        .contact-hero-label {
          display: inline-block;
          background: rgba(37,99,235,0.15);
          border: 1px solid rgba(59,130,246,0.35);
          border-radius: 999px;
          padding: 4px 18px;
          font-size: 0.72rem; font-weight: 600;
          letter-spacing: 0.1em; text-transform: uppercase;
          color: #60a5fa; margin-bottom: 18px;
          position: relative; z-index: 1;
        }

        .contact-hero h1 {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800; color: #f0f6ff;
          letter-spacing: -0.03em; margin-bottom: 14px;
          position: relative; z-index: 1;
        }

        .contact-hero h1 span { color: #3b82f6; }

        .contact-hero p {
          color: #94a3b8; font-size: 1rem; max-width: 500px;
          margin: 0 auto; line-height: 1.75;
          position: relative; z-index: 1;
        }

        /* info cards */
        .info-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          max-width: 1100px;
          margin: -36px auto 0;
          padding: 0 5vw;
          position: relative; z-index: 10;
        }

        .info-card {
          background: #fff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 28px 20px;
          text-align: center;
          box-shadow: 0 4px 24px rgba(0,0,0,0.07);
          transition: transform 0.25s, box-shadow 0.25s;
        }

        .info-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(0,0,0,0.12);
        }

        .info-card-icon {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: #eff6ff;
          color: #1e3a8a;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 14px;
        }

        .info-card h3 {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #94a3b8;
          margin-bottom: 8px;
        }

        .info-card p {
          font-size: 0.9rem;
          color: #334155;
          line-height: 1.6;
          margin-bottom: 12px;
        }

        .info-card a.card-link {
          font-size: 0.8rem;
          font-weight: 600;
          color: #2563eb;
          text-decoration: none;
          border-bottom: 1px solid #bfdbfe;
          transition: color 0.2s;
        }

        .info-card a.card-link:hover {
          color: #1d4ed8;
        }

        /* main body */
        .contact-body {
          max-width: 1100px;
          margin: 60px auto;
          padding: 0 5vw;
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 48px;
          align-items: start;
        }

        /* left panel */
        .contact-left h2 {
          font-size: 1.6rem;
          font-weight: 800;
          color: #1e3a8a;
          letter-spacing: -0.02em;
          margin-bottom: 12px;
        }

        .contact-left p {
          color: #64748b;
          font-size: 0.93rem;
          line-height: 1.75;
          margin-bottom: 32px;
        }

        .map-wrap {
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid #e2e8f0;
          box-shadow: 0 4px 20px rgba(0,0,0,0.07);
          margin-bottom: 28px;
        }

        .map-wrap iframe {
          display: block;
          width: 100%;
          height: 220px;
          border: none;
        }

        .social-row {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .social-btn {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 8px 16px;
          border-radius: 10px;
          border: 1px solid #e2e8f0;
          font-size: 0.8rem;
          font-weight: 600;
          color: #334155;
          text-decoration: none;
          transition: all 0.2s;
          background: #fff;
        }

        .social-btn:hover {
          border-color: #bfdbfe;
          background: #eff6ff;
          color: #1e3a8a;
        }

        /* FORM */
        .contact-form-wrap {
          background: #fff;
          border: 1px solid #e2e8f0;
          border-radius: 20px;
          padding: 36px 32px;
          box-shadow: 0 4px 32px rgba(0,0,0,0.07);
        }

        .contact-form-wrap h3 {
          font-size: 1.3rem;
          font-weight: 800;
          color: #1e3a8a;
          margin-bottom: 6px;
        }

        .contact-form-wrap .form-sub {
          font-size: 0.85rem;
          color: #94a3b8;
          margin-bottom: 28px;
        }

        .field-group { margin-bottom: 16px; }

        .field-label {
          display: block;
          font-size: 0.75rem;
          font-weight: 600;
          color: #475569;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin-bottom: 6px;
        }

        .field-wrap {
          display: flex;
          align-items: center;
          border: 1.5px solid #e2e8f0;
          border-radius: 10px;
          background: #f8fafc;
          transition: border-color 0.2s, box-shadow 0.2s;
          overflow: hidden;
        }

        .field-wrap:focus-within {
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59,130,246,0.1);
          background: #fff;
        }

        .field-icon {
          padding: 0 12px;
          color: #94a3b8;
          flex-shrink: 0;
          display: flex;
          align-items: center;
        }

        .field-wrap input,
        .field-wrap textarea {
          flex: 1;
          border: none;
          background: transparent;
          padding: 11px 12px 11px 0;
          font-size: 0.92rem;
          color: #1e293b;
          outline: none;
          width: 100%;
          font-family: inherit;
        }

        .field-wrap textarea {
          padding-top: 12px;
          resize: vertical;
          min-height: 100px;
        }

        /* file input */
        .file-wrap {
          border: 1.5px dashed #cbd5e1;
          border-radius: 10px;
          padding: 14px 16px;
          background: #f8fafc;
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
          transition: border-color 0.2s, background 0.2s;
        }

        .file-wrap:hover {
          border-color: #3b82f6;
          background: #eff6ff;
        }

        .file-wrap input[type="file"] {
          display: none;
        }

        .file-label {
          font-size: 0.85rem;
          color: #64748b;
          cursor: pointer;
          flex: 1;
        }

        .file-name {
          font-size: 0.8rem;
          color: #2563eb;
          font-weight: 500;
        }

        /* submit */
        .submit-btn {
          width: 100%;
          padding: 13px;
          background: #1e3a8a;
          color: #fff;
          font-size: 0.95rem;
          font-weight: 700;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: background 0.2s, transform 0.15s;
          margin-top: 8px;
          font-family: inherit;
        }

        .submit-btn:hover:not(:disabled) {
          background: #1d4ed8;
          transform: translateY(-1px);
        }

        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        /* toast */
        .toast {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 16px;
          border-radius: 10px;
          font-size: 0.87rem;
          font-weight: 500;
          margin-bottom: 16px;
        }

        .toast.success {
          background: #f0fdf4;
          border: 1px solid #bbf7d0;
          color: #166534;
        }

        .toast.error {
          background: #fef2f2;
          border: 1px solid #fecaca;
          color: #991b1b;
        }

        /* responsive */
        @media (max-width: 860px) {
          .info-grid {
            grid-template-columns: 1fr;
            margin-top: -20px;
          }

          .contact-body {
            grid-template-columns: 1fr;
            gap: 32px;
          }

          .contact-form-wrap {
            padding: 28px 20px;
          }
        }
      `}</style>

      <div className="contact-page">

        {/* INFO CARDS */}
        <div className="info-grid">
          {infoCards.map((c, i) => (
            <div className="info-card" key={i}>
              <div className="info-card-icon">{c.icon}</div>

              <h3>{c.title}</h3>

              <p>{c.content}</p>

              {c.content2 && <p>{c.content2}</p>}

              <a
                href={c.link}
                className="card-link"
                target="_blank"
                rel="noreferrer"
              >
                {c.linkLabel} →
              </a>
            </div>
          ))}
        </div>

        {/* BODY */}
        <div className="contact-body">

          {/* LEFT */}
          <div className="contact-left">

            <h2>We'd Love to Hear From You</h2>

            <p>
              Whether you're looking to hire top talent, need help with payroll,
              or want to learn more about our BGV services — our team is here to help.
            </p>

            {/* Google Map */}
            <div className="map-wrap">
              <iframe
                title="BrainHunt Ventures Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.88430598131!2d79.03895177503398!3d21.117178180554387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4bf2ae4ff6ed7%3A0x12145dd4c2123eb3!2sEffiman%20Services%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1778956874261!5m2!1sen!2sin"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Socials */}
            <p
              style={{
                fontSize: '0.8rem',
                fontWeight: 700,
                color: '#94a3b8',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '12px',
              }}
            >
              Follow Us
            </p>

            <div className="social-row">
              {socials.map((s, i) => (
                <Link
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="social-btn"
                >
                  {s.icon} {s.label}
                </Link>
              ))}
            </div>

          </div>

          {/* FORM */}
          <div className="contact-form-wrap">

            <h3>Send Us a Message</h3>

            <p className="form-sub">
              We typically respond within one business day.
            </p>

            {status === 'success' && (
              <div className="toast success">
                <FiCheckCircle size={18} />
                Message sent successfully! We'll be in touch soon.
              </div>
            )}

            {status === 'error' && (
              <div className="toast error">
                <FiAlertCircle size={18} />
                Something went wrong. Please try again or email us directly.
              </div>
            )}

            <form onSubmit={handleSubmit}>

              {/* Name */}
              <div className="field-group">
                <label className="field-label">Full Name</label>

                <div className="field-wrap">
                  <span className="field-icon">
                    <FiUser size={15} />
                  </span>

                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    required
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Email */}
              <div className="field-group">
                <label className="field-label">Email Address</label>

                <div className="field-wrap">
                  <span className="field-icon">
                    <FiMail size={15} />
                  </span>

                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    required
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="field-group">
                <label className="field-label">Phone Number</label>

                <div className="field-wrap">
                  <span className="field-icon">
                    <FiPhone size={15} />
                  </span>

                  <input
                    type="tel"
                    name="phone"
                    placeholder="+91 98765 43210"
                    required
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* File */}
              <div className="field-group">
                <label className="field-label">
                  Attach Resume / File (optional)
                </label>

                <label className="file-wrap" htmlFor="file-input">
                  <FiPaperclip size={16} color="#94a3b8" />

                  <span className="file-label">
                    {file ? (
                      <span className="file-name">{file.name}</span>
                    ) : (
                      'Click to upload a file'
                    )}
                  </span>

                  <input
                    id="file-input"
                    type="file"
                    name="file"
                    onChange={handleFile}
                    accept=".pdf,.doc,.docx,.jpg,.png"
                  />
                </label>
              </div>

              {/* Message */}
              <div className="field-group">
                <label className="field-label">Message</label>

                <div className="field-wrap">
                  <span
                    className="field-icon"
                    style={{
                      alignSelf: 'flex-start',
                      paddingTop: '13px',
                    }}
                  >
                    <FiMessageSquare size={15} />
                  </span>

                  <textarea
                    name="message"
                    placeholder="Tell us how we can help you..."
                    required
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="submit-btn"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? (
                  <>
                    <span
                      style={{
                        width: 16,
                        height: 16,
                        border: '2px solid rgba(255,255,255,0.4)',
                        borderTopColor: '#fff',
                        borderRadius: '50%',
                        animation: 'spin 0.7s linear infinite',
                        display: 'inline-block',
                      }}
                    />

                    Sending...
                  </>
                ) : (
                  <>
                    <FiSend size={15} />
                    Send Message
                  </>
                )}
              </button>

            </form>

          </div>

        </div>
      </div>

      <style>{`
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </>
  );
}