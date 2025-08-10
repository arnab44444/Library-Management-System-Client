import React, { useContext, useEffect, useState } from "react";
import { FaBook, FaBookReader, FaCheckCircle } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";

const DashboardHome = () => {
  const { user } = useContext(AuthContext);
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const [totalBooksCount, setTotalBooksCount] = useState(0);

  useEffect(() => {
    if (!user) return;

    async function fetchData() {
      try {
        const token = await user.getIdToken();

        // total books
        const booksRes = await fetch("http://localhost:3000/books");
        const booksData = await booksRes.json();
        setTotalBooksCount(booksData.length);

        // borrowed books (with full book info included by backend)
        const borrowRes = await fetch(`http://localhost:3000/my-orders?email=${user.email}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const borrowData = await borrowRes.json();
        setBorrowedBooks(borrowData);
      } catch (error) {
        console.error("Error fetching data:", error);
        setBorrowedBooks([]);
        setTotalBooksCount(0);
      }
    }
    fetchData();
  }, [user]);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-extrabold text-center text-indigo-700 mb-10">
        Welcome, {user?.displayName || "User"}
      </h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Total Books */}
        <div className="bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 text-white rounded-xl shadow-lg p-8 flex items-center gap-6 hover:scale-105 transform transition-transform duration-300 cursor-pointer">
          <FaBook className="text-4xl" />
          <div>
            <h2 className="text-2xl font-semibold">Total Books</h2>
            <p className="text-4xl font-bold">{totalBooksCount}</p>
          </div>
        </div>

        {/* Borrowed Books */}
        <div className="bg-gradient-to-r from-green-500 via-lime-500 to-yellow-400 text-white rounded-xl shadow-lg p-8 flex items-center gap-6 hover:scale-105 transform transition-transform duration-300 cursor-pointer">
          <FaBookReader className="text-4xl" />
          <div>
            <h2 className="text-2xl font-semibold">Borrowed Books</h2>
            <p className="text-4xl font-bold">{borrowedBooks.length}</p>
          </div>
        </div>
      </div>

      {/* Borrowed Books List */}
      <div>
        <h2 className="text-4xl font-bold text-center text-indigo-700 mb-6">📚 Your Borrowed Books</h2>
        {borrowedBooks.length === 0 ? (
          <p className="text-gray-600 text-center">No borrowed books found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {borrowedBooks.map((book) => (
              <div
                key={book._id}
                className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              >
                <img
                  src={book.image || "https://via.placeholder.com/120x160?text=No+Image"}
                  alt={book.name}
                  className="w-28 h-36 object-cover rounded-md mb-3"
                />
                <h3 className="font-semibold text-gray-400 text-sm text-center">{book.name}</h3>
                {/* <p className="text-sm text-gray-600 mt-1">by {book.author}</p> */}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* User Profile Card */}
      <div className="bg-white rounded-xl shadow-xl max-w-md mx-auto p-8 flex flex-col items-center gap-5 border border-gray-200 mt-16">
        <img
          src={user?.photoURL || "https://i.ibb.co/ZYW3VTp/brown-brim.png"}
          alt="User Profile"
          className="w-28 h-28 rounded-full object-cover border-4 border-indigo-600 shadow-md"
        />
        <h3 className="text-3xl font-bold text-indigo-700">{user?.displayName || "Unknown User"}</h3>
        <p className="text-gray-600">Email: <span className="font-medium">{user?.email}</span></p>
        <p className="text-gray-600">Account Type: <span className="font-medium">Regular User</span></p>
        <p className="text-gray-600">Member Since: <span className="font-medium">June 2024</span></p>
        <p className="flex items-center gap-2 text-green-600 font-semibold">
          Verified <FaCheckCircle />
        </p>
      </div>
    </div>
  );
};

export default DashboardHome;

// update dashboard home