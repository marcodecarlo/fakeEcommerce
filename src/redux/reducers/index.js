import { combineReducers } from "redux";
import product from "./productReducer";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
    product,
    apiCallsInProgress
});

export default rootReducer;
