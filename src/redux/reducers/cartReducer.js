import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function productReducer(state = initialState.cart, action) {
  const newState = { ...state };
  switch (action.type) {
    case types.ADD_TO_CART_SUCCESS:
      newState.id = action.cart.id;
      newState.userId = action.cart.userId;
      newState.date = action.cart.date;
      newState.products = action.cart.products;
      return newState;
    case types.GET_PRODUCT_SUCCESS:
      let product = [...newState.products.filter(item=> item.productId == action.product.id).map(value => Object.assign({}, value))];
      if(product.length > 0){
        product[0].product = action.product;
      }
      newState.buying = [...newState.buying,product[0]]
      return newState;
    default:
      return state;
  }
}
