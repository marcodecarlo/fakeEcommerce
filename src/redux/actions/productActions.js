import * as types from "./actionTypes";
import * as productApi from "../../api/productApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadProductSuccess(product) {
  return { type: types.LOAD_PRODUCT_SUCCESS, product };
}

export function loadProduct() {
    debugger
  return function(dispatch) {
    dispatch(beginApiCall());
    return productApi
      .getProducts()
      .then(products => {
        dispatch(loadProductSuccess(products));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

