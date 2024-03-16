import { TaddToCartAction, TdeleteFromCart, TnewCardInfo, ToggleCartDrawer, TogglePaymentModal } from "../actions";
import { ADD_TO_CART, REMOVE_ONE_FROM_CART, NEW_CARD_INFO, TOGGLE_CART_DRAWER, TOGGLE_PAYMENT_MODAL } from "../types";
import { Cart, InitialState, Product } from "../types/store.types";
import { Reducer } from "redux";

type CartActions = TaddToCartAction | TdeleteFromCart | TnewCardInfo | ToggleCartDrawer | TogglePaymentModal;

const initialState: InitialState = {
  products: [
    {
      id: "1",
      name: "Product 1",
      price: 100,
      description: "Product 1 description lorem ipsum dolor",
      imageSrc: "https://via.placeholder.com/600/d32776",
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
        cardInformation: action.payload
      }
    }

    case TOGGLE_CART_DRAWER: {
      return {
        ...state,
        isDrawerCartOpen: action.payload
      }
    }
    case TOGGLE_PAYMENT_MODAL: {
      return {
        ...state,
        isModalPaymentOpen: action.payload
      }
    }
    default:
      return state;
  }
};
