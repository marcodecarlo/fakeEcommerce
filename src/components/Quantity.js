import React from "react";


const Quantity = ({count, decrement, increment}) => {
  
  return (
    <div>
      <div className="flex justify-center items-center">
        <button
          className="p-2 w-10 bg-green-600 text-white text-center font-extrabold cursor-pointer rounded-l-full border-green-600 border hover:bg-transparent hover:text-green-600 hover:shadow-lg ease-linear transition-all duration-150"
          onClick={decrement}
        >
          &mdash;
        </button>
        <input
          className="outline-none select-none p-2 w-10 text-center border-green-600 border pointer-events-none"
          type="text"
          value={count}
          readOnly
        />
        <button
          className="p-2 w-10 bg-green-600 text-white text-center font-extrabold cursor-pointer rounded-r-full border-green-600 border hover:bg-transparent hover:text-green-600 hover:shadow-lg ease-linear transition-all duration-150"
          onClick={increment}
        >
          &#xff0b;
        </button>
      </div>
    </div>
  );
};

export default Quantity;
