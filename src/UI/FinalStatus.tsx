import { useDispatch } from "react-redux";
import { clearCart, toggleCartDrawer, togglePaymentCompleted } from "../actions";
import PrimaryButton from "../components/PrimaryButton";
import { useTypedShoppingSelector } from "../hooks/useTypedSelector";
import { useMemo } from "react";
import { formatCurrency, getCartTotal } from "../utils/utils";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { IconContext } from "react-icons";

function FinalStatus({}) {
  const dispatch = useDispatch();
  const { cart, cardInformation } = useTypedShoppingSelector();
  const productBought = cart[0];
  const total = useMemo(() => getCartTotal(cart), [cart]);

  const handleNextPayment = () => {
    dispatch(togglePaymentCompleted(false));
    dispatch(clearCart());
    dispatch(toggleCartDrawer(false));
  };
  return (
    <>
      <section className="px-4 pt-1 pb-1 overflow-auto h-full text-sm lg:mx-auto lg:w-[1000px]">
        <div className="flex flex-col justify-center items-center text-center border-b border-b-gray-200 pb-4 my-4">
          <IconContext.Provider value={{ size: "2em", color: "#23A26D" }}>
            <IoMdCheckmarkCircleOutline />
          </IconContext.Provider>
          <h3 className="text-neutral-500 text-lg">Payment received</h3>
          <p className="font-bold text-xl">{formatCurrency(total)}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-neutral-500">Card</p>
          <p>{`**** **** **** ${cardInformation.card.substring(15)}`}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-neutral-500">Product</p>
          <p>{productBought?.name}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-neutral-500">Price</p>
          <p>{formatCurrency(productBought?.price)}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-neutral-500">Quantity</p>
          <p>{productBought?.quantity}</p>
        </div>
      </section>
      <div className="my-2 px-2 flex flex-col">
        <PrimaryButton onClick={handleNextPayment}>Next Payment</PrimaryButton>
      </div>
    </>
  );
}

export default FinalStatus;
