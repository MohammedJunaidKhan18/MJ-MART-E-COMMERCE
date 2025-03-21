import React, { Suspense, lazy } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CartItem = lazy(() => import("./CartItem"));

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto min-h-screen px-4 sm:px-8 md:px-16 lg:px-30 py-10 bg-gray-50">
      
      {/* Back to Home Button */}
      <div className="mb-6 flex space-x-4">
        <Link to="/">
          <button className="flex gap-2 bg-gray-800 text-white px-4 py-3 rounded hover:bg-gray-900 cursor-pointer hover:scale-105 transition-transform duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M16.5 3.75a1.5 1.5 0 0 1 1.5 1.5v13.5a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V15a.75.75 0 0 0-1.5 0v3.75a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V5.25a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3V9A.75.75 0 1 0 9 9V5.25a1.5 1.5 0 0 1 1.5-1.5h6ZM5.78 8.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 0 0 0 1.06l3 3a.75.75 0 0 0 1.06-1.06l-1.72-1.72H15a.75.75 0 0 0 0-1.5H4.06l1.72-1.72a.75.75 0 0 0 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
            Back to Home
          </button>
        </Link>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold text-gray-800 mb-4 pt-4 text-start">
        Shopping Cart
      </h2>

      {/* Empty Cart */}
      {cartItems.length === 0 ? (
        <div className="text-center">
          <p className="text-gray-500 text-xl md:text-2xl font-bold mt-20 mb-10">
            Your cart is empty
          </p>
          <Link to="/products">
            <button className="flex gap-2 mx-auto bg-gray-800 justify-center text-white px-4 py-3 rounded hover:bg-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                  clipRule="evenodd"
                />
              </svg>
              Browse Products
            </button>
          </Link>
        </div>
      ) : (
        <>
          {/* Lazy Loaded Cart Items */}
          <Suspense
            fallback={
              <div className="text-center py-10">Loading Cart Items...</div>
            }
          >
            <div className="space-y-4">
              {cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
          </Suspense>

          {/* Total and Checkout Section */}
          <div className="mt-10 flex flex-col items-center md:items-end gap-4">
            <p className="text-xl font-semibold">Total: ${total.toFixed(2)}</p>
            <Link to="/checkout">
              <button className="flex items-center gap-2 bg-gray-800 text-white py-3 px-4 mt-3 rounded cursor-pointer hover:bg-gray-900 hover:scale-105 transition-transform duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.502 6h7.128A3.375 3.375 0 0 1 18 9.375v9.375a3 3 0 0 0 3-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 0 0-.673-.05A3 3 0 0 0 15 1.5h-1.5a3 3 0 0 0-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6ZM13.5 3A1.5 1.5 0 0 0 12 4.5h4.5A1.5 1.5 0 0 0 15 3h-1.5Z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625V9.375Zm9.586 4.594a.75.75 0 0 0-1.172-.938l-2.476 3.096-.908-.907a.75.75 0 0 0-1.06 1.06l1.5 1.5a.75.75 0 0 0 1.116-.062l3-3.75Z"
                    clipRule="evenodd"
                  />
                </svg>
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
