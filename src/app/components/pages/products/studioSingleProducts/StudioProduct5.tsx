import SingleStudioPage from "../singleStudioPage";

export default function StudioProduct5() {

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
  category="Tailored Solution"
  title="Bespoke"
  highlight="Design"
  description="Every property is unique. Collaborate with our design team to create a completely custom backyard studio tailored to your site, lifestyle and vision. From concept to completion, every detail is designed around you."
  size="Custom"
  beds="Flexible"
  baths="Optional"
  warranty="10 Year"
  heroImage="/images/studio/custom_studio/customstudio.webp"
  finishes={finishes}
/>
);
}