import SingleStudioPage from "../singleStudioPage";

export default function StudioProduct2() {

const finishes = [
  {
    id: "default",
    name: "Classic Timber",
    subtitle: "Clean plaster finish",
    color: "#fcefd6",
    image: "/images/studio/studio1/studio1.webp"
  },
  {
    id: "charcoal",
    name: "Charcoal Cedar",
    subtitle: "Deep architectural tone",
    color: "#2B2B2B",
    image: "/images/studio/studio1/charcoal.webp"
  }
];

return (
<SingleStudioPage
  category="Studio Pods"
  title="The Brighton"
  highlight="22"
  description="A refined backyard studio designed for focused work and flexible living. Featuring generous glazing, clean architectural lines and a highly efficient layout, The Brighton creates a bright and inspiring space for everyday use."
  size="22 m²"
  beds="Studio"
  baths="1"
  warranty="10 Year"
  heroImage="/images/studio/studio1/studio1.1.webp"
  finishes={finishes}
/>
);
}