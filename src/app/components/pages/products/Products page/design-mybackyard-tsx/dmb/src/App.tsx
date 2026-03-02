import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import { Nav } from './components/Nav';
import { Products } from './pages/Products';
import { ProductDetail } from './pages/ProductDetail';
import './styles/global.css';

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Navigate to="/products" replace />} />
        <Route path="/products" element={<Products />} />
        {/* All product slugs render the same detail page.
            Swap ProductDetail for per-slug components as needed. */}
        <Route path="/products/:slug" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
