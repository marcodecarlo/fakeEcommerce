import { handleResponse, handleError } from "./apiUtils";

export function getProducts() {
    debugger;
  return fetch("https://fakestoreapi.com//products")
    .then(handleResponse)
    .catch(handleError);
}