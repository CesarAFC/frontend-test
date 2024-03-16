import { CiCreditCard1 } from "react-icons/ci";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

function PayWithCreditCardButton({ ...props }: Props) {
  return (
    <button
      {...props}
      className="flex justify-center items-center gap-2 bg-indigo-700 text-white hover:bg-indigo-500 transition ease-in-out px-3 py-2 rounded"
    >
      <CiCreditCard1 />
      <span>Pay with credit card</span>
    </button>
  );
}

export default PayWithCreditCardButton;
