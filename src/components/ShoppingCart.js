import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faTimes } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as productActions from "../redux/actions/productActions";

const ShoppingCart = ({ products, cart, readProduct }) => {
  const [show, setShow] = useState(false);
  const [productCart, setProductCart] = useState([]);

  useEffect(() => {
    if (Object.keys(cart.products).length > 0) {
      cart.products.forEach(function (element) {
        let productList = products.inCart.filter(
          (item) => item.id == element.productId
        );
        if (productList.length <= 0) {
          setProductCart([...productCart, element]);
        }
      });
    }
  }, []);

  useEffect(() => {
    if (productCart.length > 0) {
      Object.entries(productCart).forEach(([key, value]) => {
        readProduct(value.productId).catch((error) => {
          console.log("error ", error);
        });
      });
    }
  }, [productCart]);

  const openShoppingCart = () => {
    setShow(true);
  };
  const closeShoppingCart = () => {
    setShow(false);
  };

  return (
    <div className="absolute top-20 right-12 z-50">
      <button
        className="bg-trasparent text-green-600 rounded-full h-10 w-10 flex items-center justify-center fixed top-6 right-12 border-green-600 border"
        type="button"
        onClick={() => {
          show ? closeShoppingCart() : openShoppingCart();
        }}
      >
          {show ?
        <FontAwesomeIcon icon={faTimes} />
            :
        <FontAwesomeIcon icon={faShoppingCart} />
          }
      </button>
      {show ? (

        <div className="w-screen max-w-md fixed top-16 right-0 h-full md:top-16 md:right-12 z-50 cart">
          <div className="h-full flex flex-col bg-white shadow-xl">
            <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
              <div className="flex items-start justify-between">
                <h2
                  className="text-lg font-medium text-gray-900 text-green-600 font-sans uppercase"
                  id="slide-over-title"
                >
                  Shopping cart
                </h2>
              </div>

              <div className="flow-root">
                {products.inCart.length > 0 ? (
                  <ul role="list" className="my-1 divide-y divide-gray-200">
                    {products.inCart.length > 0 &&
                      products.inCart.map((ele, index) => (
                        <li className="py-6 flex">
                          <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                            <img
                              src={ele.image}
                              alt={ele.title}
                              className="w-full h-full object-center object-cover"
                            />
                          </div>

                          <div className="ml-4 flex-1 flex flex-col">
                            <div>
                              <div className="flex justify-between text-base font-medium text-gray-900">
                                <h3>
                                  <a href="#">{ele.title}</a>
                                </h3>
                                <p className="ml-4">{ele.price}</p>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                  </ul>
                ) : (
                  <div className="w-full">
                    <p>is empty</p>
                  </div>
                )}
              </div>
            </div>

            {products.inCart.length > 0 && (
              <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <p>Subtotal</p>
                  <p>
                    {parseFloat(products.inCart.reduce(function (a, b) {
                      debugger;
                      return a + b["price"];
                    }, 0)).toFixed(2)} €
                  </p>
                </div>
                <p className="mt-0.5 text-sm text-gray-500">
                  Shipping and taxes calculated at checkout.
                </p>
                <div className="mt-6">
                  <a
                    href="#"
                    className="flex justify-center items-center px-6 py-3 btn-primary"
                  >
                    Checkout
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    products: state.products,
    cart: state.cart,
    loading: state.apiCallsInProgress > 0,
  };
}

const mapDispatchToProps = (dispatch) => ({
  readProduct: bindActionCreators(productActions.readProduct, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
