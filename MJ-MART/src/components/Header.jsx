import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const cartItems = useSelector((state) => state.cart.items);
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-gray-800 text-white p-5 md:p-8 sticky top-0 z-10 shadow-md">
      <nav className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center">
        {/* Logo Section */}
        <Link
          to="/"
          className="text-2xl font-bold flex items-center space-x-2 mb-4 md:mb-0 hover:scale-115 hover:rotate-y-360 transform perspective-500 transition-transform duration-1000"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8 md:w-6 md:h-6"
          >
            <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
          </svg>
          <span>MJ-MART</span>
        </Link>

        {/* Navigation Links */}
        <ul className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-20 text-lg">
          <li className="hover:scale-125 transition-transform duration-300">
            <Link to="/" className="hover:text-gray-200">Home</Link>
          </li>
          <li className="hover:scale-125 transition-transform duration-300">
            <Link to="/products" className="hover:text-gray-200">Products</Link>
          </li>
          <li className="hover:scale-125 transition-transform duration-300 relative">
            <Link to="/cart" className="hover:text-gray-200">
              Cart
              {itemCount > 0 && (
                <span
                  className="absolute -top-2 -right-4 bg-gray-100 font-semibold text-gray-900 rounded-full w-5 h-5 flex items-center justify-center text-xs"
                  aria-label={`Cart has ${itemCount} items`}
                >
                  {itemCount > 99 ? "99+" : itemCount}
                </span>
              )}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
