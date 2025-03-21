import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import useProducts from "../hooks/useProduct";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const { products } = useProducts();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Product not found");
        }
        return response.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      dispatch(
        addToCart({
          id: product.id,
          title: product.title,
          price: product.price,
          image: product.thumbnail,
          quantity: 1,
        })
      );
    }
  };

  // Check product availability
  const isAvailable = products?.find((p) => p.id === parseInt(id))?.stock > 0;

  // Generate Star Rating
  const renderStarRating = (rating) => {
    const totalStars = 5;
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars >= 0.5 ? 1 : 0;
    const emptyStars = totalStars - fullStars - halfStar;

    return (
      <div className="flex items-center">
        {[...Array(fullStars)].map((_, i) => (
          <span key={`full-${i}`} className="text-gray-800 text-2xl">★</span>
        ))}
        {halfStar === 1 && <span className="text-gray-600 text-2xl">★</span>}
        {[...Array(emptyStars)].map((_, i) => (
          <span key={`empty-${i}`} className="text-gray-300 text-2xl">★</span>
        ))}
        <span className="ml-2 text-gray-800 font-semibold">({rating}/5)</span>
      </div>
    );
  };

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (error)
    return <div className="text-center py-10 text-red-500">Error: {error}</div>;

  return (
    <div className="min-h-screen px-4 sm:px-8 md:px-20 lg:px-40 py-10 bg-gray-100">
      {/* Back to Browse Button */}
      <div className="mb-5">
        <Link
          to="/products"
          className="inline-flex items-center gap-2 bg-gray-800 text-white px-4 py-3  rounded hover:bg-gray-900 hover:scale-110 transition-transform duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.5 3.75a1.5 1.5 0 0 1 1.5 1.5v13.5a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V15a.75.75 0 0 0-1.5 0v3.75a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V5.25a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3V9A.75.75 0 1 0 9 9V5.25a1.5 1.5 0 0 1 1.5-1.5h6ZM5.78 8.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 0 0 0 1.06l3 3a.75.75 0 0 0 1.06-1.06l-1.72-1.72H15a.75.75 0 0 0 0-1.5H4.06l1.72-1.72a.75.75 0 0 0 0-1.06Z"
            />
          </svg>
          Back to Browse
        </Link>
      </div>

      {/* Product Details */}
      <div className="bg-white p-5 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Product Image */}
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-80 sm:h-96 object-cover rounded-lg"
          />

          {/* Product Information */}
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
            <p className="text-gray-700 mb-4">{product.description}</p>
            <p className="text-2xl font-semibold mb-4">${product.price}</p>

            {/* Product Rating */}
            <div className="mb-4">
              <span className="text-gray-800 font-bold">Rating: </span>
              {renderStarRating(product.rating)}
            </div>

            {/* Availability Status */}
            <p
              className={`mb-4 ${
                isAvailable ? "text-green-600 font-semibold" : "text-red-500"
              }`}
            >
              {isAvailable ? "In Stock" : "Out of Stock"}
            </p>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              disabled={!isAvailable}
              className={`py-3 px-6 text-lg rounded-lg text-white ${
                isAvailable
                  ? "bg-gray-800 hover:bg-gray-900 hover:scale-110 cursor-pointer transition-transform duration-300"
                  : "bg-red-500 cursor-not-allowed"
              }`}
            >
              {isAvailable ? "Add to Cart" : "Out of Stock"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
