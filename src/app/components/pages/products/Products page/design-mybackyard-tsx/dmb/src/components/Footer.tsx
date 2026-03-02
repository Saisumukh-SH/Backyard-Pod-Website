import { useNavigate } from 'react-router';

export function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="site-footer">
      <div className="footer-logo">Design | MyBackyard.</div>
      <div className="footer-links">
        <button onClick={() => navigate('/products')}>Products</button>
        <button>Pricing</button>
        <button>Contact</button>
        <button>About</button>
      </div>
      <div className="footer-copy">© 2025 Design My Backyard. All rights reserved.</div>
    </footer>
  );
}
