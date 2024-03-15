import { useDispatch } from "react-redux";
import { addToCart } from "../actions";
import { formatCurrency } from "../utils/utils";
import AddToCartButton from "./AddToCartButton";

type ProductCardProps = {
  id: string;
  name: string;
  price: number;
  description: string;
  qty?: number;
  isCart?: boolean;
};

function ProductCard({
  id,
  name,
  price,
  description,
  qty,
  isCart = true,
}: ProductCardProps) {
  const dispatch = useDispatch();
  const handleCart = () => {
    dispatch(addToCart(id));
  };
  return (
    <div className="flex flex-col gap-2 bg-white shadow-md p-4 rounded-lg">
      <div className="flex justify-between gap-2 font-bold">
        <h3>{name}</h3>
        <p>{formatCurrency(price)}</p>
      </div>
      <p className="text-sm text-neutral-400">{description}</p>
      {qty ? <p className="self-start rounded bg-neutral-400 text-center px-3 py-1">{qty}</p> : null}
      {isCart && <AddToCartButton onClick={handleCart} />}
    </div>
  );
}

export default ProductCard;
