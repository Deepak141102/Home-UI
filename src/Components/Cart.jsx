import React, { useContext } from "react";
import { counterContext } from "../Context/context";

const Cart = () => {
  const { cartItems } = useContext(counterContext);

  return (
    <div className="w-full h-[50vh] p-5 bg-gray-100 overflow-y-scroll">
      <h2 className="text-xl font-bold mb-4">Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index} className="flex items-center mb-2">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-10 h-10 mr-3"
              />
              <span>{item.title}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
