import { useSelector } from "react-redux";
import ProductsOverview from "../components/ProductOverview";
type ProductsProps = {};

function Products({}: ProductsProps) {
  const state = useSelector((state) => state.shopping);
  return (
    <section>
      <ProductsOverview product={state.products[0]} />
    </section>
  );
}

export default Products;