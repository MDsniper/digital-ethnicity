'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ContactPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      router.push('/thank-you');
    } catch (err) {
      setError('Failed to send your message. Please try again.');
      console.error('Form submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h1>Get in Touch</h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--color-gray)', marginBottom: '2rem' }}>
          Have questions or ready to start your project? We&apos;d love to hear from you.
        </p>

        <form onSubmit={handleSubmit}>
          {error && (
            <div style={{ backgroundColor: '#fee', border: '1px solid #fcc', color: '#c00', padding: '1rem', borderRadius: '4px', marginBottom: '1.5rem' }}>
              {error}
            </div>
          )}

          <div className="form-group">
            <label htmlFor="name">Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject *</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid #ddd' }}>
          <h3>Other Ways to Connect</h3>
          <p>
            You can also find us on:
          </p>
          <ul style={{ listStyle: 'none' }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <a href="https://www.etsy.com/shop/DigitalEthnicity" target="_blank" rel="noopener noreferrer">
                Digital Ethnicity on Etsy
              </a>
            </li>
            <li>
              <a href="https://benniewilliams.com" target="_blank" rel="noopener noreferrer">
                Bennie Williams (Personal Site)
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
