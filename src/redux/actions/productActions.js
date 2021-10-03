import * as types from "./actionTypes";
import * as productApi from "../../api/productApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadProductsSuccess(products) {
  return { type: types.LOAD_PRODUCTS_SUCCESS, products };
}

export function getProductSuccess(product) {
    return { type: types.GET_PRODUCT_SUCCESS, product };
  }

export function loadProduct() {
  return function(dispatch) {
    dispatch(beginApiCall());
    return productApi
      .getProducts()
      .then(products => {
        dispatch(loadProductsSuccess(products));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}


export function readProduct(id) {
    return function(dispatch) {
      dispatch(beginApiCall());
      return productApi
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
