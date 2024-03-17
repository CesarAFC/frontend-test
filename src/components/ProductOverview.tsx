import { Product } from "../types/store.types";
import { formatCurrency } from "../utils/utils";
import CreditCardPayment from "./CreditCardPayment";

type ProductsOverviewProps = {
    product: Product;
  };
  
export default function ProductsOverview({ product }: ProductsOverviewProps) {
    if (!product) return null;
    return (
      <section className="w-full flex flex-wrap flex-col items-center gap-y-5 mt-[60px] mb-[80px] overflow-y-auto justify-evenly md:flex-row">
        <img
          className="w-96 object-contain aspect-square"
          src={product.imageSrc}
          alt={product.description}
        />
        <div className="flex flex-col gap-3">
          <h3 className="uppercase font-bold">{product.name}</h3>
          <p className="text-neutral-400">{product.description}</p>
          <p className="font-bold">{formatCurrency(product.price)}</p>
          <CreditCardPayment id={product.id} />
        </div>
      </section>
    );
  }
  