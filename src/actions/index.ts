import { ADD_TO_CART } from "../types";

export type addToCartAction = {
    type: typeof ADD_TO_CART
    payload: string
}

export const addToCart = (id: string): addToCartAction => ({type: ADD_TO_CART, payload: id});