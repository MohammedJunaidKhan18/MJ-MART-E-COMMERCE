import React from "react";
import { Link } from "react-router-dom";
import ProductCategory from "./ProductCategory";
import TopRated from "./TopRated";

function Home() {
  const categories = ["beauty", "fragrances", "furniture", "groceries"];

  return (
    <div className="min-h-screen px-4 md:px-10 lg:px-30 py-10 bg-gray-50">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-center  md:justify-between mt-5 mb-10">
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h1 className="text-3xl font-bold text-gray-700">Welcome to</h1>
          <h1 className="text-5xl text-gray-800 font-bold pt-2 mt-1 flex   items-center gap-3 ">
            MJ-MART
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-12"
            >
              <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
            </svg>
          </h1>

          <p className="text-gray-800 text-xl mt-3">
            Discover amazing products at unbeatable prices. Start shopping now!
          </p>
        </div>

        {/* Browse Products Button */}
        <Link to="/products">
          <button className="bg-gray-700 text-white py-3 px-8 cursor-pointer rounded-lg hover:bg-gray-900 hover:scale-115 transition-transform duration-300 flex items-center space-x-2">
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
            <span>Browse Products</span>
          </button>
        </Link>
      </div>

      {/* Shop by Category Section */}
      <section className="px-0">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 pt-4 text-start">
          Shop by Category
        </h2>
        
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-3 gap-5">
          {categories.map((category) => (
            <ProductCategory key={category} category={category} />
          ))}
        </div>
      </section>

      {/* Top Rated Products Section */}
      <TopRated />
    </div>
  );
}

export default Home;
