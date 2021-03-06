import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function productReducer(state = initialState.products, action) {
    const newState = { ...state };
  switch (action.type) {
    case types.LOAD_PRODUCTS_SUCCESS:
        newState.all = action.products;
      return  newState;

    default:
      return newState;
  }
}
