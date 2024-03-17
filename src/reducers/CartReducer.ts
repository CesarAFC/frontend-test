import {
  TaddToCartAction,
  TdeleteFromCart,
  TnewCardInfo,
  ToggleCartDrawer,
  TogglePaymentCompleted,
  TogglePaymentModal,
} from "../actions";
import {
  ADD_TO_CART,
  REMOVE_ONE_FROM_CART,
  NEW_CARD_INFO,
  TOGGLE_CART_DRAWER,
  TOGGLE_PAYMENT_MODAL,
  TOGGLE_PAYMENT_COMPLETED,
} from "../types";
import { Cart, InitialState, Product } from "../types/store.types";
import { Reducer } from "redux";

type CartActions =
  | TaddToCartAction
  | TdeleteFromCart
  | TnewCardInfo
  | ToggleCartDrawer
  | TogglePaymentModal
  | TogglePaymentCompleted;

const initialState: InitialState = {
  products: [
    {
      id: "1",
      name: "Fjallraven - Foldsack No. 1 Backpack",
      price: 100,
      description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
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

export const cartReducer: Reducer<InitialState, CartActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ADD_TO_CART: {
      let newItem = state.products.find(
        (product) => product.id === action.payload
      );
      let itemInCart = state.cart.find((item) => item.id === newItem?.id);

      return itemInCart
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === newItem?.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: [...state.cart, { ...(newItem as Product), quantity: 1 }],
          };
    }
    case REMOVE_ONE_FROM_CART: {
      let itemToDelete = state.cart.find(
        (i) => i.id === action.payload
      ) as Cart;

      return itemToDelete.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload),
          };
    }
    case NEW_CARD_INFO: {
      return {
        ...state,
        cardInformation: action.payload,
      };
    }
    case TOGGLE_CART_DRAWER: {
      return {
        ...state,
        isDrawerCartOpen: action.payload,
      };
    }
    case TOGGLE_PAYMENT_MODAL: {
      return {
        ...state,
        isModalPaymentOpen: action.payload,
      };
    }
    case TOGGLE_PAYMENT_COMPLETED: {
      return {
        ...state,
        isPaymentCompleted: action.payload,
      }
    }
    default:
      return state;
  }
};
