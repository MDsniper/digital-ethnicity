import Link from 'next/link';

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>Digital Ethnicity</h1>
          <p>
            Professional web design services and AI coaching for creators, entrepreneurs, and businesses ready to grow.
          </p>
          <Link href="/services" className="btn">
            Explore Our Services
          </Link>
        </div>
      </section>

      <section className="container" style={{ margin: '4rem 0' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>What We Offer</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>Web Design & Development</h3>
            <p>
              Custom websites designed and built to convert. From concept to launch, we create digital experiences that reflect your brand and engage your audience.
            </p>
            <Link href="/services" style={{ color: 'var(--color-gold)', fontWeight: '600' }}>
              Learn More →
            </Link>
          </div>

          <div className="service-card">
            <h3>AI Coaching & Consulting</h3>
            <p>
              Navigate the AI revolution with confidence. Strategic guidance on implementing AI tools and workflows to streamline your business operations.
            </p>
            <Link href="/services" style={{ color: 'var(--color-gold)', fontWeight: '600' }}>
              Learn More →
            </Link>
          </div>

          <div className="service-card">
            <h3>Digital Strategy</h3>
            <p>
              Develop a comprehensive digital strategy tailored to your goals. We help you define your online presence, reach your audience, and drive meaningful growth.
            </p>
            <Link href="/services" style={{ color: 'var(--color-gold)', fontWeight: '600' }}>
              Learn More →
            </Link>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: '#f9f9f9', padding: '4rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Ready to Get Started?</h2>
          <p style={{ maxWidth: '600px', margin: '1.5rem auto', fontSize: '1.1rem', color: 'var(--color-gray)' }}>
            Whether you need a new website, want to explore AI opportunities, or need strategic guidance, we&apos;re here to help.
          </p>
          <Link href="/contact" className="btn">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
