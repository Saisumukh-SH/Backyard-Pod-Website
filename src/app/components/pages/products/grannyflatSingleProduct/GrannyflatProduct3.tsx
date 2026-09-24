import SingleGrannyFlatPage from "../singleGrannyflatPage";
import RelatedProducts from "../../../RelatedProducts";
import DesignInspiration from "../DesignInspiration";
import React from "react";

export default function ThePalmview() {
  const finishes = [
    {
      id: "default",
      name: "Classic",
      subtitle: "Natural timber accents with a timeless Australian character",
      color: "#FCEFD6",
      image: "/images/grannyflat/palmview/palmview_44_1.webp",
    },
    {
      id: "charcoal",
      name: "Charcoal Cedar",
      subtitle: "Deep contemporary cladding for a refined architectural finish",
      color: "#2B2B2B",
      image: "/images/grannyflat/palmview/palmview_44_1.webp",
    },
    {
      id: "timber",
      name: "Natural Timber",
      subtitle: "Warm timber accents for a sophisticated Australian look",
      color: "#C8A46B",
      image: "/images/grannyflat/palmview/palmview_44_1.webp",
    },
    {
      id: "navy",
      name: "Navy Blue",
      subtitle: "A distinctive contemporary exterior finish",
      color: "#6B7280",
      image: "/images/grannyflat/palmview/palmview_44_1.webp",
    },
    {
      id: "sage",
      name: "Sage White",
      subtitle: "A soft neutral finish for a light contemporary exterior",
      color: "#E5E5E5",
      image: "/images/grannyflat/palmview/palmview_44_1.webp",
    },
  ];

  /*
   * THE PALMVIEW SIZE VARIANTS
   *
   * 38m² and 44m² are variants of the same product.
   * The size selector in SingleGrannyFlatPage controls
   * the hero image, description, floor plan and gallery.
   */

  const sizeVariants = [
    {
      size: "38 m²",
      highlight: "38",

      heroImage:
        "/images/grannyflat/palmview/palmview_38/palmview_38_2.webp",

      mobileHeroImage:
        "/images/grannyflat/palmview/palmview_38/palmview_38_mobile.webp",

      floorplan:
        "/images/grannyflat/palmview/palmview_38/palmview_38_floorplan.webp",

      description:
        "The Palmview 38 is a thoughtfully designed 38m² backyard home that brings together modern comfort, smart design and effortless indoor-outdoor living. Generous glazing, an open and welcoming interior, a dedicated bedroom, practical living spaces and a private outdoor deck make every square metre count.",

      footprint: "Compact footprint",

      height: "—",

      glazing: "Large glazed openings",

      capacity: "—",

      galleryImages: [
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
      ],
    },

    {
      size: "44 m²",
      highlight: "44",

      heroImage:
        "/images/grannyflat/palmview/palmview_44/palmview_44_2.webp",

      mobileHeroImage:
        "/images/grannyflat/palmview_44/palmview_44_mobile.webp",

      floorplan:
        "/images/grannyflat/palmview/palmview_44/palmview_44_floorplan.webp",

      description:
        "The Palmview 44 is a contemporary 44m² backyard studio and granny flat designed for modern Australian homes. Clean architectural lines, generous glazing, warm timber accents and a refined neutral facade bring together style, functionality and everyday comfort in a compact backyard solution.",

      footprint: "Compact backyard footprint",

      height: "—",

      glazing: "Large glazed openings",

      capacity: "—",

      galleryImages: [
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
      ],
    },
  ];

  /*
   * GENERAL GALLERY
   *
   * The active size-specific galleries are supplied above.
   * These are fallback/general images.
   */

  const galleryImages = [
    {
      main:
        "/images/grannyflat/palmview_44/palmview_44_1.webp",
      thumb:
        "/images/grannyflat/palmview_44/palmview_44_1.webp",
      label: "Exterior",
    },
    {
      main:
        "/images/grannyflat/palmview_44/palmview_44_int_1.webp",
      thumb:
        "/images/grannyflat/palmview_44/palmview_44_int_1.webp",
      label: "Interior",
    },
    {
      main:
        "/images/grannyflat/palmview_44/palmview_44_int_2.webp",
      thumb:
        "/images/grannyflat/palmview_44/palmview_44_int_2.webp",
      label: "Interior",
    },
    {
      main:
        "/images/grannyflat/palmview_44/palmview_44_floorplan.webp",
      thumb:
        "/images/grannyflat/palmview_44/palmview_44_floorplan.webp",
      label: "Floor Plan",
    },
  ];

  /*
   * DEFAULT PAGE STATE
   *
   * Starts on the 44m² version.
   */

  const defaultVariant = sizeVariants[1];

  return (
    <SingleGrannyFlatPage
      category="Granny Flat"
      title="The Palmview"

      highlight={defaultVariant.highlight}

      description={defaultVariant.description}

      size={defaultVariant.size}

      beds="—"
      baths="—"

      warranty="10 Year"

      heroImage={defaultVariant.heroImage}

      floorplan={defaultVariant.floorplan}

      mobileHeroImage={defaultVariant.mobileHeroImage}

      seoTitle="The Palmview | 38m² & 44m² Granny Flat Melbourne"

      seoDescription="Explore The Palmview by Backyard Nest, a contemporary 38m² and 44m² backyard home designed for modern Australian living and indoor-outdoor connection."

      seoUrl="https://backyardnest.com.au/products/ThePalmview"

      seoImage={defaultVariant.heroImage}

      finishes={finishes}

      galleryImages={galleryImages}

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

          subtitle="The Palmview | 38m² & 44m² Backyard Home"

          intro="Small in footprint. Big on possibilities."

          paragraphs={[
            "The Palmview is a contemporary Australian backyard home designed around the way Australians want to live today. It brings together modern comfort, smart design and effortless indoor-outdoor living.",

            "The Palmview 38 makes every square metre count. Generous glazing, an open and welcoming interior, a dedicated bedroom, practical living spaces and a private outdoor deck create the feeling of a complete home within a compact footprint.",

            "The Palmview 44 provides additional space while maintaining the same contemporary architectural approach. Clean architectural lines, large windows, warm timber accents and a refined neutral facade create a sophisticated Australian look.",

            "Whether you are creating a comfortable home for family, a private space for guests, a home office, a downsizer retreat or exploring additional rental accommodation, The Palmview provides a flexible backyard solution.",

            "Large glazed openings create a strong visual connection between the living areas and the garden, deck, entertaining area or swimming pool, making The Palmview particularly suited to indoor-outdoor Australian living.",
          ]}

          features={[
            "Available in 38m² and 44m² configurations",
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

          outro="The Palmview gives your backyard a whole new purpose, combining thoughtful design, practical living and a strong connection to the outdoors."
        />
      }
    />
  );
}