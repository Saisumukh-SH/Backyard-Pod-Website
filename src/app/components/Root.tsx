import { Outlet, useLocation } from "react-router-dom";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";

export function Root() {
  const location = useLocation();

  return (
    <>
      <Navigation />

      <Outlet />

      {/* Hide footer on home page */}
      {location.pathname !== "/" && <Footer />}
    </>
  );
}