import SingleStudioPage from "../singleStudioPage";
import RelatedProducts from "../../../RelatedProducts";
import DesignInspiration from "../DesignInspiration";

export default function StudioProduct1() {

  const galleryImages = [
    {
      main: "/images/studio/studio4/studio4.3.webp",
      thumb: "/images/studio/studio4/studio4.3_thumb.webp",
      label: "Exterior",
    },
    {
      main: "/images/studio/studio4/interior/studio4_int.webp",
      thumb: "/images/studio/studio4/interior/studio4_int_thumb.webp",
      label: "Interior",
    },
    {
      main: "/images/studio/studio4/floorplan/studio4_floorplan.webp",
      thumb: "/images/studio/studio4/floorplan/studio4_floorplan_thumb.webp",
      label: "Floor Plan",
    },
  ];

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
      subtitle: "Axon vertical 75mm deep & dramatic",
      color: "#2B2B2B",
      image: "/images/studio/studyNook/study_nook_charcole.webp",
    },
    {
      id: "timber",
      name: "Natural Timber",
      subtitle: "Warm untreated grain organic & open",
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
      category="Backyard Studios"
      title="The Vista"
      highlight="26"
      description="Designed for sloping and hillside blocks, this 26m² backyard studio combines contemporary architecture with functional, space-efficient living."
      size="26 m²"
      beds="1"
      baths="1"
      warranty="10 Year"
      heroImage="/images/studio/studio4/studio4.1.webp"
      finishes={finishes}
      galleryImages={galleryImages}
      

      relatedProducts={
        <RelatedProducts currentId={26} />
        
      }
        designInspiration={
      <DesignInspiration
  title={
    <>
      Inspired By
      <br />
      Elevated
      <br />
      Hillside Living.
    </>
  }

  subtitle="Elevated Hillside Backyard Studio"

  intro="Modern architectural design created specifically for sloping blocks, panoramic outlooks and seamless integration with the natural landscape."

  paragraphs={[
    "The Vista is purpose built for sloping and hillside blocks, combining contemporary architecture with intelligent design to create a premium backyard studio that embraces challenging landscapes rather than working against them.",

    "Inspired by modern hillside homes, The Vista features clean architectural lines, expansive glazing and carefully considered proportions that maximise natural light, privacy and surrounding views. Every detail has been designed to complement the site's natural contours while creating a seamless connection between indoor comfort and outdoor living.",

    "Perfectly suited to Melbourne's elevated and sloping suburbs, The Vista backyard studio is ideal for homeowners seeking a sophisticated home office, guest accommodation, creative workspace or private retreat that enhances both lifestyle and property value.",

    "Whether overlooking landscaped gardens, bushland or panoramic vistas, The Vista delivers timeless architecture, premium craftsmanship and exceptional functionality, creating a beautifully integrated extension of your home."
  ]}

  features={[
    "Purpose built for sloping blocks",
    "Contemporary architectural styling",
    "Expansive glazing for natural light",
    "Premium vertical cladding",
    "Panoramic outlooks",
    "Indoor outdoor connection",
    "Energy efficient design",
  ]}

  outro="Designed to unlock the full potential of elevated backyards, The Vista transforms challenging landscapes into elegant architectural spaces that blend effortlessly with their natural surroundings."
/>}
    />
  );
}