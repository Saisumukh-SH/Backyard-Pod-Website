import SingleStudioPage from "../singleStudioPage";

export default function StudioProduct2() {

const finishes = [
  {
    id: "default",
    name: "Classic Timber",
    subtitle: "Clean plaster finish",
    color: "#fcefd6",
    image: "/images/hokkori/default.webp"
  },
  {
    id: "charcoal",
    name: "Charcoal Cedar",
    subtitle: "Deep architectural tone",
    color: "#2B2B2B",
    image: "/images/hokkori/charcoal.webp"
  }
];

return (
  <SingleStudioPage
    category="Studio Flats"
    title="Studio 2"
    highlight="28"
    description="An open-plan studio with kitchenette and full bathroom."
    size="28 m²"
    beds="Studio"
    baths="1"
    warranty="10 yr"
    heroImage="images"
    finishes={finishes}
  />
);
}