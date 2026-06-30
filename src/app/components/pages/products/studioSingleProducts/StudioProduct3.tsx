import SingleStudioPage from "../singleStudioPage";
import RelatedProducts from "../../../RelatedProducts";
import DesignInspiration from "../DesignInspiration";

export default function StudioProduct3() {

const finishes = [
    {
      id: "default",
      name: "Classic",
      subtitle: "Clean plaster finish crisp & minimal",
      color: "#fcefd6",
      image: "/images/studio/officeStudio/office_studio_hero.webp",
    },
    {
      id: "charcoal",
      name: "Charcoal Cedar",
      subtitle: "Axon vertical 75mm deep & dramatic",
      color: "#2B2B2B",
      image: "/images/studio/officeStudio/office_studio_charcole.webp",
    },
    {
      id: "timber",
      name: "Natural Timber",
      subtitle: "Warm untreated grain organic & open",
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
  category="Backyard Studio"
  title="The Aspen"
  highlight="20"
  description="A spacious studio retreat offering room to work, create and unwind. The Aspen balances contemporary design with practical functionality, making it ideal for home offices, creative studios or guest accommodation."
  size="20 m²"
  beds="1"
  baths="0"
  warranty="10 Year"
  heroImage="/images/studio/studio2/studio2.1.webp"
  mobileHeroImage="/images/studio/studio2/studio2.1_mobile.webp"
  finishes={finishes}
  galleryImages={galleryImages}
  relatedProducts={<RelatedProducts currentId={20} />}
  designInspiration={
  <DesignInspiration
    title={
      <>
        Inspired By
        <br />
        Contemporary
        <br />
        Architecture.
      </>
    }

    subtitle="Contemporary Architectural Backyard Studio"

    intro="Bold architectural forms, striking navy cladding and expansive glazing combine to create a sophisticated backyard studio that feels timeless, modern and effortlessly functional."

    paragraphs={[
      "The Aspen 20 is a premium 20m² backyard studio designed for homeowners who value contemporary architecture, functional living and exceptional craftsmanship.",

      "Featuring striking navy blue composite cladding, clean architectural lines and expansive glazing, The Aspen 20 creates a sophisticated backyard retreat that complements both modern and coastal inspired homes.",

      "Perfect as a home office, creative studio, guest accommodation or private sanctuary, this versatile backyard studio provides a practical extension of your living space while enhancing the overall value and appeal of your property.",

      "The Aspen 20 has been carefully designed to suit Melbourne's diverse residential environments, from inner city backyards to bayside and regional properties. Its bold exterior finish creates a distinctive architectural statement, while the light filled interior delivers comfort, flexibility and everyday functionality.",
    ]}

    features={[
      "Contemporary architectural styling",
      "Premium navy composite cladding",
      "Expansive glazing for natural light",
      "Open plan multifunctional layout",
      "Minimalist modern detailing",
      "Energy efficient construction",
      "Home office & guest accommodation",
      "Ideal for coastal & urban homes",
    ]}

    outro="Designed to balance bold architecture with everyday practicality, The Aspen 20 transforms your backyard into a contemporary retreat that seamlessly extends your home and lifestyle."
  />
}
/>
);
}