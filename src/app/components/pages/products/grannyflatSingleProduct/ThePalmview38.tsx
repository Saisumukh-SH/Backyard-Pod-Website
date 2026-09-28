import SingleGrannyFlatPage from "../singleGrannyflatPage";
import RelatedGrannyFlatProducts from "../../../RelatedGrannyFlatProducts";
import DesignInspiration from "../DesignInspiration";
import React from "react";

export default function ThePalmview38() {
  const finishes = [
    {
      id: "default",
      name: "Classic",
      subtitle: "A refined neutral exterior with warm timber accents",
      color: "#FCEFD6",
      image:
        "/images/grannyflat/palmview/palmview_38/palmview_38_2.webp",
    },
    {
      id: "charcoal",
      name: "Charcoal Cedar",
      subtitle: "Deep contemporary cladding for a modern architectural finish",
      color: "#2B2B2B",
      image:
        "/images/grannyflat/palmview/palmview_38/palmview_38_2.webp",
    },
    {
      id: "timber",
      name: "Natural Timber",
      subtitle: "Warm timber tones for an organic Australian feel",
      color: "#C8A46B",
      image:
        "/images/grannyflat/palmview/palmview_38/palmview_38_2.webp",
    },
    {
      id: "navy",
      name: "Navy Blue",
      subtitle: "A refined contemporary exterior finish",
      color: "#6B7280",
      image:
        "/images/grannyflat/palmview/palmview_38/palmview_38_2.webp",
    },
    {
      id: "sage",
      name: "Sage White",
      subtitle: "A soft contemporary finish with a light character",
      color: "#E5E5E5",
      image:
        "/images/grannyflat/palmview/palmview_38/palmview_38_2.webp",
    },
  ];

  const galleryImages = [
    {
      main:
        "/images/grannyflat/palmview/palmview_38/palmview_38_1.webp",
      thumb:
        "/images/grannyflat/palmview/palmview_38/palmview_38_1.webp",
      label: "Exterior",
    },
    {
      main:
        "/images/grannyflat/palmview/palmview_38/palmview_38_int.webp",
      thumb:
        "/images/grannyflat/palmview/palmview_38/palmview_38_int.webp",
      label: "Interior",
    },
    {
      main:
        "/images/grannyflat/palmview/palmview_38/palmview_38_floorplan.webp",
      thumb:
        "/images/grannyflat/palmview/palmview_38/palmview_38_floorplan.webp",
      label: "Floor Plan",
    },
  ];

  return (
    <SingleGrannyFlatPage
      category="Granny Flat"
      title="The Palmview"
      highlight="38"
      size="38 m²"
      beds="1"
      baths="1"
      warranty="10 Year"
      description="The Palmview 38 is a thoughtfully designed 38m² backyard home that brings together modern comfort, smart design and effortless indoor-outdoor living. Generous glazing, an open and welcoming interior, a dedicated bedroom, practical living spaces and a private outdoor deck make every square metre count."
      heroImage="/images/grannyflat/palmview/palmview_38/palmview_38_2.webp"
      mobileHeroImage="/images/grannyflat/palmview/palmview_38/palmview_38_mobile.webp"
      floorplan="/images/grannyflat/palmview/palmview_38/palmview_38_floorplan.webp"
      seoTitle="The Palmview 38m² | Contemporary Granny Flat Melbourne"
      seoDescription="Explore The Palmview 38m² by Backyard Nest, a thoughtfully designed backyard home combining modern comfort, smart design, generous glazing and effortless indoor-outdoor living."
      seoUrl="https://backyardnest.com.au/products/ThePalmview38"
      seoImage="/images/grannyflat/palmview/palmview_38/palmview_38_2.webp"
      finishes={finishes}
      galleryImages={galleryImages}
      relatedProducts={
        <RelatedGrannyFlatProducts currentId="palmview-38" />
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
          subtitle="The Palmview 38 | Contemporary Australian Granny Flat"
          intro="Compact living. Effortless connection."
          paragraphs={[
            "The Palmview 38 is a contemporary backyard home designed to make every square metre count.",
            "With a thoughtfully planned 38m² footprint, the design combines practical living spaces with a comfortable bedroom and private bathroom.",
            "Generous glazing brings natural light into the interior while creating a strong connection between the home and the surrounding backyard.",
            "A private outdoor deck extends the living space and provides an inviting area to relax, entertain or enjoy the outdoors.",
          ]}
          features={[
            "38m² configuration",
            "Contemporary Australian design",
            "One-bedroom layout",
            "Private bathroom",
            "Practical living spaces",
            "Generous glazing",
            "Abundant natural light",
            "Private outdoor deck",
            "Indoor-outdoor connection",
            "Efficient use of space",
            "Modern backyard living",
            "Suitable for independent living",
            "Ideal for guest accommodation",
            "Designed for Melbourne and Victorian homes",
          ]}
          outro="The Palmview 38 transforms a compact backyard footprint into a comfortable and functional space designed for modern Australian living."
        />
      }
    />
  );
}