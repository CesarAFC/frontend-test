import { ADD_TO_CART, REMOVE_ONE_FROM_CART, NEW_CARD_INFO } from "../types";
import { CardInformation } from "../types/store.types";

export type TaddToCartAction = {
    type: typeof ADD_TO_CART
    payload: string
}

export const addToCart = (id: string): TaddToCartAction => ({type: ADD_TO_CART, payload: id});

export type TdeleteFromCart = {
    type: typeof REMOVE_ONE_FROM_CART
    payload: string
}
export const deleteFromCart = (id: string): TdeleteFromCart => ({ type: REMOVE_ONE_FROM_CART, payload: id })

export type TnewCardInfo = {
    type: typeof NEW_CARD_INFO,
    payload: CardInformation,
}
export const newCardInfo = (card: CardInformation): TnewCardInfo => ({type: NEW_CARD_INFO, payload: card})