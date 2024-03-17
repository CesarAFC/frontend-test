import { Global } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { useDispatch } from "react-redux";
import { useTypedShoppingSelector } from "../hooks/useTypedSelector";
import { toggleCartDrawer } from "../actions";
import CartOverview from "../components/CartOverview";
import FinalStatus from "./FinalStatus";
import { FaShoppingCart } from "react-icons/fa";
import PrimaryButton from "../components/PrimaryButton";

const drawerBleeding = 56;

export default function CartDrawer() {
  const { isDrawerCartOpen, isPaymentCompleted } = useTypedShoppingSelector();
  const dispatch = useDispatch();

  const handleDrawer = (newOpen: boolean) => () => {
    dispatch(toggleCartDrawer(newOpen));
  };

  return (
    <section className="h-full bg-white">
      <CssBaseline />
      <Global
        styles={{
          ".MuiDrawer-root > .MuiPaper-root": {
            height: `calc(70% - ${drawerBleeding}px)`,
            overflow: "visible",
          },
        }}
      />
      <PrimaryButton onClick={handleDrawer(true)}>
        <FaShoppingCart />
      </PrimaryButton>
      <SwipeableDrawer
        style={{ position: "relative" }}
        anchor="bottom"
        open={isDrawerCartOpen}
        onClose={handleDrawer(false)}
        onOpen={handleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <div className="bg-white absolute -top-14 rounded-t-lg visible right-0 left-0 shadow-[0px_-20px_80px_-15px_rgba(0,0,0,0.3)]">
          <div className="w-8 h-[6px] bg-[#e0e0e0] rounded absolute top-2 left-[calc(50%-15px)]"></div>
          <Typography
            fontWeight={"bold"}
            sx={{ p: 2, color: "text.secondary" }}
          >
            Cart
          </Typography>
        </div>
        {isPaymentCompleted ? <FinalStatus /> : <CartOverview />}
      </SwipeableDrawer>
    </section>
  );
}
