import { Link, useLocation } from 'react-router';
import '../styles/Nav.css';

export function Nav() {
  const location = useLocation();
  const isProducts = location.pathname === '/products' || location.pathname === '/';

  return (
    <nav className="nav">
      <Link to="/products" className="nav-logo">
        Design <span>|</span> MyBackyard.
      </Link>
      <ul className="nav-links">
        <li>
          <button
            className={isProducts ? 'active' : ''}
            onClick={() => (window.location.href = '/products')}
          >
            Home
          </button>
        </li>
        <li>
          <Link to="/products">
            <button className={isProducts ? 'active' : ''}>Products</button>
          </Link>
        </li>
        <li><button>Pricing &amp; FAQ</button></li>
        <li><button>Contact Us</button></li>
        <li><button>About Us</button></li>
        <li><button>Blog</button></li>
      </ul>
    </nav>
  );
}
