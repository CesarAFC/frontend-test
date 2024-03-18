import { cartReducer } from "../reducers/CartReducer";
import {
  ADD_TO_CART,
  HANDLE_FORM,
  REMOVE_ONE_FROM_CART,
  TOGGLE_CART_DRAWER,
  TOGGLE_PAYMENT_COMPLETED,
  TOGGLE_PAYMENT_MODAL,
} from "../types";

describe("cartReducer", () => {
  const initialState = {
    products: [
      {
        id: "1",
        name: "Fjallraven - Foldsack No. 1 Backpack",
        price: 100,
        description:
          "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        imageSrc: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      },
    ],
    cart: [],
    cardInformation: {
      card: "",
      expirationDate: "",
      holderName: "",
      securityCode: "",
    },
    isDrawerCartOpen: false,
    isModalPaymentOpen: false,
    isPaymentCompleted: false,
  };

  test("adds item to cart when action is ADD_TO_CART", () => {
    const action = { type: ADD_TO_CART, payload: "1" };
    const state = cartReducer(initialState, action);
    expect(state.cart.length).toBe(1);
  });

  test("removes one item from cart when action is REMOVE_ONE_FROM_CART", () => {
    const initialStateWithCart = {
      ...initialState,
      cart: [{ id: "1", quantity: 2 }],
    };
    const action = { type: REMOVE_ONE_FROM_CART, payload: "1" };
    const state = cartReducer(initialStateWithCart, action);
    expect(state.cart.length).toBe(1);
    expect(state.cart[0].quantity).toBe(1);
  });

  test("toggles cart drawer when action is TOGGLE_CART_DRAWER", () => {
    const action = { type: TOGGLE_CART_DRAWER, payload: true };
    const state = cartReducer(initialState, action);
    expect(state.isDrawerCartOpen).toBe(true);
  });

  test("updates card information when action is HANDLE_FORM", () => {
    const action = {
      type: HANDLE_FORM,
      payload: { name: "card", value: "1234567890" },
    };
    const state = cartReducer(initialState, action);
    expect(state.cardInformation.card).toBe("1234567890");
  });
  test("toggles payment modal when action is TOGGLE_PAYMENT_MODAL", () => {
    const action = { type: TOGGLE_PAYMENT_MODAL, payload: true };
    const state = cartReducer(initialState, action);
    expect(state.isModalPaymentOpen).toBe(true);
  });

  test("toggles payment completion when action is TOGGLE_PAYMENT_COMPLETED", () => {
    const action = { type: TOGGLE_PAYMENT_COMPLETED, payload: true };
    const state = cartReducer(initialState, action);
    expect(state.isPaymentCompleted).toBe(true);
  });
});
