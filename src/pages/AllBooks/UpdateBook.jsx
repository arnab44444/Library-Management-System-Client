import React, { useState } from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";


const UpdateBook = () => {
  const data = useLoaderData();

  const [name, setName] = useState(data?.name);
  const [author, setAuthor] = useState(data?.author);
  const [category, setCategory] = useState(data?.category);
  const [description, setDescription] = useState(data?.description);
  const [image, setImage] = useState(data?.image);

  const handleUpdateBook = (e) => {
    e.preventDefault();

    const updatedBook = {
      name,
      author,
      category,
      description,
      image,
    };

    fetch(`https://library-client-ccb7c.web.app/book/${data?._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedBook),
    })
      .then((res) => res.json())
      .then((resData) => {
        if (resData?.modifiedCount > 0) {
          Swal.fire({
            position: "top",
            icon: "success",
            title: "Book updated successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div>

      <div className="p-4 bg-gray-300">
        <div className="p-12 text-center space-y-4">
          <h1 className="text-3xl font-bold text-green-500">Update Book</h1>
        </div>

        <form onSubmit={handleUpdateBook}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Title</label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input w-full"
                placeholder="Book Title"
              />
            </fieldset>

            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Author</label>
              <input
                type="text"
                name="author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="input w-full"
                placeholder="Author Name"
              />
            </fieldset>

            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Category</label>
              <input
                type="text"
                name="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="input w-full"
                placeholder="Category"
              />
            </fieldset>

            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Image URL</label>
              <input
                type="text"
                name="image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                className="input w-full"
                placeholder="Image URL"
              />
            </fieldset>
          </div>

          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border my-6 p-4">
            <label className="label">Description</label>
            <textarea
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="textarea w-full"
              placeholder="Description"
            />
          </fieldset>

          <input
            type="submit"
            className="btn w-full bg-blue-500 hover:bg-blue-800 hover:text-white"
            value="Submit"
          />
        </form>
      </div>

    </div>
  );
};

export default UpdateBook;
