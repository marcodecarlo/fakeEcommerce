import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function productReducer(state = initialState.cart, action) {
  switch (action.type) {
    case types.ADD_TO_CART_SUCCESS:
      return action.cart;
    default:
      return state;
  }
}
