import React, { useState } from "react";


const Quantity = () => {
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
