import { createBrowserRouter } from "react-router-dom";

import { Root } from "./components/Root";

import { Home } from "./components/pages/Home";
import Products from "./components/pages/Products";

import { Pricing } from "./components/pages/Pricing";
import { FAQ } from "./components/pages/FAQ";
import { Contact } from "./components/pages/Contact";
import { About } from "./components/pages/About";
import { Blog } from "./components/pages/Blog";
import { NotFound } from "./components/pages/NotFound";
import StudioPod from "./components/pages/products/StudioPod";
import GrannyFlats from "./components/pages/products/grannyFlats";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },

      { path: "products", Component: Products },

      { path: "pricing", Component: Pricing },
      { path: "faq", Component: FAQ },
      { path: "contact", Component: Contact },
      { path: "about", Component: About },
      { path: "blog", Component: Blog },
      { path: "products/studio", Component: StudioPod },

      { path: "*", Component: NotFound },
    ],
  },
]);