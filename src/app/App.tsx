import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";

import { Home } from "./components/pages/Home";
import Products from "./components/pages/Products";
import StudioCategory from "./components/pages/products/StudioPod";
import GrannyFlats from "./components/pages/products/grannyFlats";
import Booking from "./components/pages/bookings";

function AppContent() {

  const location = useLocation();

  return (
    <>
      {/* NAVBAR */}
      <Navigation />

      {/* ROUTES */}
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/products" element={<Products />} />

        <Route path="/products/studios" element={<StudioCategory />} />

        <Route path="/products/grannyflats" element={<GrannyFlats />} />

        <Route path="/booking" element={<Booking />} />

      </Routes>

      {/* UNIVERSAL FOOTER — hidden on Home */}
      {location.pathname !== "/" && <Footer />}

    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}