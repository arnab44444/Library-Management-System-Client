import React from "react";

const About = () => {
  return (
    <div className=" bg-base-200 py-10 px-4">
      <h1 className="text-3xl font-bold py-3 text-center text-blue-700 mb-4">
        About Our Library
      </h1>

      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-6">
        <p className="text-lg text-gray-700 mb-4">
          Welcome to our Library Management System! 📚 This platform is designed
          to make the library experience smooth, smart, and simple. Whether
          you're a student, teacher, or book lover, our website helps you easily
          browse, borrow, and review books.
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>🔍 Search and filter books by category, author, or rating</li>
          <li>📝 Read and write book reviews from real users</li>
          <li>📊 Keep track of book quantity and availability</li>
          <li>👩‍💻 Admin panel for managing books and users easily</li>
          <li>🌐 Accessible anytime, anywhere from any device</li>
        </ul>
        <p className="mt-6 text-gray-700">
          We believe reading is powerful. This system is created to encourage
          easy access to knowledge and support a community of curious minds.
        </p>
      </div>
    </div>
  );
};

export default About;
