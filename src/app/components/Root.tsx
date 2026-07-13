import { Outlet, useLocation } from "react-router-dom";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import ScrollToTop from "./pages/ScrollToTop";

export function Root() {
  const location = useLocation();

  const isLandingPage =
    location.pathname === "/landingPage" ||
    location.pathname === "/landingpage";

  return (
    <>
      <ScrollToTop />

      {!isLandingPage && <Navigation />}

      <Outlet />
      <Footer />
    </>
  );
}