import { useNavigate } from 'react-router';
import { CheckIcon } from '../components/CheckIcon';
import { Footer } from '../components/Footer';
import { useReveal } from '../hooks/useReveal';
import '../styles/Products.css';

interface Product {
  id: number;
  number: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  features: string[];
}

const products: Product[] = [
  {
    id: 1,
    number: '01 — Studio Pod',
    name: 'Studio Pod',
    slug: 'studio-pod',
    description:
      'Perfect for home offices, creative studios, or personal retreat spaces. Compact yet fully featured.',
    image:
      'https://images.unsplash.com/photo-1765810655582-97eae3a801bb?w=1080&q=80',
    features: [
      '15–25 sqm floor space',
      'Insulated walls and ceiling',
      'Full electrical setup',
      'High-speed internet ready',
      'Climate control',
      'Custom interior finishes',
    ],
  },
  {
    id: 2,
    number: '02 — Granny Flat',
    name: 'One Bedroom Granny Flat',
    slug: 'one-bedroom-flat',
    description:
      'Complete living solution with bedroom, bathroom, and kitchen — ideal for extended family or rental income.',
    image:
      'https://images.unsplash.com/photo-1692911470070-c10cd6c89938?w=1080&q=80',
    features: [
      '35–50 sqm floor space',
      'Full kitchen with appliances',
      'Modern bathroom',
      'Separate bedroom',
      'Living area',
      'Independent utilities',
    ],
  },
  {
    id: 3,
    number: '03 — Granny Flat',
    name: 'Two Bedroom Granny Flat',
    slug: 'two-bedroom-flat',
    description:
      'Spacious family-friendly unit with multiple bedrooms, outdoor deck options, and everything you need to live comfortably.',
    image:
      'https://images.unsplash.com/photo-1743348111301-12f060372493?w=1080&q=80',
    features: [
      '60–80 sqm floor space',
      'Two separate bedrooms',
      'Full kitchen and dining',
      'Modern bathroom',
      'Spacious living area',
      'Outdoor deck option',
    ],
  },
  {
    id: 4,
    number: '04 — Custom',
    name: 'Custom Design',
    slug: 'custom-design',
    description:
      'Work directly with our team to create your perfect backyard space. No limits, total flexibility, one-of-a-kind results.',
    image:
      'https://images.unsplash.com/photo-1705321963943-de94bb3f0dd3?w=1080&q=80',
    features: [
      'Tailored to your needs',
      'Flexible size and layout',
      'Premium material options',
      'Architectural consultation',
      '3D visualisation',
      'Council approval assistance',
    ],
  },
];

const processSteps = [
  {
    num: '01',
    title: 'Consultation',
    desc: 'Discuss your vision and requirements with our expert team — no obligation, no pressure.',
  },
  {
    num: '02',
    title: 'Design',
    desc: 'Receive custom architectural plans and photorealistic 3D visualisations of your space.',
  },
  {
    num: '03',
    title: 'Approval',
    desc: 'We handle all council permits, building regulations, and paperwork on your behalf.',
  },
  {
    num: '04',
    title: 'Construction',
    desc: 'Professional modular installation with minimal disruption and a clean final handover.',
  },
];

export function Products() {
  useReveal();
  const navigate = useNavigate();

  return (
    <div style={{ paddingTop: '5rem' }}>
      {/* Hero */}
      <div className="products-hero">
        <div className="products-hero-inner reveal">
          <p className="section-label">Our Range</p>
          <h1>
            Our <em>Products</em>
          </h1>
          <p>
            From compact studio pods to spacious granny flats, we have the perfect solution for
            your backyard — designed, approved, and installed end to end.
          </p>
        </div>
      </div>

      {/* Products list */}
      <section className="products-list">
        {products.map((product, index) => (
          <div
            key={product.id}
            className={`product-row reveal ${index % 2 === 1 ? 'reversed' : ''}`}
          >
            <div className="product-row-img">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-row-content">
              <p className="product-number">{product.number}</p>
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <div className="product-features">
                {product.features.map((feature, fi) => (
                  <div key={fi} className="product-feature">
                    <CheckIcon />
                    {feature}
                  </div>
                ))}
              </div>
              <div className="product-actions">
                <button
                  className="btn-primary"
                  onClick={() => navigate(`/products/${product.slug}`)}
                >
                  Learn More
                </button>
                <button className="btn-outline">View Pricing</button>
                <button className="btn-outline">Get Quote</button>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Process */}
      <section className="process-section">
        <div className="process-header reveal">
          <p className="section-label">How It Works</p>
          <h2>Our Process</h2>
          <p>Simple, transparent, and professional from start to finish</p>
        </div>
        <div className="process-steps reveal">
          {processSteps.map((step, i) => (
            <div key={i} className="process-step">
              <div className="step-num">{step.num}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.desc}</p>
              {i < processSteps.length - 1 && <div className="step-line" />}
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
