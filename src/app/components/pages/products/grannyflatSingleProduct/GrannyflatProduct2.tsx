import SingleGrannyFlatPage from "../singleGrannyflatPage";
import RelatedProducts from "../../../RelatedProducts";
import DesignInspiration from "../DesignInspiration";
import React from "react";

export default function TheYarra() {
  const finishes = [
    {
      id: "default",
      name: "Classic",
      subtitle: "Natural timber accents with a timeless Australian character",
      color: "#FCEFD6",
      image: "/images/grannyflat/yarra/yarra_44_1.webp",
    },
    {
      id: "charcoal",
      name: "Charcoal Cedar",
      subtitle: "Deep contemporary cladding for a modern architectural finish",
      color: "#2B2B2B",
      image: "/images/grannyflat/yarra/yarra_44_1.webp",
    },
    {
      id: "timber",
      name: "Natural Timber",
      subtitle: "Warm timber tones for an organic Australian feel",
      color: "#C8A46B",
      image: "/images/grannyflat/yarra/yarra_44_1.webp",
    },
    {
      id: "navy",
      name: "Navy Blue",
      subtitle: "A refined contemporary exterior finish",
      color: "#6B7280",
      image: "/images/grannyflat/yarra/yarra_44_1.webp",
    },
    {
      id: "sage",
      name: "Sage White",
      subtitle: "A soft contemporary finish with a light character",
      color: "#E5E5E5",
      image: "/images/grannyflat/yarra/yarra_44_1.webp",
    },
  ];

  const sizeVariants = [
    {
      highlight: "38",
      size: "38 m²",

      heroImage:
        "/images/grannyflat/yara/yarra_38/yarra_38_2.webp",

      mobileHeroImage:
        "/images/grannyflat/yara/yarra_38/yarra_38_mobile.webp",

      floorplan:
        "/images/grannyflat/yara/yarra_38/yarra_38_floorplan.webp",

      description:
        "The Yarra 38 is a thoughtfully designed one-bedroom granny flat that makes the most of a compact footprint. With generous glazing, natural light and a strong connection to the backyard, it provides a comfortable and flexible space for modern Australian living.",

      footprint: "7 × 5.5 m",

      height: "2.7 m",

      glazing: "Generous glazed openings",

      capacity: "1–2",

      galleryImages: [
        {
          main:
            "/images/grannyflat/yara/yarra_38/yarra_38_1.webp",
          thumb:
            "/images/grannyflat/yara/yarra_38/yarra_38_1.webp",
          label: "Exterior",
        },
        {
          main:
            "/images/grannyflat/yara/yarra_38/yarra_38_int.webp",
          thumb:
            "/images/grannyflat/yara/yarra_38/yarra_38_int.webp",
          label: "Interior",
        },
        {
          main:
            "/images/grannyflat/yara/yarra_38/yarra_38_floorplan.webp",
          thumb:
            "/images/grannyflat/yara/yarra_38/yarra_38_floorplan.webp",
          label: "Floor Plan",
        },
      ],
    },

    {
      highlight: "44",
      size: "44 m²",

      heroImage:
        "/images/grannyflat/yara/yarra_44/yarra_44_1.webp",

      mobileHeroImage:
        "/images/grannyflat/yara/yarra_44/yarra_44_mobile.webp",

      floorplan:
        "/images/grannyflat/yara/yarra_44/yarra_44_floorplan.webp",

      description:
        "The Yarra 44 provides additional space for comfortable everyday living while maintaining the clean architectural lines, natural timber accents and generous glazing that define the design.",

      footprint: "7 × 6.5 m",

      height: "2.7 m",

      glazing: "Generous glazed openings",

      capacity: "1–2",

      galleryImages: [
        {
          main:
            "/images/grannyflat/yara/yarra_44/yarra_44_1.webp",
          thumb:
            "/images/grannyflat/yara/yarra_44/yarra_44_1.webp",
          label: "Exterior",
        },
        {
          main:
            "/images/grannyflat/yara/yarra_44/yarra_44_int_1.webp",
          thumb:
            "/images/grannyflat/yara/yarra_44/yarra_44_int_1.webp",
          label: "Interior",
        },
        {
          main:
            "/images/grannyflat/yara/yarra_44/yarra_44_int_2.webp",
          thumb:
            "/images/grannyflat/yara/yarra_44/yarra_44_int_2.webp",
          label: "Interior",
        },
        {
          main:
            "/images/grannyflat/yara/yarra_44/yarra_44_floorplan.webp",
          thumb:
            "/images/grannyflat/yara/yarra_44/yarra_44_floorplan.webp",
          label: "Floor Plan",
        },
      ],
    },
  ];

  return (
    <SingleGrannyFlatPage
      category="Granny Flat"
      title="The Yarra"

      /*
       * Default variant
       * The page will start on 44m².
       */
    highlight={sizeVariants[1].size.replace(" m²", "")}
      size="44 m²"

      beds="1"
      baths="1"
      warranty="10 Year"

      description={sizeVariants[1].description}

      heroImage={sizeVariants[1].heroImage}

      mobileHeroImage={sizeVariants[1].mobileHeroImage}

      floorplan={sizeVariants[1].floorplan}

      seoTitle="The Yarra | Contemporary Granny Flat Melbourne"

      seoDescription="Explore The Yarra by Backyard Nest, a contemporary granny flat available in 38m² and 44m² configurations, designed for modern Australian living."

      seoUrl="https://backyardnest.com.au/products/TheYarra"

      seoImage={sizeVariants[1].heroImage}

      finishes={finishes}

      galleryImages={sizeVariants[1].galleryImages}

      sizeVariants={sizeVariants}

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

          subtitle="The Yarra | Contemporary Australian Granny Flat"

          intro="More space for the way you live."

          paragraphs={[
            "The Yarra is a contemporary Australian granny flat designed for homeowners looking to create more usable space in their backyard.",

            "Available in 38m² and 44m² configurations, The Yarra provides flexibility for different backyard requirements while maintaining its clean architectural character.",

            "Clean architectural lines, natural timber accents and generous glazing create a light-filled living environment with a strong connection to the outdoors.",

            "Whether used for independent living, guest accommodation, a private retreat or additional backyard living, The Yarra is designed to adapt to modern Australian lifestyles.",
          ]}

          features={[
            "Available in 38m² and 44m² configurations",
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

          outro="The Yarra transforms an underused backyard into a beautiful and functional space to live, welcome, work and unwind."
        />
      }
    />
  );
}