import { createBrowserRouter } from "react-router-dom";

import { Root } from "./components/Root";

import { Home } from "./components/pages/Home";
import  Products  from "./components/pages/products/Products";

import { StudioPod } from "./components/pages/products/StudioPod";
import { OneBedroomFlat } from "./components/pages/products/OneBedroomFlat";
import { TwoBedroomFlat } from "./components/pages/products/TwoBedroomFlat";
import { CustomDesign } from "./components/pages/products/CustomDesign";

import { Pricing } from "./components/pages/Pricing";
import { FAQ } from "./components/pages/FAQ";
import { Contact } from "./components/pages/Contact";
import { About } from "./components/pages/About";
import { Blog } from "./components/pages/Blog";
import { NotFound } from "./components/pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },

      { path: "products", Component: Products },
      { path: "products/studio-pod", Component: StudioPod },
      { path: "products/one-bedroom-flat", Component: OneBedroomFlat },
      { path: "products/two-bedroom-flat", Component: TwoBedroomFlat },
      { path: "products/custom-design", Component: CustomDesign },

      { path: "pricing", Component: Pricing },
      { path: "faq", Component: FAQ },
      { path: "contact", Component: Contact },
      { path: "about", Component: About },
      { path: "blog", Component: Blog },

      { path: "*", Component: NotFound },
    ],
  },
]);
