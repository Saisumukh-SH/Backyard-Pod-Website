import { useParams, useNavigate } from "react-router-dom";
import { products } from "../../Products";

export default function ProductDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const product =
    products.find(p => p.slug === slug);

  if (!product) return <div>Not found</div>;

  return (
    <div className="p-16">

      <button
        onClick={() => navigate("/products")}
        className="mb-10 underline"
      >
        ← Back
      </button>

      <div className="grid md:grid-cols-2 gap-12">
        <img
          src={product.image}
          className="w-full h-[600px] object-cover"
        />

        <div>
          <h1 className="text-5xl mb-6">
            {product.name}
          </h1>

          <p className="mb-8">
            {product.description}
          </p>

          {product.features.map((f, i) => (
            <div key={i}>✓ {f}</div>
          ))}
        </div>
      </div>

    </div>
  );
}