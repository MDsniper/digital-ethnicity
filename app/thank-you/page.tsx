import Link from 'next/link';

export const metadata = {
  title: 'Thank You - Digital Ethnicity',
  description: 'Thank you for reaching out to Digital Ethnicity.',
};

export default function ThankYouPage() {
  return (
    <div className="container" style={{ paddingTop: '4rem', paddingBottom: '4rem', textAlign: 'center' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h1>Thank You!</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--color-gray)', marginBottom: '2rem' }}>
          We received your message and appreciate you reaching out. We&apos;ll review your inquiry and get back to you within 24 hours.
        </p>

        <div style={{ backgroundColor: 'var(--color-light)', padding: '2rem', borderRadius: '8px', marginBottom: '2rem' }}>
          <p style={{ marginBottom: '1rem' }}>
            In the meantime, check out our other resources or explore our services:
          </p>
          <Link href="/services" className="btn">
            Explore Services
          </Link>
        </div>

        <p style={{ color: 'var(--color-gray)' }}>
          <Link href="/" style={{ color: 'var(--color-accent)' }}>
            Return to Home
          </Link>
        </p>
      </div>
    </div>
  );
}
