import { createBrowserRouter } from "react-router-dom";

import { Root } from "./components/Root";

import { Home } from "./components/pages/Home";
import Products from "./components/pages/Products";


/*import { Pricing } from "./components/pages/Pricing";*/

import { FAQ } from "./components/pages/FAQ";
import { Contact } from "./components/pages/Contact";
import { About } from "./components/pages/About";
import { Blog } from "./components/pages/Blog";
import { BlogPost } from "./components/pages/BlogPost";
import { NotFound } from "./components/pages/NotFound";
import StudioPod from "./components/pages/products/StudioPod";
import GrannyFlats from "./components/pages/products/grannyFlats";
import GrannyFlatSizeSelection from "./components/pages/GrannyFlatSizeSelection";
import Booking from "./components/pages/bookings";
import ComingSoon from "./components/pages/ComingSoon";


import StudioProduct1 from "./components/pages/products/studioSingleProducts/StudioProduct1";
import StudioProduct2 from "./components/pages/products/studioSingleProducts/StudioProduct2";
import StudioProduct3 from "./components/pages/products/studioSingleProducts/StudioProduct3";
import StudioProduct4 from "./components/pages/products/studioSingleProducts/StudioProduct4";
import StudioProduct5 from "./components/pages/products/studioSingleProducts/StudioProduct5";

import GrannyflatProduct1 from "./components/pages/products/grannyflatSingleProduct/GrannyflatProduct1";
import GrannyflatProduct2 from "./components/pages/products/grannyflatSingleProduct/GrannyflatProduct2";
import GrannyflatProduct3 from "./components/pages/products/grannyflatSingleProduct/GrannyflatProduct3";
import GrannyflatProduct4 from "./components/pages/products/grannyflatSingleProduct/GrannyflatProduct4";
import GrannyflatProduct5 from "./components/pages/products/grannyflatSingleProduct/GrannyflatProduct5";
import ThankyouPage from "./components/pages/ThankyouPage";
import LandingPage from "./components/pages/landingPage";
import PrivacyPolicy from "./components/pages/privacyPolicy";
import Projects from "./components/pages/Projects";
import TheYarra38 from "./components/pages/products/grannyflatSingleProduct/TheYarra38";
import ThePalmview38 from "./components/pages/products/grannyflatSingleProduct/ThePalmview38";
import TheYarra44 from "./components/pages/products/grannyflatSingleProduct/TheYarra44";
import ThePalmview44 from "./components/pages/products/grannyflatSingleProduct/ThePalmview44";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },

      { path: "products", Component: Products },

      /*{ path: "pricing", Component: Pricing },*/
      
      { path: "faq", Component: FAQ },
      { path: "contact", Component: Contact },
      { path: "about", Component: About },
      { path: "blog", Component: Blog },
      { path: "blog/:slug", Component: BlogPost },
      { path: "products/studio", Component: StudioPod },
      { path: "products/granny", Component: GrannyFlats },
      {
  path: "products/granny/select-size/:model",
  Component: GrannyFlatSizeSelection,
},
      { path: "booking", Component: Booking },
      { path: "thank-you", Component: ThankyouPage },
      { path: "coming-soon", Component: ComingSoon },
      { path: "landingPage", Component: LandingPage },
      { path: "landingpage", Component: LandingPage },
      { path: "privacy-policy", Component: PrivacyPolicy },
      { path: "projects", Component: Projects },
      

      
      { path: "products/TheVista", Component: StudioProduct1 },
      { path: "products/TheBrighton", Component: StudioProduct2 },
      { path: "products/TheAspen", Component: StudioProduct3 },
      { path: "products/TheNest", Component: StudioProduct4 },
      { path: "products/CustomDesign", Component: StudioProduct5 },
      
      { path: "products/TheWattle", Component: GrannyflatProduct1 },
      { path: "products/TheYarra38", Component: TheYarra38 },
{ path: "products/TheYarra44", Component: TheYarra44 },
{ path: "products/ThePalmview38", Component: ThePalmview38 },
{ path: "products/ThePalmview44", Component: ThePalmview44 },
      { path: "products/TheHaven", Component: GrannyflatProduct4 },
      { path: "products/BespokeDesign", Component: GrannyflatProduct5 },
      

      { path: "*", Component: NotFound },
    ],
  },
]);