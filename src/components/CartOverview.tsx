import { useMemo, useState } from "react";
import { useTypedShoppingSelector } from "../hooks/useTypedSelector";
import EmptyState from "./EmptyState";
import PrimaryButton from "./PrimaryButton";
import ProductCard from "./ProductInCart";
import { formatCurrency } from "../utils/utils";
import fetchMock from "fetch-mock";
import toast from "react-hot-toast";

fetchMock.post(
  "http://example.com/api/submitPayment",
  (_, options) => {
    const paymentData = JSON.parse(options.body as string);
    const cardInfoResponse = Object.values(paymentData.cardInformation);
    const isDataCompleted = cardInfoResponse.every((data) => data !== "");

    if (isDataCompleted) {
      return { status: 200, body: { message: "Payment Completed!" } };
    } else {
      return { status: 406, body: { error: "Card Data Incomplete" } };
    }
  },
  { delay: 2000 }
);

function CartOverview() {
  const [loading, setLoading] = useState(false);
  const { cart, cardInformation } = useTypedShoppingSelector();
  const total = useMemo(
    () =>
      cart.reduce((acc, current) => acc + current.price * current.quantity, 0),
    [cart]
  );

  const handlePayment = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://example.com/api/submitPayment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cardInformation,
          total,
        }),
      });

      const responseData = await response.json();

      if (response.ok) {
        console.log(responseData);
      } else {
        toast.error("Card Data must be complete!");
      }
    } catch (error) {
      console.error("Error submitting data:", error);
    }
    setLoading(false)
  };


  return (
    <>
      <section className="px-1 pb-1 overflow-auto h-full">
        {cart.length === 0 && <EmptyState />}
        <div className="flex flex-col gap-2 shadow-inner">
          {cart.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              qty={product.quantity}
            />
          ))}
        </div>
      </section>
      <div className="my-2 px-2 flex flex-col">
        <p className="text-lg font-bold self-end mb-2">
          Total: {formatCurrency(total)}
        </p>
        <PrimaryButton loading={loading} onClick={handlePayment}>
          Pay
        </PrimaryButton>
      </div>
    </>
  );
}

export default CartOverview;
