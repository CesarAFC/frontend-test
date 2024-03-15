import { useSelector } from "react-redux";
import { Product } from "../types/store.types";
import ProductCard from "./ProductCard";
type AgregarProps = {};

function Products({}: AgregarProps) {
  const state = useSelector((state) => state.shopping);
  const products: Product[] = state.products;

  return (
    <>
      <section className="flex gap-2">
        {products.map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            description={item.description}
          />
        ))}
      </section>
      <div className="my-4">
        <h4 className="text-xl font-bold">Cart</h4>
        <div className="flex gap-2">
          {state.cart.map((item) => (
            <ProductCard
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              description={item.description}
              qty={item.quantity}
              isCart={false}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Products;

