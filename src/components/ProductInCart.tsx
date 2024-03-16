import { useDispatch } from "react-redux";
import { deleteFromCart } from "../actions";
import { formatCurrency } from "../utils/utils";
import DeleteFromCartButton from "./DeleteFromCartButton";

type ProductCardProps = {
  id: string;
  name: string;
  price: number;
  qty?: number;
};

function ProductCard({
  id,
  name,
  price,
  qty,
}: ProductCardProps) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteFromCart(id));
  };
  return (
    <div className="min-w-52 flex flex-col gap-2 bg-white shadow-md p-4 rounded-lg border border-black">
      <div className="flex justify-between gap-2 font-bold">
        <h3>{name}</h3>
        <p>{formatCurrency(price)}</p>
      </div>
        <div className="flex justify-between items-center">
          <p className="rounded bg-neutral-200 text-center px-3 py-1">{qty}</p>
          <DeleteFromCartButton onClick={handleDelete} />
        </div>
    </div>
  );
}

export default ProductCard;
