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
  const galleryImages = [
  {
    main: "/images/studio/studio2/studio2.webp",
    thumb: "/images/studio/studio2/studio2_thumb.webp",
    label: "Exterior",
  },
  {
    main: "/images/studio/studio2/interior/studio2_int.webp",
    thumb: "/images/studio/studio2/interior/studio2_int_thumb.webp",
    label: "Interior",
  },
  {
    main: "/images/studio/studio2/floorplan/aspen_floorplan.webp",
    thumb: "/images/studio/studio2/floorplan/aspen_floorplan_thumb.webp",
    label: "Floor Plan",
  },
];

return (
 <SingleStudioPage
  category="Studio Pods"
  title="The Aspen"
  highlight="30"
  description="A spacious studio retreat offering room to work, create and unwind. The Aspen balances contemporary design with practical functionality, making it ideal for home offices, creative studios or guest accommodation."
  size="30 m²"
  beds="Studio"
  baths="1"
  warranty="10 Year"
  heroImage="/images/studio/studio2/studio2.1.webp"
  finishes={finishes}
  galleryImages={galleryImages}
/>
);
}