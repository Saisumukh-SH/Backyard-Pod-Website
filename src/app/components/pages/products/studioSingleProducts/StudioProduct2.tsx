import SingleStudioPage from "../singleStudioPage";
import RelatedProducts from "../../../RelatedProducts";
import DesignInspiration from "../DesignInspiration";

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
const galleryImages = [
  {
    main: "/images/studio/studio1/studio1.webp",
    thumb: "/images/studio/studio1/studio1_thumb.webp",
    label: "Exterior",
  },
  {
    main: "/images/studio/studio1/interior/studio1_int.webp",
    thumb: "/images/studio/studio1/interior/studio1_int_thumb.webp",
    label: "Interior",
  },
  {
    main: "/images/studio/studio1/floorplan/brighton_floorplan.webp",
    thumb: "/images/studio/studio1/floorplan/brighton_floorplan_thumb.webp",
    label: "Floor Plan",
  },
];

return (
<SingleStudioPage
  category="Backyard Studio"
  title="The Brighton"
  highlight="32"
  description="A refined backyard studio designed for focused work and flexible living. Featuring generous glazing, clean architectural lines and a highly efficient layout, The Brighton creates a bright and inspiring space for everyday use."
  size="32 m²"
  beds="1"
  baths="1"
  warranty="10 Year"
  heroImage="/images/studio/studio1/studio1.1.webp"
  finishes={finishes}
  galleryImages={galleryImages}
  relatedProducts={<RelatedProducts currentId={32} />}
  designInspiration={
  <DesignInspiration
    title={
      <>
        Inspired By
        <br />
        Mediterranean
        <br />
        Coastal Living.
      </>
    }
    subtitle="Mediterranean Coastal Backyard Studio"
    intro="Clean lines, bright white finishes and timeless Mediterranean architecture inspired by the relaxed homes of the Greek Islands."

    paragraphs={[
      "The Brighton draws inspiration from timeless Mediterranean architecture, combining clean white finishes, natural textures and light filled interiors to create a peaceful retreat within your own backyard.",

      "Influenced by the relaxed coastal homes of the Greek Islands, this design embraces simplicity, elegance and connection to outdoor living. Crisp white cladding, soft neutral tones and carefully considered architectural details create a bright and welcoming space that feels both modern and timeless.",

      "Perfectly suited to Melbourne's bayside suburbs, the Brighton luxury backyard studio is ideal for homeowners seeking a sophisticated backyard studio that complements coastal and contemporary homes alike.",

      "Whether used as a home office, guest accommodation, creative studio or private retreat, the Brighton backyard studio delivers a sense of calm, comfort and understated luxury.",
    ]}

    features={[
      "Mediterranean inspired architecture",
      "Bright white exterior finishes",
      "Natural timber accents",
      "Large glazed openings",
      "Minimalist interiors",
      "Energy efficient design",
      "Indoor outdoor connection",
    ]}

    outro="Designed to evoke the relaxed atmosphere of a luxury coastal escape, The Brighton transforms your backyard into a beautiful extension of your lifestyle."
  />
}
/>
);
}