import { useState } from "react";
import Quantity from "./Quantity";

const Cards = ({ product, handleAddToCart }) => {
  const [showModal, setShowModal] = useState(false);
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <div className="group relative" onClick={() => setShowModal(true)}>
        <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
          <img src={product.image}
            alt={product.title}
            className="w-full h-full object-center object-cover lg:w-full lg:h-full" />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
                {product.title}
            </h3>
            <p className="mt-1 text-sm text-gray-500">{product.category}</p>
          </div>
          <p className="text-sm font-medium text-gray-900 whitespace-nowrap">
            {product.price} €
          </p>
        </div>
      </div>
      {showModal ? (
        <>
          <div className="justify-center items-center md:flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5">
                  <h3 className="text-2xl font-semibold text-green-600">{product.title}</h3>
                </div>
                {/*body*/}
                <div className="relative p-3 flex-auto">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="w-full p-3">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="h-full object-center mx-auto lg:max-h-72"
                      />
                    </div>
                    <div className="w-full p-3">
                      <p className="my-4 text-gray-500 text-lg leading-relaxed font-serif">
                        {product.description}
                      </p>
                      <Quantity
                      count={count}
                      increment={increment}
                      decrement={decrement} />
                    </div>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-between p-6">
                  <button
                    className="btn-close"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className={`btn-primary ${count > 0 ? "" : " opacity-50 pointer-events-none"}`}
                    type="button"
                    onClick={() => {
                        handleAddToCart(product.id, count);
                        setShowModal(false)
                    }}>
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default Cards;
