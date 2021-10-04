import { handleResponse, handleError } from "./apiUtils";

export function getProducts() {
  return fetch("https://fakestoreapi.com/products")
    .then(handleResponse)
    .catch(handleError);
}

