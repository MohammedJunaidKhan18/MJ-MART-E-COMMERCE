import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Checkout() {
  const cartItems = useSelector((state) => state.cart.items);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    setOrderPlaced(true);
  };

  if (cartItems.length === 0) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-semibold mb-4">Your cart is empty!</h2>
        <Link to="/" className="text-blue-500 hover:underline">
          Go back to shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 sm:px-10 py-10 bg-gray-50">
      {/* Back to Cart Button */}
      <div className="mb-6">
        <Link to="/cart">
          <button className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 hover:scale-105 transition-transform duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M16.5 3.75a1.5 1.5 0 0 1 1.5 1.5v13.5a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V15a.75.75 0 0 0-1.5 0v3.75a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V5.25a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3V9A.75.75 0 1 0 9 9V5.25a1.5 1.5 0 0 1 1.5-1.5h6ZM5.78 8.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 0 0 0 1.06l3 3a.75.75 0 0 0 1.06-1.06l-1.72-1.72H15a.75.75 0 0 0 0-1.5H4.06l1.72-1.72a.75.75 0 0 0 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
            Back to Cart
          </button>
        </Link>
      </div>

      {/* Checkout Title */}
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Checkout</h2>

      {/* Cart Items and Total */}
      <div className="bg-white p-6 rounded-lg shadow-xl">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6"
          >
            {/* Product Info */}
            <div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-600">
                ${item.price.toFixed(2)} x {item.quantity}
              </p>
            </div>
            {/* Item Total */}
            <p className="text-lg font-semibold text-gray-800 mt-2 sm:mt-0">
              ${(item.price * item.quantity).toFixed(2)}
            </p>
          </div>
        ))}

        {/* Total Price and Place Order Button */}
        <div className="text-right">
          <h3 className="text-xl font-bold">Total: ${totalPrice.toFixed(2)}</h3>
          <button
            onClick={handleCheckout}
            className="mt-6 w-full sm:w-auto bg-gray-800 text-white py-2 px-6 rounded cursor-pointer hover:bg-gray-900 hover:scale-105 transition-transform duration-300"
          >
            Place Order
          </button>
        </div>
      </div>

      {/* Order Confirmation */}
      {orderPlaced && (
        <div className="flex gap-2 mt-6 p-4 justify-center items-center text-gray-800 text-xl font-bold bg-green-100 rounded-lg shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12c6.627 0 12-5.373 12-12S18.627 0 12 0Zm5.293 9.293a1 1 0 0 1 0 1.414l-7 7a1 1 0 0 1-1.414 0l-3-3a1 1 0 1 1 1.414-1.414l2.293 2.293 6.293-6.293a1 1 0 0 1 1.414 0Z" />
          </svg>
          Order placed successfully!
        </div>
      )}
    </div>
  );
}

export default Checkout;
