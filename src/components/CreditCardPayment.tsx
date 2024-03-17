import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import PrimaryButton from "./PrimaryButton";
import CreditCardInfo from "./CreditCardInfo";
import CreditCardInput from "./CreditCardInput";
import toast from "react-hot-toast";
import {
  addToCart,
  newCardInfo,
  toggleCartDrawer,
  togglePaymentModal,
} from "../actions";
import { CardInformation } from "../types/store.types";
import { useTypedShoppingSelector } from "../hooks/useTypedSelector";
import { CiCreditCard1 } from "react-icons/ci";

export default function CreditCardPayment({ id }: { id: string }) {
  const { isModalPaymentOpen } = useTypedShoppingSelector();
  const [isCardValid, setIsCardValid] = useState(false);

  const dispatch = useDispatch();
  togglePaymentModal;

  const handleClickOpen = () => {
    dispatch(togglePaymentModal(true));
  };

  const handleClose = () => {
    dispatch(togglePaymentModal(false));
  };

  const handleValidCard = useCallback((event: boolean) => {
    setIsCardValid(event);
  }, []);

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(
      (formData as any).entries()
    ) as CardInformation;
    if (isCardValid) {
      dispatch(newCardInfo(formJson));
      dispatch(addToCart(id));
      dispatch(toggleCartDrawer(true));
      handleClose();
    } else {
      toast.error("Credit card not valid");
    }
  };
  return (
    <>
    <div className="md:w-[250px]">
      <PrimaryButton onClick={handleClickOpen}>
        <CiCreditCard1 />
        <span>Pay with credit card</span>
      </PrimaryButton>
    </div>
      <Dialog
        fullWidth
        open={isModalPaymentOpen}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: handleFormSubmit,
        }}
      >
        <DialogTitle>
          <span className="font-bold">Credit Card Payment</span>
          <p className="text-xs text-neutral-500">
            All transactions are secured and encrypted
          </p>
        </DialogTitle>
        <DialogContent className="flex flex-col gap-2">
          <CreditCardInput setIsCardValid={handleValidCard} />
          <CreditCardInfo />
        </DialogContent>

        <DialogActions>
          <div className="px-3 py-2 flex gap-2">
          <button
            className="px-2 py-1 text-sm text-green-500 rounded uppercase hover:bg-green-50 transition ease-in-out"
            onClick={handleClose}
          >
            Cancel
          </button>
          <button
            className="px-2 py-1 text-sm border text-green-500 border-green-300 rounded uppercase hover:bg-green-50 transition ease-in-out"
            type="submit"
          >
            Add
          </button>
          </div>
        </DialogActions>
      </Dialog>
    </>
  );
}
