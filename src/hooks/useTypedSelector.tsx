import { useSelector } from "react-redux";
import { InitialState } from "../types/store.types";

export function useTypedShoppingSelector() {
    const state = useSelector<{shopping: InitialState}>((state) => state.shopping);
    return state as InitialState
}