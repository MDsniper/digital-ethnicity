import Link from 'next/link';
import { getAllServices, getService } from '@/lib/markdown';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const services = getAllServices();
  return services.map((service) => ({
    id: service.id,
  }));
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const service = await getService(params.id);

  if (!service) {
    return {
      title: 'Service Not Found - Digital Ethnicity',
    };
  }

  return {
    title: `${service.title} - Digital Ethnicity`,
    description: service.description,
  };
}

export default async function ServicePage({ params }: { params: { id: string } }) {
  const service = await getService(params.id);

  if (!service) {
    notFound();
  }

  const allServices = getAllServices();
  const currentIndex = allServices.findIndex((s) => s.id === params.id);
  const prevService = currentIndex > 0 ? allServices[currentIndex - 1] : null;
  const nextService = currentIndex < allServices.length - 1 ? allServices[currentIndex + 1] : null;

  return (
    <div className="container" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
      <Link href="/services" style={{ color: 'var(--color-accent)', marginBottom: '2rem', display: 'inline-block' }}>
        ← Back to Services
      </Link>

      <article style={{ marginTop: '2rem' }}>
        <h1>{service.title}</h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--color-gray)', marginBottom: '2rem' }}>
          {service.description}
        </p>

        <div style={{ backgroundColor: 'var(--color-light)', padding: '2rem', borderRadius: '8px', marginBottom: '2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
            <div>
              <p style={{ color: 'var(--color-gray)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Price</p>
              <p style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--color-gold)' }}>
                {service.price}
              </p>
            </div>
            {service.duration && (
              <div>
                <p style={{ color: 'var(--color-gray)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Duration</p>
                <p style={{ fontSize: '1.1rem', fontWeight: '600' }}>
                  {service.duration}
                </p>
              </div>
            )}
          </div>
        </div>

        <div style={{ lineHeight: '1.8', marginBottom: '3rem' }}>
          {/* Content from Markdown files in repository - trusted source */}
          <div dangerouslySetInnerHTML={{ __html: service.contentHtml }} />
        </div>

        <div style={{ textAlign: 'center', padding: '2rem', backgroundColor: '#f9f9f9', borderRadius: '8px', marginBottom: '3rem' }}>
          <h3 style={{ marginBottom: '1rem' }}>Interested in this service?</h3>
          <Link href="/contact" className="btn">
            Get in Touch
          </Link>
        </div>

        <nav style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '2rem', borderTop: '1px solid #ddd' }}>
          {prevService ? (
            <Link href={`/services/${prevService.id}`} style={{ color: 'var(--color-accent)' }}>
              ← {prevService.title}
            </Link>
          ) : (
            <div />
          )}
          {nextService ? (
            <Link href={`/services/${nextService.id}`} style={{ color: 'var(--color-accent)' }}>
              {nextService.title} →
            </Link>
          ) : (
            <div />
          )}
        </nav>
      </article>
    </div>
  );
}
