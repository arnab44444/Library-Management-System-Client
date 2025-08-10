import React from "react";

import Swal from "sweetalert2";

import axios from "axios";

const AddBook = () => {

    //const {user} = useContext(AuthContext);

  const handleAddBook = (e) => {
    e.preventDefault();
    const form = e.target;

    const formData = new FormData(form);
    const newBook = Object.fromEntries(formData.entries());

    console.log(newBook)

    // fetch("http://localhost:3000/books", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(newBook),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     if (data.insertedId) {

    axios.post('http://localhost:3000/books', newBook)
      .then((res) => {
        console.log(res);

        if (res.data.insertedId) {
          Swal.fire({
            title: "Book added successfully!",
            icon: "success",
            confirmButtonText: "OK",
          });
          form.reset();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      
      <div className="p-4 bg-gray-300">
        <div className="p-12 text-center space-y-4">
          <h1 className="text-3xl font-bold text-blue-600">Add Book</h1>
          <p>
            Books are a source of knowledge and imagination. They can teach,
            entertain, and inspire. Every book holds a world of information that
            enhances our understanding and enriches our lives.
          </p>
        </div>

{/* onSubmit={handleAddBook} */}
        <form onSubmit={handleAddBook} >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Image URL */}
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Image URL</label>
              <input
                type="text"
                name="image"
                required
                className="input w-full"
                placeholder="Enter book cover image URL"
              />
            </fieldset>

            {/* Book Name */}
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Book Name</label>
              <input
                type="text"
                name="name"
                required
                className="input w-full"
                placeholder="Title of the book"
              />
            </fieldset>

            {/* Quantity */}
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Quantity</label>
              <input
                type="number"
                name="quantity"
                required
                className="input w-full"
                placeholder="Number of copies"
              />
            </fieldset>

            {/* Author Name */}
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Author Name</label>
              <input
                type="text"
                name="author"
                required
                className="input w-full"
                placeholder="Author of the book"
              />
            </fieldset>

            {/* Category */}
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Category</label>
              <select name="category" required className="select w-full">
                <option disabled selected>
                  Select category
                </option>
                <option>Novel</option>
                <option>Thriller</option>
                <option>History</option>
                <option>Fiction</option>
              </select>
            </fieldset>

            {/* Rating */}
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Rating (1-5)</label>
              <input
                type="number"
                name="rating"
                min="1"
                max="5"
                required
                className="input w-full"
                placeholder="Enter book rating"
              />
            </fieldset>
          </div>

          {/* Book Content */}
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border my-6 p-4">
            <label className="label">Book Content</label>
            <input
              type="text"
              name="content"
              required
              className="input w-full"
              placeholder="Book Content"
            />
          </fieldset>

          {/* Short Description */}
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border my-6 p-4">
            <label className="label">Short Description</label>
            <input
              type="text"
              name="description"
              required
              className="input w-full"
              placeholder="A brief description of the book"
            />
          </fieldset>

          

          {/* Add Book Button */}
          <input
            type="submit"
            className="btn w-full bg-blue-500 hover:bg-blue-800 hover:text-white"
            value="Add Book"
          />

          {/* Static Book Content Section */}
          <div className="mt-6 p-6 bg-white rounded shadow">
            <h2 className="text-xl font-bold mb-2">About Books</h2>
            <p>
              Books open the doors to knowledge and creativity. They allow us to
              explore different worlds, cultures, and ideas without ever leaving
              our seat. Reading develops critical thinking and builds empathy.
            </p>
          </div>
        </form>
      </div>
      
    </div>
  );
};

export default AddBook;
