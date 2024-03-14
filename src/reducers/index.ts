//centralizar todos los reducer, todos se deben almacenar en un solo lugar 
import {combineReducers} from 'redux';
import { cartReducer } from './CartReducer';

const reducer = combineReducers({
    shopping: cartReducer,
});

export default reducer;