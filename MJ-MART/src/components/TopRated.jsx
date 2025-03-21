import React, { useEffect, useState } from 'react';
import ProductItem from './ProductItem';

function TopRated() {
  const [topProducts, setTopProducts] = useState([]);

  useEffect(() => {
    const fetchTopRatedProducts = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        const sortedProducts = data.products
          .sort((a, b) => b.rating - a.rating)
          .slice(0, 4);
        setTopProducts(sortedProducts);
      } catch (error) {
        console.error('Error fetching top-rated products:', error);
      }
    };

    fetchTopRatedProducts();
  }, []);

  return (
    <section className="px-4">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-start">Top Rated Products</h2>
      
      {/* Responsive Grid for Mobile, Tablet, and Desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {topProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default TopRated;
