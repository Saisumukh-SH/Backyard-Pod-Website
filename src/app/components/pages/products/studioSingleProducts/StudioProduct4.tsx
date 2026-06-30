import SingleStudioPage from "../singleStudioPage";
import RelatedProducts from "../../../RelatedProducts";
import DesignInspiration from "../DesignInspiration";

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
  category="Backyard Studio"
  title="The Nest"
  highlight="15"
  description="Designed for those seeking maximum flexibility, The Nest combines generous open-plan living with premium finishes and abundant natural light. A sophisticated backyard space that adapts to changing lifestyles."
  size="15 m²"
  beds="1"
  baths="0"
  warranty="10 Year"
  heroImage="/images/studio/studio3/studio3.2.webp"
  mobileHeroImage="/images/studio/studio3/studio3.1_mobile.webp"
  finishes={finishes}
  galleryImages={galleryImages}
  relatedProducts={<RelatedProducts currentId={15} />}
  designInspiration={
  <DesignInspiration
    title={
      <>
        Inspired By
        <br />
        Nature &
        <br />
        Quiet Living.
      </>
    }

    subtitle="Nature Inspired Backyard Studio"

    intro="Designed to reconnect you with nature, The Nest 15 combines warm timber finishes, calming proportions and abundant natural light to create a peaceful retreat only steps from your home."

    paragraphs={[
      "Escape the demands of everyday life with The Nest 15, a beautifully designed 15m² backyard studio that brings warmth, comfort and timeless architectural character to your outdoor space.",

      "Finished with premium timber textured cladding, The Nest 15 is inspired by nature and thoughtfully designed to create a peaceful backyard retreat where you can relax, recharge or focus. Its natural exterior blends seamlessly with landscaped gardens, mature trees and outdoor entertaining spaces.",

      "Whether you're looking for a home office, reading room, meditation space, creative studio, guest accommodation or a private sanctuary, this versatile backyard studio provides a practical extension of your living space without the expense of a traditional home extension.",

      "Every Backyard Nest studio is fully customisable, allowing you to personalise the layout, cladding, colours and finishes to perfectly complement your home, lifestyle and property while adding lasting value."
    ]}

    features={[
      "Nature inspired architectural design",
      "Premium timber exterior cladding",
      "Warm natural material palette",
      "Light filled, open plan interior",
      "Perfect for home offices",
      "Meditation & wellness retreat",
      "Creative studio or guest room",
      "Designed for Melbourne gardens"
    ]}

    outro="Thoughtfully designed to become a natural extension of your home, The Nest 15 creates a calm, functional space where work, relaxation and everyday living exist in perfect balance."
  />
}
/>
);
}