import SingleGrannyFlatPage from "../singleGrannyflatPage";
import RelatedProducts from "../../../RelatedProducts";
import DesignInspiration from "../DesignInspiration";
import React from "react";

export default function TheYarra38() {
  const finishes = [
    {
      id: "default",
      name: "Classic",
      subtitle: "Natural timber accents with a timeless Australian character",
      color: "#FCEFD6",
      image: "/images/grannyflat/yara/yarra_38/yarra_38_2.webp",
    },
    {
      id: "charcoal",
      name: "Charcoal Cedar",
      subtitle: "Deep contemporary cladding for a modern architectural finish",
      color: "#2B2B2B",
      image: "/images/grannyflat/yara/yarra_38/yarra_38_2.webp",
    },
    {
      id: "timber",
      name: "Natural Timber",
      subtitle: "Warm timber tones for an organic Australian feel",
      color: "#C8A46B",
      image: "/images/grannyflat/yara/yarra_38/yarra_38_2.webp",
    },
    {
      id: "navy",
      name: "Navy Blue",
      subtitle: "A refined contemporary exterior finish",
      color: "#6B7280",
      image: "/images/grannyflat/yara/yarra_38/yarra_38_2.webp",
    },
    {
      id: "sage",
      name: "Sage White",
      subtitle: "A soft contemporary finish with a light character",
      color: "#E5E5E5",
      image: "/images/grannyflat/yara/yarra_38/yarra_38_2.webp",
    },
  ];

  const galleryImages = [
    {
      main: "/images/grannyflat/yara/yarra_38/yarra_38_1.webp",
      thumb: "/images/grannyflat/yara/yarra_38/yarra_38_1.webp",
      label: "Exterior",
    },
    {
      main: "/images/grannyflat/yara/yarra_38/yarra_38_int.webp",
      thumb: "/images/grannyflat/yara/yarra_38/yarra_38_int.webp",
      label: "Interior",
    },
    {
      main: "/images/grannyflat/yara/yarra_38/yarra_38_floorplan.webp",
      thumb: "/images/grannyflat/yara/yarra_38/yarra_38_floorplan.webp",
      label: "Floor Plan",
    },
  ];

  return (
    <SingleGrannyFlatPage
      category="Granny Flat"
      title="The Yarra"
      highlight="38"
      size="38 m²"
      beds="1"
      baths="1"
      warranty="10 Year"
      description="The Yarra 38 is a thoughtfully designed one-bedroom granny flat that makes the most of a compact footprint. With generous glazing, natural light and a strong connection to the backyard, it provides a comfortable and flexible space for modern Australian living."
      heroImage="/images/grannyflat/yara/yarra_38/yarra_38_2.webp"
      mobileHeroImage="/images/grannyflat/yara/yarra_38/yarra_38_mobile.webp"
      floorplan="/images/grannyflat/yara/yarra_38/yarra_38_floorplan.webp"
      seoTitle="The Yarra 38m² | Contemporary Granny Flat Melbourne"
      seoDescription="Explore The Yarra 38m² by Backyard Nest, a thoughtfully designed one-bedroom granny flat with generous glazing, natural light and a strong connection to the backyard."
      seoUrl="https://backyardnest.com.au/products/TheYarra38"
      seoImage="/images/grannyflat/yara/yarra_38/yarra_38_2.webp"
      finishes={finishes}
      galleryImages={galleryImages}
      relatedProducts={
        <RelatedProducts currentId="yarra-38" />
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
          subtitle="The Yarra 38 | Contemporary Australian Granny Flat"
          intro="Compact by design. Comfortable by nature."
          paragraphs={[
            "The Yarra 38 is a contemporary Australian granny flat designed for homeowners looking to create more usable space in their backyard.",
            "With a compact 38m² footprint, The Yarra makes efficient use of space while maintaining a comfortable and welcoming living environment.",
            "Generous glazing, natural light and a strong connection to the backyard create a light-filled space for modern Australian living.",
            "Whether used for independent living, guest accommodation, a private retreat or additional backyard living, The Yarra 38 is designed to adapt to modern Australian lifestyles.",
          ]}
          features={[
            "38m² configuration",
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
          outro="The Yarra 38 transforms an underused backyard into a beautiful and functional space to live, welcome, work and unwind."
        />
      }
    />
  );
}