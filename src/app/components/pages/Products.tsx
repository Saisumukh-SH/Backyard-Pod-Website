import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    id: "studio",
    tag: "Work · Create · Retreat",
    name: "Studio",
    nameLine2: "Pods",
    desc: "Purpose-built backyard spaces for focused work, creative pursuits, or mindful retreat. Designed for the way Australians live and work today, Studio Pods create a private workspace right in your backyard. Whether you need a backyard office, garden studio, creative workspace, or quiet retreat, each pod offers a smart alternative to costly home extensions.Designed for the Australian climate and lifestyle, Studio Pods transform unused outdoor space into a comfortable workspace, studio, study, or reset space.",
    img: "/images/study_nook_hero.webp",
    from: "From $24,900",
  },
  {
    id: "granny",
    tag: "Live · Host · Earn",
    name: "Granny",
    nameLine2: "Flats",
    desc: "Fully self-contained living spaces — perfect for extended family or rental income. Designed for modern Australian living, our granny flats provide a practical way to add extra living space, a secondary dwelling, or an investment opportunity right in your backyard. Each unit is thoughtfully designed with a private bedroom, bathroom, kitchen, and living area, creating a comfortable and independent home. Ideal for multi-generational living, long-term rental income, guest accommodation, or Airbnb, granny flats are a smart way to maximise your property’s potential. Built to meet Australian building standards, they offer a cost-effective alternative to traditional home extensions while increasing property value.",
    img: "https://images.unsplash.com/photo-1692911470070-c10cd6c89938?w=1400&q=85",
    from: "From $68,000",
  },
];

export default function Products() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="products-split">
      {categories.map((cat) => (
        <div
          key={cat.id}
          className="split-card"
          onClick={() => navigate(`/products/${cat.id}`)}
        >
          <img src={cat.img} alt={cat.name} className="split-img" />
          <div className="split-overlay" />

          <div className="split-content">
            <span className="split-tag">{cat.tag}</span>

            <h2 className="split-title">
              {cat.name}
              <br />
              {cat.nameLine2}
            </h2>

            <p className="split-desc">{cat.desc}</p>

            <div className="split-cta">
              <span>Explore Designs</span>
              <span className="split-from">{cat.from}</span>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
