import { useDispatch } from "react-redux";
import { addToCart, deleteFromCart } from "../actions";
import { formatCurrency } from "../utils/utils";
import AddToCartButton from "./AddToCartButton";
import DeleteCart from "./DeleteCart";

type ProductCardProps = {
  id: string;
  name: string;
  price: number;
  description: string;
  qty?: number;
  isInCart?: boolean;
};

function ProductCard({
  id,
  name,
  price,
  description,
  qty,
  isInCart = false,
}: ProductCardProps) {
  const dispatch = useDispatch();
  const handleCart = () => {
    dispatch(addToCart(id));
  };
  const handleDelete = () => {
    dispatch(deleteFromCart(id))
  }
  return (
    <div className="min-w-36 flex flex-col gap-2 bg-white shadow-md p-4 rounded-lg">
      <div className="flex justify-between gap-2 font-bold">
        <h3>{name}</h3>
        <p>{formatCurrency(price)}</p>
      </div>
      <p className="text-sm text-neutral-400">{description}</p>
      {qty ? <p className="self-start rounded bg-neutral-200 text-center px-3 py-1">{qty}</p> : null}
      {isInCart ? <DeleteCart onClick={handleDelete} /> : <AddToCartButton onClick={handleCart} />}
    </div>
  );
}

export default ProductCard;
