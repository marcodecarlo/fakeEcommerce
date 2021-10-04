import { handleResponse, handleError } from "./apiUtils";

export function addToCart( carts ) {
  return fetch("https://fakestoreapi.com/carts",{
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(carts)
  })
    .then(handleResponse)
    .catch(handleError);
}

export function getProduct(id) {
  return fetch("https://fakestoreapi.com/products/"+id)
    .then(handleResponse)
    .catch(handleError);
}