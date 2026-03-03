import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    id: "studio",
    tag: "Work · Create · Retreat",
    name: "Studio",
    nameLine2: "Pods",
    desc: "Purpose-built backyard spaces for focused work, creative pursuits, or mindful retreat.",
    img: "https://images.unsplash.com/photo-1596395147635-9c2e84c80b0c?w=1400&q=85",
    from: "From $24,900",
  },
  {
    id: "granny",
    tag: "Live · Host · Earn",
    name: "Granny",
    nameLine2: "Flats",
    desc: "Fully self-contained living spaces — perfect for extended family or rental income.",
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