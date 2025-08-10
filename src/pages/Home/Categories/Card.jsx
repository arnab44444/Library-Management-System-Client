import React from 'react';
import { Link } from 'react-router';

const Card = ({ book }) => {
  const { _id, image, name, category, author, rating, quantity } = book;

  return (
    <div className="card w-80 sm:w-96 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 shadow-md rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
      
      {/* Image */}
      <figure className="relative h-80 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </figure>

      {/* Card content */}
      <div className="px-6 py-4">
        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
          {name}
        </h2>

        <div className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
          <p><strong>Author:</strong> {author}</p>
          <p><strong>Category:</strong> {category}</p>
          <p><strong>Rating:</strong> {rating} ⭐</p>
          <p><strong>Quantity:</strong> {quantity}</p>
        </div>

        {/* Full width button */}
        <div className="mt-4">
          <Link to={`/bookDetails/${_id}`} className="block">
            <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg py-2 shadow-sm transition-colors duration-300">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
