import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  title: 'Digital Ethnicity - Web Design & AI Coaching Services',
  description: 'Professional web design and AI coaching services for creators and entrepreneurs.',
  keywords: ['web design', 'AI coaching', 'digital services', 'web development'],
  viewport: 'width=device-width, initial-scale=1',
  charset: 'utf-8',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
        >
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
              page_path: window.location.pathname,
            });`}
        </Script>
      </head>
      <body>
        <nav className="navbar">
          <div className="nav-container">
            <a href="/" className="nav-logo">
              Digital Ethnicity
            </a>
            <ul className="nav-menu">
              <li><a href="/services">Services</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
        </nav>

        <main className="main-content">
          {children}
        </main>

        <footer className="footer">
          <div className="footer-content">
            <p>&copy; 2026 Digital Ethnicity. All rights reserved.</p>
            <div className="footer-links">
              <a href="https://www.etsy.com/shop/DigitalEthnicity" target="_blank" rel="noopener noreferrer">
                Visit Our Etsy Shop
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
