export interface Product {
  id: number;
  number: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  features: string[];
}

export const products: Product[] = [
  {
    id: 1,
    number: "01 — Studio Pod",
    name: "Studio Pod",
    slug: "studio-pod",
    description:
      "Perfect for home offices or creative studios.",
    image:
      "https://images.unsplash.com/photo-1765810655582-97eae3a801bb?w=1080&q=80",
    features: [
      "15–25 sqm",
      "Insulated walls",
      "Electrical setup",
      "Internet ready",
    ],
  },
  {
    id: 2,
    number: "02 — Granny Flat",
    name: "One Bedroom Granny Flat",
    slug: "one-bedroom-flat",
    description:
      "Complete living solution.",
    image:
      "https://images.unsplash.com/photo-1692911470070-c10cd6c89938?w=1080&q=80",
    features: [
      "35–50 sqm",
      "Full kitchen",
      "Modern bathroom",
    ],
  },
];