import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Footer } from '../components/Footer';
import { useReveal } from '../hooks/useReveal';
import '../styles/ProductDetail.css';

interface Material {
  label: string;
  sub: string;
  color: string;
  border?: string;
  image: string;
}

const materials: Material[] = [
  {
    label: 'Charcoal Cedar',
    sub: 'Dark burnt finish — timeless & bold',
    color: '#2e2e2e',
    image: 'https://images.unsplash.com/photo-1596395147635-9c2e84c80b0c?w=900&q=80',
  },
  {
    label: 'Natural Timber',
    sub: 'Warm untreated grain — organic & open',
    color: '#C8A97A',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80',
  },
  {
    label: 'Slate Grey Composite',
    sub: 'Low-maintenance modern finish',
    color: '#6B7280',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&q=80',
  },
  {
    label: 'Sage Green Steel',
    sub: 'Powder-coated — garden-integrated',
    color: '#7A9E6E',
    image: 'https://images.unsplash.com/photo-1416339442236-8ceb164046f8?w=900&q=80',
  },
  {
    label: 'White Render',
    sub: 'Clean plaster finish — crisp & minimal',
    color: '#EFEFEF',
    border: '1px solid #ccc',
    image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=900&q=80',
  },
];

interface Feature {
  name: string;
  desc: string;
  icon: React.ReactNode;
  delay?: string;
}

const features: Feature[] = [
  {
    name: 'Full Customisation',
    desc: 'Tailor dimensions, cladding, internal finishes, and layout to match your vision and space exactly.',
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
  {
    name: 'Fast Installation',
    desc: 'Our prefabricated modular system means your pod is assembled on-site in just 1–2 days with minimal disruption.',
    delay: '0.08s',
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    name: 'Fast Lead Times',
    desc: 'From deposit to delivery in as little as 6 weeks — one of the fastest turnarounds in the industry.',
    delay: '0.16s',
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    name: 'Building Regulation Compliant',
    desc: 'All pods come with full documentation and are designed to meet local planning and building regulations.',
    delay: '0.24s',
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    name: '10-Year Warranty',
    desc: 'Total peace of mind backed by a decade-long structural warranty and ongoing support from our team.',
    delay: '0.32s',
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    ),
  },
  {
    name: 'Fixed Price Contract',
    desc: "No nasty surprises. The price you see is the price you pay — fully transparent with no hidden costs.",
    delay: '0.4s',
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
      </svg>
    ),
  },
];

export function ProductDetail() {
  useReveal();
  const navigate = useNavigate();
  const [activeMaterial, setActiveMaterial] = useState(0);

  return (
    <div style={{ paddingTop: '5rem' }}>
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <button onClick={() => navigate('/products')}>Products</button>
        <span className="breadcrumb-sep">›</span>
        <span className="breadcrumb-current">Studio Pod</span>
      </div>

      {/* Hero */}
      <section className="detail-hero">
        <div className="hero-media">
          <div className="hero-media-inner">
            <img
              src="https://images.unsplash.com/photo-1596395147635-9c2e84c80b0c?w=1200&q=80"
              alt="ZenWork Pod"
            />
            <div className="video-overlay">
              <button className="play-btn" aria-label="Play product video">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#2A2A2A">
                  <polygon points="5,3 19,12 5,21" />
                </svg>
              </button>
            </div>
            <span className="video-label">Product Overview — 2:14</span>
          </div>
        </div>

        <div className="hero-content reveal">
          <p className="hero-tag">Office Pods — ZenWork Series</p>
          <h1 className="hero-title">
            Focus.
            <br />
            <em>Redefined.</em>
            <br />
            Backyard.
          </h1>
          <p className="hero-desc">
            Our ZenWork Pod is designed with simplicity, clarity, and focus at its core. Clean
            lines, minimalist detailing, and large windows create a calming, light-filled
            environment ideal for deep work or mindful creativity.
          </p>
          <div className="hero-actions">
            <a href="#detail-cta" className="btn-primary">
              View Pricing
            </a>
            <a href="#features-section" className="btn-outline">
              Explore Features
            </a>
          </div>
          <div className="hero-specs">
            <div className="spec-item">
              <span className="spec-label">Size</span>
              <span className="spec-val">3×4 m</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Lead Time</span>
              <span className="spec-val">6 wks</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Warranty</span>
              <span className="spec-val">10 yr</span>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Features */}
      <section className="features-section" id="features-section">
        <div className="features-header reveal">
          <div>
            <p className="section-label">Why ZenWork</p>
            <h2 className="features-title">
              The Best of
              <br />
              Our Features
            </h2>
          </div>
          <p className="features-subtitle">
            Every element is engineered to support how you work best — without compromise.
          </p>
        </div>
        <div className="features-grid">
          {features.map((feature, i) => (
            <div
              key={i}
              className="feature-card reveal"
              style={feature.delay ? { transitionDelay: feature.delay } : undefined}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-name">{feature.name}</h3>
              <p className="feature-desc">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Materials */}
      <section className="materials-section">
        <div className="materials-header reveal">
          <p className="section-label">Finish &amp; Materials</p>
          <h2 className="materials-title">
            Choose Your
            <br />
            Cladding
          </h2>
        </div>
        <div className="materials-layout">
          <div className="materials-list">
            {materials.map((mat, i) => (
              <div
                key={i}
                className={`material-item reveal ${activeMaterial === i ? 'active' : ''}`}
                onClick={() => setActiveMaterial(i)}
              >
                <span
                  className="material-swatch"
                  style={{ background: mat.color, border: mat.border }}
                />
                <div className="material-info">
                  <div className="material-name">{mat.label}</div>
                  <div className="material-sub">{mat.sub}</div>
                </div>
                <svg
                  className="material-arrow"
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            ))}
          </div>

          <div className="materials-preview reveal">
            {materials.map((mat, i) => (
              <img
                key={i}
                className={`preview-img ${activeMaterial === i ? 'visible' : ''}`}
                src={mat.image}
                alt={mat.label}
              />
            ))}
            <div className="preview-label">{materials[activeMaterial].label}</div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* CTA */}
      <section className="detail-cta" id="detail-cta">
        <h2 className="cta-title reveal">
          Ready to
          <br />
          build your
          <br />
          <em>ideal space?</em>
        </h2>
        <div className="cta-right reveal">
          <p className="cta-text">
            Whether you're designing a home office, creative studio, or wellness retreat — our
            team will guide you from concept to completion. Fixed pricing, fast delivery, and zero
            stress.
          </p>
          <div className="cta-actions">
            <button className="btn-primary">Get a Quote</button>
            <button className="btn-outline">Download Brochure</button>
            <button className="btn-outline" onClick={() => navigate('/products')}>
              ← Back to Products
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
