import SingleGrannyFlatPage from "../singleGrannyflatPage";
import RelatedProducts from "../../../RelatedProducts";
import DesignInspiration from "../DesignInspiration";

export default function GrannyProduct1() {

  const finishes = [
    {
      id: "default",
      name: "Classic",
      subtitle: "Spotted Gum - A timeless Australian hardwood",
      color: "#fcefd6",
      image: "/images/grannyflat/grannyflatexmp/granny_flats_hero.webp",
    },
    {
      id: "charcoal",
      name: "Charcoal Cedar",
      subtitle: "Deep modern vertical cladding",
      color: "#2B2B2B",
      image: "/images/grannyflat/grannyflatexmp/granny_flats_hero.webp",
    },
    {
      id: "timber",
      name: "Natural Timber",
      subtitle: "Warm timber tones for organic feel",
      color: "#C8A46B",
      image: "/images/grannyflat/grannyflatexmp/granny_flats_hero.webp",
    },
    {
      id: "navy",
      name: "Navy Blue",
      subtitle: "Low maintenance architectural finish",
      color: "#6B7280",
      image: "/images/grannyflat/grannyflatexmp/granny_flats_hero.webp",
    },
    {
      id: "sage",
      name: "Sage White",
      subtitle: "Soft contemporary weatherboard",
      color: "#E5E5E5",
      image: "/images/grannyflat/grannyflatexmp/granny_flats_hero.webp",
    },
  ];

  const galleryImages = [
    {
      main: "/images/grannyflat/wattle_60/wattle_2.webp",
      thumb: "/images/grannyflat/wattle_60/wattle_2.webp",
      label: "Exterior",
    },
    {
      main: "/images/grannyflat/wattle_60/wattle_int_1.webp",
      thumb: "/images/grannyflat/wattle_60/wattle_int_1.webp",
      label: "Interior",
    },
    {
      main: "/images/grannyflat/wattle_60/wattle_int_2.webp",
      thumb: "/images/grannyflat/wattle_60/wattle_int_2.webp",
      label: "Interior",
    },
    {
      main: "/images/grannyflat/wattle_60/wattle_floorplan.webp",
      thumb: "/images/grannyflat/wattle_60/wattle_floorplan.webp",
      label: "Floor Plan",
    },
  ];

  return (
    <SingleGrannyFlatPage
  category="Granny Flat"
  title="The Wattle"
  highlight="60"
  description="A spacious 60m² granny flat designed for modern Australian living. The Wattle 60 combines generous living areas, a practical layout and a private bedroom to create a comfortable, independent space for family, guests or future rental accommodation."
  size="60 m²"
  beds="1"
  baths="1"
  warranty="10 Year"
  heroImage="/images/grannyflat/wattle_60/wattle_1.webp"
  floorplan="/images/grannyflat/wattle/wattle_floorplan.webp"

  seoTitle="The Wattle 60 | 60m² Granny Flat Melbourne"
  seoDescription="Explore The Wattle 60 by Backyard Nest, a spacious 60m² granny flat designed for independent living, family accommodation, guests or rental potential in Melbourne."
  seoUrl="https://backyardnest.com.au/products/GrannyflatProductWattle"
  seoImage="/images/grannyflat/wattle/wattle_hero.webp"

  finishes={finishes}
  galleryImages={galleryImages}
  relatedProducts={<RelatedProducts currentId={60} />}

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

      subtitle="60m² Modern Australian Granny Flat"

      intro="A smarter way to make more of your backyard."

      paragraphs={[
        "The Wattle 60 is a spacious 60m² granny flat designed for Australian homeowners looking to create a comfortable, independent living space in their backyard.",

        "With generous living areas, a practical layout and private bedroom accommodation, the Wattle 60 is designed to support the changing needs of Australian families while maintaining a strong connection to the outdoors.",

        "Whether you are considering a granny flat for rental accommodation, multi-generational living or a private space for visiting family and friends, the Wattle 60 provides the space and functionality to make your backyard work harder for you.",

        "More than additional floor space, the Wattle 60 creates an independent backyard residence that brings together privacy, functionality and everyday comfort. Its flexible design makes it suitable for family living, guest accommodation and future lifestyle needs.",
      ]}

      features={[
        "Spacious 60m² floor plan",
        "Practical open living areas",
        "Private bedroom accommodation",
        "Designed for independent living",
        "Suitable for multi-generational living",
        "Ideal for guest accommodation",
        "Rental accommodation potential",
        "Strong indoor-outdoor connection",
      ]}

      outro="Thoughtfully designed for modern Australian lifestyles, The Wattle 60 transforms your backyard into a comfortable and versatile extension of your home."
    />
  }
/>
  );
}