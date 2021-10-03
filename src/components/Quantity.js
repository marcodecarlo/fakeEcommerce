import React from "react";


const Quantity = ({count, decrement, increment}) => {
  
  return (
    <div>
      <p>Set the quantity</p>
      <div className="flex justify-center items-center">
        <button
          className="p-2 w-10 bg-gray-300 text-purple-600 text-center cursor-pointer"
          onClick={decrement}
        >
          &mdash;
        </button>
        <input
          className="outline-none select-none text-2xl p-2 w-10 text-center"
          type="text"
          value={count}
          readonly
        />
        <button
          className="p-2 w-10 bg-gray-300 text-purple-600 text-center cursor-pointer"
          onClick={increment}
        >
          &#xff0b;
        </button>
      </div>
    </div>
  );
};

export default Quantity;
