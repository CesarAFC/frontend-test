import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContentText from "@mui/material/DialogContentText";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import AddToCartButton from "./PayWithCreditCardButton";
import CreditCardInfo from "./CreditCardInfo";
import CreditCardInput from "./CreditCardInput";
import toast, { Toaster } from "react-hot-toast";
import { addToCart, newCardInfo } from "../actions";
import { CardInformation } from "../types/store.types";

export default function CreditCardPayment({ id }: { id: string }) {
  const [open, setOpen] = useState(false);
  const [isCardValid, setIsCardValid] = useState(false);
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
      handleClose();
    } else {
      toast.error("Credit card not valid");
    }
  };
  return (
    <>
      <AddToCartButton onClick={handleClickOpen} />
      <Dialog
        fullWidth
        open={open}
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
      <Toaster />
    </>
  );
}
