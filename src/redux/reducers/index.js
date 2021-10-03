import { combineReducers } from "redux";
import products from "./productReducer";
import cart from "./cartReducer";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
    cart,
    products,
    apiCallsInProgress
});

export default rootReducer;
