import { ADD_TO_CART, REMOVE_ONE_FROM_CART, NEW_CARD_INFO, TOGGLE_CART_DRAWER, TOGGLE_PAYMENT_MODAL, TOGGLE_PAYMENT_COMPLETED } from "../types";
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

export type ToggleCartDrawer = {
    type: typeof TOGGLE_CART_DRAWER,
    payload: boolean
}
export const toggleCartDrawer = (status: boolean): ToggleCartDrawer => ({type: TOGGLE_CART_DRAWER, payload: status});

export type TogglePaymentModal = {
    type: typeof TOGGLE_PAYMENT_MODAL,
    payload: boolean
}
export const togglePaymentModal = (status: boolean): TogglePaymentModal => ({type: TOGGLE_PAYMENT_MODAL, payload: status});

export type TogglePaymentCompleted = {
    type: typeof TOGGLE_PAYMENT_COMPLETED,
    payload: boolean
}
export const togglePaymentCompleted = (status: boolean): TogglePaymentCompleted => ({type: TOGGLE_PAYMENT_COMPLETED, payload: status});