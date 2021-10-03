import { handleResponse, handleError } from "./apiUtils";

export function getProducts() {
  return fetch("https://fakestoreapi.com/products")
    .then(handleResponse)
    .catch(handleError);
}

export function getProduct(id) {
    return fetch("https://fakestoreapi.com/products/"+id)
      .then(handleResponse)
      .catch(handleError);
  }