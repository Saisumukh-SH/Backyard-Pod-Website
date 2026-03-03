import { Link } from "react-router-dom";
import { products } from "./productsData";

export default function Products() {
  return (
    <section className="products-list">
      {products.map((product) => (
        <div key={product.id} className="product-row">

          <img src={product.image} alt={product.name} />

          <h2>{product.name}</h2>
          <p>{product.description}</p>

          <ul>
            {product.features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>

          <Link
            to={`/products/${product.slug}`}
            className="btn-primary"
          >
            Learn More
          </Link>

        </div>
      ))}
    </section>
  );
}