import React, { useState } from "react";

const ShoppingCart = () => {
  const [show, setShow] = useState(false);

  const openShoppingCart = () => {
    setShow(true);
  };
  const closeShoppingCart = () => {
    setShow(false);
  };

  return (
    <div className="absolute top-20 right-12 z-50">
        <button
            className="bg-red-600 text-white rounded-full h-14 w-14 flex items-center justify-center fixed top-6 right-12"
            type="button"
            onClick={() => {
              show ? closeShoppingCart() : openShoppingCart();
            }}
          >
            Carrello
          </button>
      {show ? (
        <div className="w-screen max-w-md">
          <div className="h-full flex flex-col bg-white shadow-xl">
            <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
              <div className="flex items-start justify-between">
                <h2
                  className="text-lg font-medium text-gray-900"
                  id="slide-over-title"
                >
                  Shopping cart
                </h2>
                <div className="ml-3 h-7 flex items-center">
                  <button
                    type="button"
                    className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">Close panel</span>

                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="mt-4">
                <div className="flow-root">
                  <ul role="list" className="my-1 divide-y divide-gray-200">
                    <li className="py-6 flex">
                      <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                        <img
                          src=""
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>

                      <div className="ml-4 flex-1 flex flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>
                              <a href="#">title</a>
                            </h3>
                            <p className="ml-4">price</p>
                          </div>
                        </div>
                        <div className="flex-1 flex items-end justify-between text-sm">
                          <p className="text-gray-500">Qty </p>

                          <div className="flex">
                            <button
                              type="button"
                              className="font-medium text-indigo-600 hover:text-indigo-500"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>

                    
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
              <div className="flex justify-between text-base font-medium text-gray-900">
                <p>Subtotal</p>
                <p>$262.00</p>
              </div>
              <p className="mt-0.5 text-sm text-gray-500">
                Shipping and taxes calculated at checkout.
              </p>
              <div className="mt-6">
                <a href="#"
                  className="flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Checkout
                </a>
              </div>
              
            </div>
          </div>
        </div>
      ) : null}
      </div>
  );
};

export default ShoppingCart;
