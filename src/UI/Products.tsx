import ProductsOverview from "../components/ProductOverview";
import { useTypedShoppingSelector } from "../hooks/useTypedSelector";
import { Toaster } from "react-hot-toast";

type ProductsProps = {};

function Products({}: ProductsProps) {
const state = useTypedShoppingSelector()
  return (
    <section>
      <ProductsOverview product={state.products[0]} />
      <Toaster />
    </section>
  );
}

export default Products;