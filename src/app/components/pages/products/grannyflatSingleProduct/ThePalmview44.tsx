import SingleGrannyFlatPage from "../singleGrannyflatPage";
import RelatedGrannyFlatProducts from "../../../RelatedGrannyFlatProducts";
import DesignInspiration from "../DesignInspiration";
import React from "react";

export default function ThePalmview44() {
  const finishes = [
    {
      id: "default",
      name: "Classic",
      subtitle: "A refined neutral exterior with warm timber accents",
      color: "#FCEFD6",
      image:
        "/images/grannyflat/palmview/palmview_44/palmview_44_2.webp",
    },
    {
      id: "charcoal",
      name: "Charcoal Cedar",
      subtitle: "Deep contemporary cladding for a modern architectural finish",
      color: "#2B2B2B",
      image:
        "/images/grannyflat/palmview/palmview_44/palmview_44_2.webp",
    },
    {
      id: "timber",
      name: "Natural Timber",
      subtitle: "Warm timber tones for an organic Australian feel",
      color: "#C8A46B",
      image:
        "/images/grannyflat/palmview/palmview_44/palmview_44_2.webp",
    },
    {
      id: "navy",
      name: "Navy Blue",
      subtitle: "A refined contemporary exterior finish",
      color: "#6B7280",
      image:
        "/images/grannyflat/palmview/palmview_44/palmview_44_2.webp",
    },
    {
      id: "sage",
      name: "Sage White",
      subtitle: "A soft contemporary finish with a light character",
      color: "#E5E5E5",
      image:
        "/images/grannyflat/palmview/palmview_44/palmview_44_2.webp",
    },
  ];

  const galleryImages = [
    {
      main:
        "/images/grannyflat/palmview/palmview_44/palmview_44_1.webp",
      thumb:
        "/images/grannyflat/palmview/palmview_44/palmview_44_1.webp",
      label: "Exterior",
    },
    {
      main:
        "/images/grannyflat/palmview/palmview_44/palmview_44_int_1.webp",
      thumb:
        "/images/grannyflat/palmview/palmview_44/palmview_44_int_1.webp",
      label: "Interior",
    },
    {
      main:
        "/images/grannyflat/palmview/palmview_44/palmview_44_int_2.webp",
      thumb:
        "/images/grannyflat/palmview/palmview_44/palmview_44_int_2.webp",
      label: "Interior",
    },
    {
      main:
        "/images/grannyflat/palmview/palmview_44/palmview_44_floorplan.webp",
      thumb:
        "/images/grannyflat/palmview/palmview_44/palmview_44_floorplan.webp",
      label: "Floor Plan",
    },
  ];

  return (
    <SingleGrannyFlatPage
      category="Granny Flat"
      title="The Palmview"
      highlight="44"
      size="44 m²"
      beds="1"
      baths="1"
      warranty="10 Year"
      description="The Palmview 44 is a contemporary 44m² backyard studio and granny flat designed for modern Australian homes. Clean architectural lines, generous glazing, warm timber accents and a refined neutral facade bring together style, functionality and everyday comfort in a compact backyard solution."
      heroImage="/images/grannyflat/palmview/palmview_44/palmview_44_2.webp"
      mobileHeroImage="/images/grannyflat/palmview/palmview_44/palmview_44_mobile.webp"
      floorplan="/images/grannyflat/palmview/palmview_44/palmview_44_floorplan.webp"
      seoTitle="The Palmview 44m² | Contemporary Granny Flat Melbourne"
      seoDescription="Explore The Palmview 44m² by Backyard Nest, a contemporary backyard studio and granny flat combining clean architectural lines, generous glazing, warm timber accents and everyday comfort."
      seoUrl="https://backyardnest.com.au/products/ThePalmview44"
      seoImage="/images/grannyflat/palmview/palmview_44/palmview_44_2.webp"
      finishes={finishes}
      galleryImages={galleryImages}
      relatedProducts={
        <RelatedGrannyFlatProducts currentId="palmview-44" />
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
          subtitle="The Palmview 44 | Contemporary Australian Granny Flat"
          intro="More space. Refined backyard living."
          paragraphs={[
            "The Palmview 44 is a contemporary backyard home designed for modern Australian homes, combining practical living with a refined architectural character.",
            "With a 44m² footprint, the design provides additional space while maintaining an efficient and compact backyard solution.",
            "Clean architectural lines, generous glazing and warm timber accents create a welcoming home filled with natural light.",
            "The Palmview 44 provides a flexible space that can be used for independent living, guest accommodation, a private retreat or additional backyard living.",
          ]}
          features={[
            "44m² configuration",
            "Contemporary Australian design",
            "One-bedroom layout",
            "Private bathroom",
            "Clean architectural lines",
            "Warm timber accents",
            "Generous glazing",
            "Abundant natural light",
            "Flexible living spaces",
            "Strong indoor-outdoor connection",
            "Modern backyard living",
            "Suitable for independent living",
            "Ideal for guest accommodation",
            "Designed for Melbourne and Victorian homes",
          ]}
          outro="The Palmview 44 brings together style, functionality and everyday comfort to create a refined backyard space for modern Australian living."
        />
      }
    />
  );
}