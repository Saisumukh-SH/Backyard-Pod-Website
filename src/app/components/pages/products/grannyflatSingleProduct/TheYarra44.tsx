import SingleGrannyFlatPage from "../singleGrannyflatPage";
import RelatedProducts from "../../../RelatedProducts";
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
      seoDescription="Explore The Yarra 44m² by Backyard Nest, a contemporary granny flat designed for comfortable everyday living with generous glazing and natural timber accents."
      seoUrl="https://backyardnest.com.au/products/TheYarra44"
      seoImage="/images/grannyflat/yara/yarra_44/yarra_44_1.webp"
      finishes={finishes}
      galleryImages={galleryImages}
      relatedProducts={
        <RelatedProducts currentId="yarra-44" />
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
          intro="More space for the way you live."
          paragraphs={[
            "The Yarra 44 is a contemporary Australian granny flat designed for homeowners looking to create more usable space in their backyard.",
            "The 44m² configuration provides additional room for comfortable everyday living while maintaining the clean architectural character of The Yarra.",
            "Clean architectural lines, natural timber accents and generous glazing create a light-filled living environment with a strong connection to the outdoors.",
            "Whether used for independent living, guest accommodation, a private retreat or additional backyard living, The Yarra 44 is designed to adapt to modern Australian lifestyles.",
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
            "Suitable for independent living",
            "Ideal for guest accommodation",
            "Designed for Melbourne and Victorian homes",
          ]}
          outro="The Yarra 44 transforms an underused backyard into a beautiful and functional space to live, welcome, work and unwind."
        />
      }
    />
  );
}