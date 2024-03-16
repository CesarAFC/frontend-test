import { TaddToCartAction, TdeleteFromCart, TnewCardInfo } from "../actions";
import { ADD_TO_CART, REMOVE_ONE_FROM_CART, NEW_CARD_INFO } from "../types";
import { CardInformation, Product } from "../types/store.types";
import { Reducer } from "redux";

interface Cart extends Product {
  quantity: number;
}

type InitialState = {
  products: Product[];
  cart: Cart[];
  cardInformation: CardInformation;
};

type CartActions = TaddToCartAction | TdeleteFromCart | TnewCardInfo;

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
    default:
      return state;
  }
};
