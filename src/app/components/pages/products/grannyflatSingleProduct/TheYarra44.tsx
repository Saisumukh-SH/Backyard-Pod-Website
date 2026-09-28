import SingleGrannyFlatPage from "../singleGrannyflatPage";
import RelatedGrannyFlatProducts from "../../../RelatedGrannyFlatProducts";
import DesignInspiration from "../DesignInspiration";
import React from "react";

export default function TheYarra44() {
  const finishes = [
    {
      id: "default",
      name: "Classic",
      subtitle: "Natural timber accents with a timeless Australian character",
      color: "#FCEFD6",
      image: "/images/grannyflat/yara/yarra_44/yarra_44_1.webp",
    },
    {
      id: "charcoal",
      name: "Charcoal Cedar",
      subtitle: "Deep contemporary cladding for a modern architectural finish",
      color: "#2B2B2B",
      image: "/images/grannyflat/yara/yarra_44/yarra_44_1.webp",
    },
    {
      id: "timber",
      name: "Natural Timber",
      subtitle: "Warm timber tones for an organic Australian feel",
      color: "#C8A46B",
      image: "/images/grannyflat/yara/yarra_44/yarra_44_1.webp",
    },
    {
      id: "navy",
      name: "Navy Blue",
      subtitle: "A refined contemporary exterior finish",
      color: "#6B7280",
      image: "/images/grannyflat/yara/yarra_44/yarra_44_1.webp",
    },
    {
      id: "sage",
      name: "Sage White",
      subtitle: "A soft contemporary finish with a light character",
      color: "#E5E5E5",
      image: "/images/grannyflat/yara/yarra_44/yarra_44_1.webp",
    },
  ];

  const galleryImages = [
    {
      main: "/images/grannyflat/yara/yarra_44/yarra_44_1.webp",
      thumb: "/images/grannyflat/yara/yarra_44/yarra_44_1.webp",
      label: "Exterior",
    },
    {
      main: "/images/grannyflat/yara/yarra_44/yarra_44_int_1.webp",
      thumb: "/images/grannyflat/yara/yarra_44/yarra_44_int_1.webp",
      label: "Interior",
    },
    {
      main: "/images/grannyflat/yara/yarra_44/yarra_44_int_2.webp",
      thumb: "/images/grannyflat/yara/yarra_44/yarra_44_int_2.webp",
      label: "Interior",
    },
    {
      main: "/images/grannyflat/yara/yarra_44/yarra_44_floorplan.webp",
      thumb: "/images/grannyflat/yara/yarra_44/yarra_44_floorplan.webp",
      label: "Floor Plan",
    },
  ];

  return (
    <SingleGrannyFlatPage
      category="Granny Flat"
      title="The Yarra"
      highlight="44"
      size="44 m²"
      beds="1"
      baths="1"
      warranty="10 Year"
      description="The Yarra 44 provides additional space for comfortable everyday living while maintaining the clean architectural lines, natural timber accents and generous glazing that define the design."
      heroImage="/images/grannyflat/yara/yarra_44/yarra_44_1.webp"
      mobileHeroImage="/images/grannyflat/yara/yarra_44/yarra_44_mobile.webp"
      floorplan="/images/grannyflat/yara/yarra_44/yarra_44_floorplan.webp"
      seoTitle="The Yarra 44m² | Contemporary Granny Flat Melbourne"
      seoDescription="Explore The Yarra 44m² by Backyard Nest, a contemporary one-bedroom granny flat offering additional living space, generous glazing, natural timber accents and a strong connection to the backyard."
      seoUrl="https://backyardnest.com.au/products/TheYarra44"
      seoImage="/images/grannyflat/yara/yarra_44/yarra_44_1.webp"
      finishes={finishes}
      galleryImages={galleryImages}
      relatedProducts={
        <RelatedGrannyFlatProducts currentId="yarra-44" />
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
          subtitle="The Yarra 44 | Contemporary Australian Granny Flat"
          intro="More space. Same considered design."
          paragraphs={[
            "The Yarra 44 is a contemporary Australian granny flat designed to provide comfortable additional space while maintaining a compact backyard footprint.",
            "With 44m² of thoughtfully planned living space, The Yarra provides room for everyday living without compromising on the clean architectural character of the design.",
            "Generous glazing, natural light and warm timber accents create a welcoming interior with a strong connection to the surrounding backyard.",
            "Whether used for independent living, guest accommodation, a private retreat or additional backyard living, The Yarra 44 is designed to support modern Australian lifestyles.",
          ]}
          features={[
            "44m² configuration",
            "Contemporary Australian design",
            "One-bedroom layout",
            "Private bathroom",
            "Natural timber accents",
            "Generous glazing",
            "Abundant natural light",
            "Energy-efficient design",
            "Flexible living spaces",
            "Strong indoor-outdoor connection",
            "Comfortable everyday living",
            "Suitable for independent living",
            "Ideal for guest accommodation",
            "Designed for Melbourne and Victorian homes",
          ]}
          outro="The Yarra 44 creates a refined and functional backyard space designed for modern living, relaxing and welcoming guests."
        />
      }
    />
  );
}