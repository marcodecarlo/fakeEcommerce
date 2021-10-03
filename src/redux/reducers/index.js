import { combineReducers } from "redux";
import product from "./productReducer";
import cart from "./cartReducer";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
    cart,
    product,
    apiCallsInProgress
});

export default rootReducer;
