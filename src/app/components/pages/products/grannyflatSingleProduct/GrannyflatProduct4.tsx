import SingleGrannyFlatPage from "../singleGrannyflatPage";
import RelatedProducts from "../../../RelatedProducts";
import DesignInspiration from "../DesignInspiration";
import React from "react";

export default function TheHaven() {
  const finishes = [
    {
      id: "default",
      name: "Classic",
      subtitle: "A timeless finish for modern Australian living",
      color: "#FCEFD6",
      image: "/images/grannyflat/haven_48/haven_48_1.webp",
    },
    {
      id: "charcoal",
      name: "Charcoal Cedar",
      subtitle: "A deep contemporary architectural finish",
      color: "#2B2B2B",
      image: "/images/grannyflat/haven_48/haven_48_1.webp",
    },
    {
      id: "timber",
      name: "Natural Timber",
      subtitle: "Warm timber accents for a natural Australian character",
      color: "#C8A46B",
      image: "/images/grannyflat/haven_48/haven_48_1.webp",
    },
    {
      id: "navy",
      name: "Navy Blue",
      subtitle: "A refined contemporary exterior finish",
      color: "#6B7280",
      image: "/images/grannyflat/haven_48/haven_48_1.webp",
    },
    {
      id: "sage",
      name: "Sage White",
      subtitle: "A soft neutral finish for a contemporary exterior",
      color: "#E5E5E5",
      image: "/images/grannyflat/haven_48/haven_48_1.webp",
    },
  ];

  const galleryImages = [
    {
      main:
        "/images/grannyflat/haven/haven_48_1.webp",
      thumb:
        "/images/grannyflat/haven/haven_48_1.webp",
      label: "Exterior",
    },
    {
      main:
        "/images/grannyflat/haven/haven_48_int_1.webp",
      thumb:
        "/images/grannyflat/haven/haven_48_int_1.webp",
      label: "Interior",
    },
    {
      main:
        "/images/grannyflat/haven/haven_48_int_2.webp",
      thumb:
        "/images/grannyflat/haven/haven_48_int_2.webp",
      label: "Interior",
    },
    {
      main:
        "/images/grannyflat/haven/haven_48_floorplan.webp",
      thumb:
        "/images/grannyflat/haven/haven_48_floorplan.webp",
      label: "Floor Plan",
    },
  ];

  return (
    <SingleGrannyFlatPage
      category="Granny Flat"
      title="The Haven"
      highlight="48"

      description="The Haven 48 is a modern 48m² one-bedroom granny flat designed for suitable Victorian properties. With an open-plan kitchen, living and dining area, private bedroom, bathroom and outdoor deck, it provides a practical secondary dwelling solution with a strong connection between the home and backyard."

      size="48 m²"
      beds="1"
      baths="—"
      warranty="—"

      heroImage="/images/grannyflat/haven/haven_48_2.webp"

      floorplan="/images/grannyflat/haven/haven_48_floorplan.webp"

      mobileHeroImage="/images/grannyflat/haven/haven_48_mobile.webp"

      seoTitle="The Haven 48 | 48m² Granny Flat Melbourne"

      seoDescription="Explore The Haven 48 by Backyard Nest, a modern 48m² one-bedroom granny flat designed for suitable Victorian properties and flexible secondary dwelling living."

      seoUrl="https://backyardnest.com.au/products/TheHaven"

      seoImage="/images/grannyflat/haven/haven_48/haven_48_1.webp"

      finishes={finishes}

      galleryImages={galleryImages}

      relatedProducts={
        <RelatedProducts currentId={48} />
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

          subtitle="48m² One-Bedroom Granny Flat"

          intro="A smarter way to make more of your backyard."

          paragraphs={[
            "The Haven 48 is a modern 48m² one-bedroom granny flat designed for suitable Victorian properties.",

            "The thoughtfully planned layout brings together an open-plan kitchen, living and dining area with a private bedroom, bathroom and outdoor deck.",

            "Large windows and glazed doors bring natural light into the living areas while creating a strong connection between the home and backyard.",

            "The Haven 48 is particularly suited to homeowners and property investors considering a backyard rental, granny flat investment or secondary dwelling on an existing residential property.",

            "For suitable properties, a secondary dwelling can provide additional accommodation while potentially increasing the overall functionality and value of the property.",
          ]}

          features={[
            "48m² floor plan",
            "One-bedroom design",
            "Open-plan kitchen, living and dining",
            "Private bedroom",
            "Bathroom",
            "Outdoor deck",
            "Large windows",
            "Glazed doors",
            "Natural light throughout living areas",
            "Strong connection between home and backyard",
            "Designed for suitable Victorian properties",
            "Suitable secondary dwelling solution",
            "Backyard rental potential",
            "Suitable for additional accommodation",
          ]}

          outro="The Haven 48 provides a practical secondary dwelling solution that makes better use of suitable residential backyards across Victoria."
        />
      }
    />
  );
}