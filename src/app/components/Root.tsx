import { Outlet, useLocation } from "react-router-dom";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import ScrollToTop from "./pages/ScrollToTop";

export function Root() {
  const location = useLocation();

  return (
    <>
    <ScrollToTop />
      <Navigation />

      <Outlet />

      {/* Hide footer on home page */}
      {location.pathname !== "/" && <Footer />}
    </>
  );
}