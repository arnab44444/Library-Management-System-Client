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
        const booksRes = await fetch("https://library-client-ccb7c.web.app/books");
        const booksData = await booksRes.json();
        setTotalBooksCount(booksData.length);

        // borrowed books
        const borrowRes = await fetch(`https://library-client-ccb7c.web.app/my-orders?email=${user.email}`, {
          headers: { Authorization: `Bearer ${token}` },
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

  const readingTips = [
    "Create a quiet and comfortable reading environment.",
    "Set aside dedicated time for reading daily.",
    "Take notes to remember key points.",
    "Use the Pomodoro technique for better focus.",
    "Take short breaks to refresh your mind.",
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-semibold text-center text-indigo-700 mb-8">
        Welcome, {user?.displayName || "User"}
      </h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {/* Total Books */}
        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white rounded-xl shadow-md p-6 flex items-center gap-5 hover:scale-105 transition-transform duration-300 cursor-pointer">
          <FaBook className="text-3xl" />
          <div>
            <h2 className="text-xl font-semibold">Total Books</h2>
            <p className="text-3xl font-bold">{totalBooksCount}</p>
          </div>
        </div>

        {/* Borrowed Books */}
        <div className="bg-gradient-to-r from-green-500 via-lime-500 to-yellow-400 text-white rounded-xl shadow-md p-6 flex items-center gap-5 hover:scale-105 transition-transform duration-300 cursor-pointer">
          <FaBookReader className="text-3xl" />
          <div>
            <h2 className="text-xl font-semibold">Borrowed Books</h2>
            <p className="text-3xl font-bold">{borrowedBooks.length}</p>
          </div>
        </div>
      </div>

      {/* Borrowed Books List */}
      <div>
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-5">📚 Your Borrowed Books</h2>
        {borrowedBooks.length === 0 ? (
          <p className="text-gray-600 text-center text-sm">No borrowed books found.</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {borrowedBooks.map((book) => (
              <div
                key={book._id}
                className="bg-white rounded-lg shadow-sm p-3 flex flex-col items-center hover:shadow-md transition-shadow duration-200 cursor-pointer"
              >
                <img
                  src={book.image || "https://via.placeholder.com/120x160?text=No+Image"}
                  alt={book.name}
                  className="w-24 h-32 object-cover rounded-md mb-2"
                />
                <h3 className="font-semibold text-gray-500 text-xs text-center truncate w-full">{book.name}</h3>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Book Reading Tips Section */}
      <div className="max-w-md mx-auto mt-14 p-5 bg-indigo-50 rounded-lg shadow-sm border border-indigo-300">
        <h2 className="text-xl font-semibold text-indigo-700 mb-3 text-center">📚 Book Reading Tips</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
          {readingTips.map((tip, idx) => (
            <li key={idx} className="leading-relaxed">
              {tip}
            </li>
          ))}
        </ul>
      </div>

      {/* User Profile Card */}
      <div className="bg-white rounded-xl shadow-lg max-w-md mx-auto p-6 flex flex-col items-center gap-4 border border-gray-200 mt-10">
        <img
          src={user?.photoURL || "https://i.ibb.co/ZYW3VTp/brown-brim.png"}
          alt="User Profile"
          className="w-24 h-24 rounded-full object-cover border-4 border-indigo-600 shadow-sm"
        />
        <h3 className="text-2xl font-semibold text-indigo-700 truncate">{user?.displayName || "Unknown User"}</h3>
        <p className="text-gray-600 text-sm">Email: <span className="font-medium">{user?.email}</span></p>
        <p className="text-gray-600 text-sm">Account Type: <span className="font-medium">Regular User</span></p>
        <p className="text-gray-600 text-sm">Member Since: <span className="font-medium">June 2024</span></p>
        <p className="flex items-center gap-1 text-green-600 font-semibold text-sm">
          Verified <FaCheckCircle />
        </p>
      </div>
    </div>
  );
};

export default DashboardHome;

