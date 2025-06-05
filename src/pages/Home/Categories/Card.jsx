import React from 'react';
import { Link } from 'react-router';

const Card = ({ book }) => {
  const { _id, image, name, category, author, rating, quantity } = book;

  return (
    <div className="card bg-base-100 w-96 shadow-sm ">
      <figure>
        <img
          src={image}
          alt={name}
          className="h-80 w-full "
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="text-sm text-gray-600">
          <span className="font-semibold">Author:</span> {author}<br />
          <span className="font-semibold">Category:</span> {category}<br />
          <span className="font-semibold">Rating:</span> {rating}⭐<br />
          <span className="font-semibold">Quantity:</span> {quantity}
        </p>
        <div className="card-actions justify-end">
          <Link to={`/bookDetails/${_id}`}>
            <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};


export default Card;