import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContentText from "@mui/material/DialogContentText";
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
import SwipeableEdgeDrawer from "./CartDrawer";
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
      <PrimaryButton onClick={handleClickOpen}>
        <CiCreditCard1 />
        <span>Pay with credit card</span>
      </PrimaryButton>
      <Dialog
        fullWidth
        open={isModalPaymentOpen}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: handleFormSubmit,
        }}
      >
        <DialogTitle>Credit Card Payment</DialogTitle>
        <DialogContent className="flex flex-col gap-2">
          <DialogContentText>
            All transactions are secured and encrypted
          </DialogContentText>
          <CreditCardInput setIsCardValid={handleValidCard} />
          <CreditCardInfo />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Add</Button>
        </DialogActions>
      </Dialog>
      <SwipeableEdgeDrawer />
    </>
  );
}
