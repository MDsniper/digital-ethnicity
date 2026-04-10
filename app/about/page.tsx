export const metadata = {
  title: 'About - Digital Ethnicity',
  description: 'Learn about Digital Ethnicity and our approach to web design and AI coaching.',
};

export default function AboutPage() {
  return (
    <div className="container" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
      <article>
        <h1>About Digital Ethnicity</h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--color-gray)', marginBottom: '2rem' }}>
          We believe technology should empower creators, entrepreneurs, and businesses to tell their stories and reach their audiences.
        </p>

        <section style={{ marginBottom: '3rem' }}>
          <h2>Our Mission</h2>
          <p>
            Digital Ethnicity exists to bridge the gap between vision and execution. Whether you need a beautiful website that converts, guidance on implementing AI tools, or strategic direction for your digital presence, we&apos;re here to help you succeed.
          </p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2>What We Do</h2>
          <p>
            We specialize in three core areas:
          </p>
          <ul style={{ marginLeft: '2rem', lineHeight: '1.8' }}>
            <li><strong>Web Design & Development:</strong> Custom websites built with modern technologies, designed to reflect your brand and achieve your business goals.</li>
            <li><strong>AI Coaching & Consulting:</strong> Strategic guidance on implementing AI tools and workflows to enhance your operations and competitive advantage.</li>
            <li><strong>Digital Strategy:</strong> Comprehensive planning and execution to establish and grow your digital presence.</li>
          </ul>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2>Our Approach</h2>
          <p>
            We take a collaborative, results-oriented approach. Rather than imposing solutions, we listen to understand your needs, goals, and constraints. Then we partner with you to create strategies and execute implementations that drive real value for your business.
          </p>
        </section>

        <section style={{ backgroundColor: 'var(--color-light)', padding: '2rem', borderRadius: '8px' }}>
          <h2 style={{ marginTop: 0 }}>Ready to Work Together?</h2>
          <p>
            Let&apos;s talk about how we can help you achieve your goals. We offer free consultations to discuss your project and explore whether we&apos;re a good fit.
          </p>
          <a href="/contact" className="btn">
            Get in Touch
          </a>
        </section>
      </article>
    </div>
  );
}
