import React, { useState } from "react";
import { useLoaderData } from "react-router";
import BookCard from "./BookCard";

const AllBooks = () => {
  const booksData = useLoaderData();
  const [books] = useState(booksData || []);
  const [showAvailable, setShowAvailable] = useState(false);
  const [viewType, setViewType] = useState("table"); // Only affects sm and up

  // Filtered books based on quantity
  const filteredBooks = showAvailable
    ? books.filter((book) => book.quantity > 0)
    : books;

  return (
    <div className="mt-30">
      {/* Top Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-center px-4 mt-6 gap-4">
        {/* Filter Button */}
        <button
          onClick={() => setShowAvailable((prev) => !prev)}
          className={`btn ${showAvailable ? "btn-primary" : "btn-outline"}`}
        >
          {showAvailable ? "Show All Books" : "Show Available Books"}
        </button>

        {/* View Type Dropdown (only visible on sm and up) */}
        <select
          value={viewType}
          onChange={(e) => setViewType(e.target.value)}
          className="select select-bordered max-w-xs hidden sm:block"
        >
          <option value="table">Table View</option>
          <option value="card">Card View</option>
        </select>
      </div>

      {/* Small Devices - Always Card View */}
      <div className="sm:hidden px-4 mt-10 space-y-5">
        {filteredBooks.map((book) => (
          <div
            key={book._id}
            className="border border-gray-200 dark:border-gray-700 rounded-xl p-4 shadow-sm bg-base-100"
          >
            <div className="flex items-center gap-4 mb-2">
              <img
                src={book.image}
                alt={book.name}
                className="h-14 w-14 rounded-xl object-cover"
              />
              <div>
                <h2 className="text-lg font-semibold">{book.name}</h2>
                <p className="text-sm text-gray-500">{book.category}</p>
              </div>
            </div>
            <p className="font-semibold">{book.author}</p>
            <p className="text-sm mt-1">Quantity: {book.quantity}</p>

            <div className="mt-3">
              <a href={`/updateBook/${book._id}`}>
                <button className="btn w-full bg-blue-500 hover:bg-blue-700">
                  Update
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Medium and Large Devices - Toggle between table and card */}
      {viewType === "table" && (
        <div className="px-4 mt-10 hidden sm:block">
          <table className="table">
            <thead>
              <tr>
                <th>Picture</th>
                <th>Book Name</th>
                <th>Category</th>
                <th>Author</th>
                <th>Quantity</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filteredBooks.map((book) => (
                <BookCard key={book._id} book={book} />
              ))}
            </tbody>
          </table>
        </div>
      )}

      {viewType === "card" && (
        <div className="px-4 mt-10 hidden sm:grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {filteredBooks.map((book) => (
            <div
              key={book._id}
              className="border border-gray-200 dark:border-gray-700 rounded-xl p-4 shadow-sm bg-base-100"
            >
              <div className="flex items-center gap-4 mb-2">
                <img
                  src={book.image}
                  alt={book.name}
                  className="h-14 w-14 rounded-xl object-cover"
                />
                <div>
                  <h2 className="text-lg font-semibold">{book.name}</h2>
                  <p className="text-sm text-gray-500">{book.category}</p>
                </div>
              </div>
              <p className="font-semibold">{book.author}</p>
              <p className="text-sm mt-1">Quantity: {book.quantity}</p>

              <div className="mt-3">
                <a href={`/updateBook/${book._id}`}>
                  <button className="btn w-full bg-blue-500 hover:bg-blue-700">
                    Update
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllBooks;

// update 