import React from 'react';
import { Link } from 'react-router-dom';

function ProductCategory({ category }) {
  // Category images with placeholders
  const images = {
    beauty: '/src/images/beauty.jpg',
    fragrances: '/src/images/fragrances.jpg', 
    furniture: '/src/images/furniture.jpg',
    groceries: '/src/images/groceries.jpg',
  };

  // Fallback image for unknown categories
  const imageUrl = images[category] || 'https://via.placeholder.com/300?text=Category';

  return (
    <div className="bg-white p-0 m-1 rounded-md  text-center hover:scale-110 shadow-2xl transition-transform duration-300">
      {/* Category Image */}
      <img
        src={imageUrl}
        alt={`${category} products`}
        className="w-full h-45 object-cover rounded-md mb-1"
      />

      {/* Category Title */}
      <h2 className="text-xl font-semibold capitalize">{category}</h2>

      {/* Shop Now Button */}
      <Link to={`/products?category=${category}`}>
        <button
          className="bg-gray-800 text-white py-2 px-4 my-4 rounded-lg hover:bg-gray-900 hover:scale-115 cursor-pointer transition-transform duration-300"
          aria-label={`Shop for ${category}`}
        >
          Shop Now
        </button>
      </Link>
    </div>
  );
}

export default ProductCategory;
