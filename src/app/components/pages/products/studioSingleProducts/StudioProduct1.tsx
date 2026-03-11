import SingleStudioPage from "../singleStudioPage";

export default function StudioProduct1() {
  const finishes = [
    {
      id: "default",
      name: "Classic",
      subtitle: "Spotted Gum - A timeless Australian hardwood",
      color: "#fcefd6",
      image: "/images/studio/studyNook/study_nook_hero.webp",
    },
    {
      id: "charcoal",
      name: "Charcoal Cedar",
      subtitle: "Axon vertical 75mm — deep & dramatic",
      color: "#2B2B2B",
      image: "/images/studio/studyNook/study_nook_charcole.webp",
    },
    {
      id: "timber",
      name: "Natural Timber",
      subtitle: "Warm untreated grain — organic & open",
      color: "#C8A46B",
      image: "/images/studio/studyNook/study_nook_timber.webp",
    },
    {
      id: "navy",
      name: "Navy Blue",
      subtitle: "Low-maintenance modern finish",
      color: "#6B7280",
      image: "/images/studio/studyNook/study_nook_navy.webp",
    },
    {
      id: "sage",
      name: "Sage White",
      subtitle: "WeatherTex Classic Smooth 200mm",
      color: "#E5E5E5",
      image: "/images/studio/studyNook/study_nook_sage.webp",
    },
  ];

  return (
    <SingleStudioPage
      category="Studio Flats"
      title="Hokkori"
      highlight="28"
      description="An open-plan studio with kitchenette and full bathroom."
      size="28 m²"
      beds="Studio"
      baths="1"
      warranty="10 yr"
      heroImage="/images/studio/studyNook/study_nook_hero.webp"
      finishes={finishes}
    />
  );
}
