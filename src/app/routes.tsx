import { createBrowserRouter } from "react-router-dom";

import { Root } from "./components/Root";

import { Home } from "./components/pages/Home";
import Products from "./components/pages/Products";

/*import { Pricing } from "./components/pages/Pricing";*/

import { FAQ } from "./components/pages/FAQ";
import { Contact } from "./components/pages/Contact";
import { About } from "./components/pages/About";
import { Blog } from "./components/pages/Blog";
import { NotFound } from "./components/pages/NotFound";
import StudioPod from "./components/pages/products/StudioPod";
import GrannyFlats from "./components/pages/products/grannyFlats";
import Booking from "./components/pages/bookings";

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
      { path: "products/studio", Component: StudioPod },
      { path: "products/granny", Component: GrannyFlats },
      { path: "booking", Component: Booking },
      { path: "products/StudioProduct1", Component: StudioProduct1 },
      { path: "products/StudioProduct2", Component: StudioProduct2 },
      { path: "products/StudioProduct3", Component: StudioProduct3 },
      { path: "products/StudioProduct4", Component: StudioProduct4 },
      { path: "products/StudioProduct5", Component: StudioProduct5 },
      
      { path: "products/GrannyflatProduct1", Component: GrannyflatProduct1 },
      { path: "products/GrannyflatProduct2", Component: GrannyflatProduct2 },
      { path: "products/GrannyflatProduct3", Component: GrannyflatProduct3 },
      { path: "products/GrannyflatProduct4", Component: GrannyflatProduct4 },
      { path: "products/GrannyflatProduct5", Component: GrannyflatProduct5 },

      { path: "*", Component: NotFound },
    ],
  },
]);