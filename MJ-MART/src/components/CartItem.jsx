import React from "react";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../store/cartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-4 bg-white shadow-md rounded-lg mb-4">
      
      {/* Product Image & Info */}
      <div className="flex items-center w-full md:w-1/2 mb-4 md:mb-0">
        <img
          src={item.image}
          alt={item.title}
          className="w-24 h-24 object-cover rounded-lg mr-4"
        />
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
          <p className="text-gray-500">${item.price.toFixed(2)} each</p>
        </div>
      </div>

      {/* Quantity Management and Price Section */}
      <div className="w-full md:w-1/2 flex flex-col md:flex-row items-center md:justify-between gap-4">
        
        {/* Quantity Management */}
        <div className="flex items-center">
          <button
            onClick={() => dispatch(decreaseQuantity(item.id))}
            className="w-10 h-10 bg-gray-800 text-white rounded-md text-lg font-bold hover:bg-gray-900"
          >
            −
          </button>
          <span className="mx-4 text-lg font-semibold">{item.quantity}</span>
          <button
            onClick={() => dispatch(increaseQuantity(item.id))}
            className="w-10 h-10 bg-gray-800 text-white rounded-md text-lg font-bold hover:bg-gray-900"
          >
            +
          </button>
        </div>

        {/* Price and Remove Section */}
        <div className="flex flex-col md:flex-col items-center justify-between w-full md:w-auto gap-4">
          <p className="text-xl font-semibold text-gray-800">
            ${(item.price * item.quantity).toFixed(2)}
          </p>
          <button
            onClick={() => dispatch(removeFromCart(item.id))}
            className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                clipRule="evenodd"
              />
            </svg>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
