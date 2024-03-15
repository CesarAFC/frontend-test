import { MdAddShoppingCart } from "react-icons/md";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

function AddToCartButton({ ...props }: Props) {
  return (
    <button
      {...props}
      className="flex justify-center items-center gap-2 bg-indigo-700 text-white hover:bg-indigo-500 transition ease-in-out px-3 py-2 rounded"
    >
      <MdAddShoppingCart />
      Add to cart
    </button>
  );
}

export default AddToCartButton;
