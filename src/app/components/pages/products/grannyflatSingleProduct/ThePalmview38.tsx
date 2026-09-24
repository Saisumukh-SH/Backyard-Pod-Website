import SingleGrannyFlatPage from "../singleGrannyflatPage";
import RelatedProducts from "../../../RelatedProducts";
import DesignInspiration from "../DesignInspiration";
import React from "react";

export default function ThePalmview38() {
  const finishes = [
    {
      id: "default",
      name: "Classic",
      subtitle: "Natural timber accents with a timeless Australian character",
      color: "#FCEFD6",
      image: "/images/grannyflat/palmview/palmview_38/palmview_38_2.webp",
    },
    {
      id: "charcoal",
      name: "Charcoal Cedar",
      subtitle: "Deep contemporary cladding for a refined architectural finish",
      color: "#2B2B2B",
      image: "/images/grannyflat/palmview/palmview_38/palmview_38_2.webp",
    },
    {
      id: "timber",
      name: "Natural Timber",
      subtitle: "Warm timber accents for a sophisticated Australian look",
      color: "#C8A46B",
      image: "/images/grannyflat/palmview/palmview_38/palmview_38_2.webp",
    },
    {
      id: "navy",
      name: "Navy Blue",
      subtitle: "A distinctive contemporary exterior finish",
      color: "#6B7280",
      image: "/images/grannyflat/palmview/palmview_38/palmview_38_2.webp",
    },
    {
      id: "sage",
      name: "Sage White",
      subtitle: "A soft neutral finish for a light contemporary exterior",
      color: "#E5E5E5",
      image: "/images/grannyflat/palmview/palmview_38/palmview_38_2.webp",
    },
  ];

  const galleryImages = [
    {
      main: "/images/grannyflat/palmview/palmview_38/palmview_38_1.webp",
      thumb: "/images/grannyflat/palmview/palmview_38/palmview_38_1.webp",
      label: "Exterior",
    },
    {
      main: "/images/grannyflat/palmview/palmview_38/palmview_38_int.webp",
      thumb: "/images/grannyflat/palmview/palmview_38/palmview_38_int.webp",
      label: "Interior",
    },
    {
      main: "/images/grannyflat/palmview/palmview_38/palmview_38_floorplan.webp",
      thumb: "/images/grannyflat/palmview/palmview_38/palmview_38_floorplan.webp",
      label: "Floor Plan",
    },
  ];

  return (
    <SingleGrannyFlatPage
      category="Granny Flat"
      title="The Palmview"
      highlight="38"
      size="38 m²"
      beds="—"
      baths="—"
      warranty="10 Year"
      description="The Palmview 38 is a thoughtfully designed 38m² backyard home that brings together modern comfort, smart design and effortless indoor-outdoor living. Generous glazing, an open and welcoming interior, a dedicated bedroom, practical living spaces and a private outdoor deck make every square metre count."
      heroImage="/images/grannyflat/palmview/palmview_38/palmview_38_2.webp"
      mobileHeroImage="/images/grannyflat/palmview/palmview_38/palmview_38_mobile.webp"
      floorplan="/images/grannyflat/palmview/palmview_38/palmview_38_floorplan.webp"
      seoTitle="The Palmview 38m² | Backyard Home Melbourne"
      seoDescription="Explore The Palmview 38m² by Backyard Nest, a contemporary backyard home designed around modern comfort, smart use of space and indoor-outdoor living."
      seoUrl="https://backyardnest.com.au/products/ThePalmview38"
      seoImage="/images/grannyflat/palmview/palmview_38/palmview_38_2.webp"
      finishes={finishes}
      galleryImages={galleryImages}
      relatedProducts={
        <RelatedProducts currentId="palmview-38" />
      }
      designInspiration={
        <DesignInspiration
          title={
            <>
              Designed For
              <br />
              Modern Australian
              <br />
              Living.
            </>
          }
          subtitle="The Palmview 38 | Contemporary Australian Backyard Home"
          intro="Small in footprint. Big on possibilities."
          paragraphs={[
            "The Palmview 38 is a contemporary Australian backyard home designed around the way Australians want to live today.",
            "Its compact 38m² footprint makes every square metre count while maintaining a comfortable and welcoming living environment.",
            "Generous glazing, an open interior, a dedicated bedroom, practical living spaces and a private outdoor deck create a strong connection between the home and backyard.",
            "The Palmview 38 can provide a flexible backyard solution for family living, guests, a private retreat or additional accommodation.",
          ]}
          features={[
            "38m² configuration",
            "Contemporary Australian design",
            "Smart and efficient use of space",
            "Generous glazed openings",
            "Open and welcoming interior",
            "Dedicated bedroom",
            "Practical living spaces",
            "Private outdoor deck",
            "Warm timber accents",
            "Refined neutral facade",
            "Black-framed glazing",
            "Strong indoor-outdoor connection",
            "Suitable for guest accommodation",
            "Suitable for a home office",
            "Suitable for downsizer living",
          ]}
          outro="The Palmview 38 gives your backyard a whole new purpose, combining thoughtful design, practical living and a strong connection to the outdoors."
        />
      }
    />
  );
}