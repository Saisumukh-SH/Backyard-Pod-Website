import { useNavigate } from "react-router-dom";
import { products } from "../../Products";


export default function ProductsPage() {
  const navigate = useNavigate();

  return (
    <div className="p-16">
      <h1 className="text-5xl mb-12">Our </h1>

      {products.map(product => (
        <div
          key={product.slug}
          className="grid md:grid-cols-2 gap-10 mb-20"
        >
          <img
            src={product.image}
            className="h-96 w-full object-cover"
          />

          <div>
            <h2 className="text-3xl mb-4">
              {product.name}
            </h2>

            <p className="mb-6">
              {product.description}
            </p>

            <button
              onClick={() =>
                navigate(`/products/${product.slug}`)
              }
              className="px-6 py-3 bg-black text-white"
            >
              Learn More
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}