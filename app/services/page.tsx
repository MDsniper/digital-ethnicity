import Link from 'next/link';
import { getAllServices } from '@/lib/markdown';

export const metadata = {
  title: 'Services - Digital Ethnicity',
  description: 'Explore our web design and AI coaching services.',
};

export default function ServicesPage() {
  const services = getAllServices();

  return (
    <div className="container" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
      <div style={{ marginBottom: '3rem' }}>
        <h1>Our Services</h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--color-gray)', maxWidth: '600px' }}>
          We specialize in web design and AI coaching services designed to help your business thrive in the digital landscape.
        </p>
      </div>

      {services.length > 0 ? (
        <div className="services-grid">
          {services.map((service) => (
            <Link key={service.id} href={`/services/${service.id}`} style={{ textDecoration: 'none' }}>
              <div className="service-card">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div style={{ marginTop: '1rem' }}>
                  <p style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--color-gold)' }}>
                    {service.price}
                  </p>
                  {service.duration && (
                    <p style={{ color: 'var(--color-gray)', fontSize: '0.9rem' }}>
                      {service.duration}
                    </p>
                  )}
                </div>
                <p style={{ color: 'var(--color-accent)', fontWeight: '600', marginTop: '1rem' }}>
                  View Details →
                </p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div style={{ textAlign: 'center', padding: '3rem' }}>
          <p style={{ fontSize: '1.1rem', color: 'var(--color-gray)' }}>
            Services are being set up. Please check back soon.
          </p>
        </div>
      )}
    </div>
  );
}
