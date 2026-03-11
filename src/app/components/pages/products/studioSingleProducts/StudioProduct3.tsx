import SingleStudioPage from "../singleStudioPage";

export default function StudioProduct3() {

const finishes = [
    {
      id: "default",
      name: "Classic",
      subtitle: "Clean plaster finish — crisp & minimal",
      color: "#fcefd6",
      image: "/images/studio/officeStudio/office_studio_hero.webp",
    },
    {
      id: "charcoal",
      name: "Charcoal Cedar",
      subtitle: "Axon vertical 75mm — deep & dramatic",
      color: "#2B2B2B",
      image: "/images/studio/officeStudio/office_studio_charcole.webp",
    },
    {
      id: "timber",
      name: "Natural Timber",
      subtitle: "Warm untreated grain — organic & open",
      color: "#C8A46B",
      image: "/images/studio/officeStudio/office_studio_timber.webp",
    },
    {
      id: "navy",
      name: "Navy Blue",
      subtitle: "Low-maintenance modern finish",
      color: "#6B7280",
      image: "/images/studio/officeStudio/office_studio_navy.webp",
    },
    {
      id: "sage",
      name: "Sage White",
      subtitle: "WeatherTex Classic Smooth 200mm",
      color: "#E5E5E5",
      image: "/images/studio/officeStudio/office_studio_sage.webp",
    },
  ];

return (
  <SingleStudioPage
    category="Studio Flats"
    title="Luma"
    highlight="Studio"
    description="Bright modern studio for backyard spaces."
    size="15 m²"
    beds="Studio"
    baths="1"
    warranty="10 yr"
    heroImage="/images/studio/officeStudio/office_studio_hero.webp"
    finishes={finishes}
  />
);
}