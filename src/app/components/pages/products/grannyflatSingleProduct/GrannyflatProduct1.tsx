import SingleGrannyFlatPage from "../singleGrannyflatPage";

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

  return (
    <SingleGrannyFlatPage
      category="Granny Flats"
      title="Granny Flat"
      highlight="1"
      description="A compact one-bedroom granny flat designed for comfortable backyard living with open-plan kitchen and living."
      size="6 x 6 m"
      area="37 m²"
      beds="1"
      baths="1"
      warranty="10 yr"

      heroImage="/images/grannyflat/grannyflatexmp/granny_flats_hero.webp"

      floorplan="/images/granny/bawa37/bawa37_floorplan.webp"

      finishes={finishes}
    />
  );
}