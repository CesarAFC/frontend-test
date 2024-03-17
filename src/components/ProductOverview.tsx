import { Product } from "../types/store.types";
import { formatCurrency } from "../utils/utils";
import CreditCardPayment from "./CreditCardPayment";

type ProductsOverviewProps = {
    product: Product;
  };
  
export default function ProductsOverview({ product }: ProductsOverviewProps) {
    if (!product) return null;
    return (
      <section className="max-w-[1300px] mx-auto flex flex-wrap flex-col items-center gap-y-5 p-2 mt-[60px] mb-[80px] select-none overflow-y-auto justify-evenly md:flex-row">
        <img
          className="w-96 object-contain aspect-square"
          src={product.imageSrc}
          alt={product.description}
        />
        <div className="flex-[0_0_48%] flex flex-col gap-3">
          <h3 className="uppercase font-bold">{product.name}</h3>
          <p className="max-w-[500px] text-neutral-400">{product.description}</p>
          <p className="font-bold">{formatCurrency(product.price)}</p>
          <CreditCardPayment id={product.id} />
        </div>
      </section>
    );
  }
  