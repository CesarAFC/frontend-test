import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch } from "react-redux";
import PrimaryButton from "./PrimaryButton";
import CreditCardInfo from "./CreditCardInfo";
import CreditCardInput from "./CreditCardInput";
import toast from "react-hot-toast";
import {
  addToCart,
  toggleCartDrawer,
  togglePaymentCompleted,
  togglePaymentModal,
} from "../actions";
import { useTypedShoppingSelector } from "../hooks/useTypedSelector";
import { CiCreditCard1 } from "react-icons/ci";
import { luhnValidation } from "../utils/utils";

export default function CreditCardPayment({ id }: { id: string }) {
  const { isModalPaymentOpen, cardInformation } = useTypedShoppingSelector();

  const dispatch = useDispatch();

  const handleClickOpen = () => {
    dispatch(togglePaymentModal(true));
  };

  const handleClose = () => {
    dispatch(togglePaymentModal(false));
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isValidCard = luhnValidation(cardInformation.card.trim())
    if (isValidCard) {
      dispatch(togglePaymentCompleted(false));
      dispatch(addToCart(id));
      toast.success('Card added succesfully!')
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
        onKeyDown={e => e.key === 'Enter' ? e.preventDefault() : null}
      >
        <DialogTitle>
          <span className="font-bold">Credit Card Payment</span>
          <p className="text-xs text-neutral-500">
            All transactions are secured and encrypted
          </p>
        </DialogTitle>
        <DialogContent className="flex flex-col gap-2">
          <CreditCardInput />
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
