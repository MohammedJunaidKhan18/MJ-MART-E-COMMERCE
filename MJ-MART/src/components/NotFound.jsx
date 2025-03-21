import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="container mx-auto  min-h-screen px-30 py-10 bg-gray-50 text-center">
      {/* Error Message */}
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-gray-600 mb-6">The page you're looking for doesn't exist.</p>
      
      {/* Back to Home Button with SVG Icon */}
      <Link to="/" className="inline-flex items-center bg-gray-700 text-white py-2 px-4 rounded hover:bg-gray-900 hover:scale-110 transition-transform duration-300">
        {/* SVG Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" className="size-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" d="M16.5 3.75a1.5 1.5 0 0 1 1.5 1.5v13.5a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V15a.75.75 0 0 0-1.5 0v3.75a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V5.25a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3V9A.75.75 0 1 0 9 9V5.25a1.5 1.5 0 0 1 1.5-1.5h6ZM5.78 8.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 0 0 0 1.06l3 3a.75.75 0 0 0 1.06-1.06l-1.72-1.72H15a.75.75 0 0 0 0-1.5H4.06l1.72-1.72a.75.75 0 0 0 0-1.06Z" clipRule="evenodd" />
        </svg>
        
        Back to Home
      </Link>
    </div>
  );
}

export default NotFound;
