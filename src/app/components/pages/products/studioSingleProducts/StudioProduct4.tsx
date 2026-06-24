import SingleStudioPage from "../singleStudioPage";

export default function StudioProduct4() {

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

const galleryImages = [
  {
    main: "/images/studio/studio3/studio3.webp",
    thumb: "/images/studio/studio3/studio3_thumb.webp",
    label: "Exterior",
  },
  {
    main: "/images/studio/studio3/interior/studio3_int.webp",
    thumb: "/images/studio/studio3/interior/studio3_int_thumb.webp",
    label: "Interior",
  },
  {
    main: "/images/studio/studio3/floorplan/nest_floorplan.webp",
    thumb: "/images/studio/studio3/floorplan/nest_floorplan_thumb.webp",
    label: "Floor Plan",
  },
];

return (
<SingleStudioPage
  category="Studio Pods"
  title="The Nest"
  highlight="37"
  description="Designed for those seeking maximum flexibility, The Nest combines generous open-plan living with premium finishes and abundant natural light. A sophisticated backyard space that adapts to changing lifestyles."
  size="37 m²"
  beds="Studio"
  baths="1"
  warranty="10 Year"
  heroImage="/images/studio/studio3/studio3.2.webp"
  finishes={finishes}
  galleryImages={galleryImages}
/>
);
}