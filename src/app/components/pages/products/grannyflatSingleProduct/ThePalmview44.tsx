import SingleGrannyFlatPage from "../singleGrannyflatPage";
import RelatedProducts from "../../../RelatedProducts";
import DesignInspiration from "../DesignInspiration";
import React from "react";

export default function ThePalmview44() {
  const finishes = [
    {
      id: "default",
      name: "Classic",
      subtitle: "Natural timber accents with a timeless Australian character",
      color: "#FCEFD6",
      image: "/images/grannyflat/palmview/palmview_44/palmview_44_2.webp",
    },
    {
      id: "charcoal",
      name: "Charcoal Cedar",
      subtitle: "Deep contemporary cladding for a refined architectural finish",
      color: "#2B2B2B",
      image: "/images/grannyflat/palmview/palmview_44/palmview_44_2.webp",
    },
    {
      id: "timber",
      name: "Natural Timber",
      subtitle: "Warm timber accents for a sophisticated Australian look",
      color: "#C8A46B",
      image: "/images/grannyflat/palmview/palmview_44/palmview_44_2.webp",
    },
    {
      id: "navy",
      name: "Navy Blue",
      subtitle: "A distinctive contemporary exterior finish",
      color: "#6B7280",
      image: "/images/grannyflat/palmview/palmview_44/palmview_44_2.webp",
    },
    {
      id: "sage",
      name: "Sage White",
      subtitle: "A soft neutral finish for a light contemporary exterior",
      color: "#E5E5E5",
      image: "/images/grannyflat/palmview/palmview_44/palmview_44_2.webp",
    },
  ];

  const galleryImages = [
    {
      main: "/images/grannyflat/palmview/palmview_44/palmview_44_1.webp",
      thumb: "/images/grannyflat/palmview/palmview_44/palmview_44_1.webp",
      label: "Exterior",
    },
    {
      main: "/images/grannyflat/palmview/palmview_44/palmview_44_int_1.webp",
      thumb: "/images/grannyflat/palmview/palmview_44/palmview_44_int_1.webp",
      label: "Interior",
    },
    {
      main: "/images/grannyflat/palmview/palmview_44/palmview_44_int_2.webp",
      thumb: "/images/grannyflat/palmview/palmview_44/palmview_44_int_2.webp",
      label: "Interior",
    },
    {
      main: "/images/grannyflat/palmview/palmview_44/palmview_44_floorplan.webp",
      thumb: "/images/grannyflat/palmview/palmview_44/palmview_44_floorplan.webp",
      label: "Floor Plan",
    },
  ];

  return (
    <SingleGrannyFlatPage
      category="Granny Flat"
      title="The Palmview"
      highlight="44"
      size="44 m²"
      beds="—"
      baths="—"
      warranty="10 Year"
      description="The Palmview 44 is a contemporary 44m² backyard studio and granny flat designed for modern Australian homes. Clean architectural lines, generous glazing, warm timber accents and a refined neutral facade bring together style, functionality and everyday comfort in a compact backyard solution."
      heroImage="/images/grannyflat/palmview/palmview_44/palmview_44_2.webp"
      mobileHeroImage="/images/grannyflat/palmview/palmview_44/palmview_44_mobile.webp"
      floorplan="/images/grannyflat/palmview/palmview_44/palmview_44_floorplan.webp"
      seoTitle="The Palmview 44m² | Contemporary Granny Flat Melbourne"
      seoDescription="Explore The Palmview 44m² by Backyard Nest, a contemporary backyard home designed for modern Australian living and indoor-outdoor connection."
      seoUrl="https://backyardnest.com.au/products/ThePalmview44"
      seoImage="/images/grannyflat/palmview/palmview_44/palmview_44_2.webp"
      finishes={finishes}
      galleryImages={galleryImages}
      relatedProducts={
        <RelatedProducts currentId="palmview-44" />
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
          subtitle="The Palmview 44 | Contemporary Australian Backyard Home"
          intro="More space. More possibilities."
          paragraphs={[
            "The Palmview 44 is a contemporary Australian backyard home designed around the way Australians want to live today.",
            "The 44m² configuration provides additional space while maintaining the same contemporary architectural approach.",
            "Clean architectural lines, large windows, warm timber accents and a refined neutral facade create a sophisticated Australian look.",
            "The Palmview 44 provides a flexible backyard solution for family living, guests, a private retreat, a home office or additional accommodation.",
            "Large glazed openings create a strong visual connection between the living areas and the garden, deck, entertaining area or swimming pool.",
          ]}
          features={[
            "44m² configuration",
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
            "Rental accommodation potential",
          ]}
          outro="The Palmview 44 gives your backyard a whole new purpose, combining thoughtful design, practical living and a strong connection to the outdoors."
        />
      }
    />
  );
}