import * as types from "./actionTypes";
import * as cartApi from "../../api/cartApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function addCartSuccess(cart) {
  return { type: types.ADD_TO_CART_SUCCESS, cart };
}

export function addToCart(carts) {
  return function(dispatch) {
    dispatch(beginApiCall());
    return cartApi
      .addToCart(carts)
      .then(cart => {
        dispatch(addCartSuccess(cart));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function getProductSuccess(product) {
  return { type: types.GET_PRODUCT_SUCCESS, product };
}

export function readProduct(id) {
  return function(dispatch) {
    dispatch(beginApiCall());
    return cartApi
      .getProduct(id)
      .then(product => {
        dispatch(getProductSuccess(product));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}
