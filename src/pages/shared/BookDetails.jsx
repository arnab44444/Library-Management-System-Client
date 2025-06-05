import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import { toast } from "react-toastify";

const BookDetails = () => {
  const data = useLoaderData();
  const { user } = useContext(AuthContext);

  const [book, setBook] = useState(data);
  const [hasBorrowed, setHasBorrowed] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const {
    _id,
    image,
    name,
    quantity,
    author,
    category,
    description,
    rating,
    content,
  } = book;

  const returnDate = new Date();
  returnDate.setDate(returnDate.getDate() + 15);
  const returnDateStr = returnDate.toISOString().split("T")[0];

  useEffect(() => {
    if (user?.email) {
      axios
        .get(`http://localhost:3000/check-borrowed/${_id}?email=${user.email}`)
        .then((res) => {
          setHasBorrowed(res.data.hasBorrowed);
        })
        .catch((err) => console.error(err))
        .finally(() => setLoading(false));
    }
  }, [user, _id]);

  const handleOrder = () => {
    setShowModal(true);
  };

  const confirmOrder = () => {
    
    const orderInfo = {
      bookId: _id,
        borowwerEmail: user.email,
    };

    axios
      .post(`http://localhost:3000/place-order/${_id}`, 
        orderInfo

      )
      .then(() => {
        toast.success("Borrowed successfully");
        setBook((prev) => ({
          ...prev,
          quantity: prev.quantity - 1,
        }));
        setHasBorrowed(true);
        setShowModal(false);
      })
      .catch((err) => {
        toast.error(err.response?.data?.message || "Something went wrong");
      });
  };

  return (
    <div className="min-h-screen bg-base-200 py-10 px-4">
      <div className="max-w-5xl mx-auto bg-base-100 shadow-xl rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-6 p-6 md:p-10">
        <div className="w-full">
          <img
            src={image}
            alt={name}
            className="w-full h-100 rounded-xl shadow-lg"
          />
        </div>

        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-primary">{name}</h1>
          <div className="badge badge-secondary">{category}</div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            by <span className="font-semibold">{author}</span>
          </p>

          <p className="text-base text-justify">{description}</p>

          <div className="flex items-center gap-4">
            <p className="font-medium">
              Available:{" "}
              <span className="text-success font-semibold">{quantity}</span>
            </p>
            <p className="font-medium">
              Rating: <span className="text-warning">{"⭐".repeat(rating)}</span>
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mt-6 mb-2 text-neutral">
              About This Book
            </h2>
            <p className="text-sm text-justify">{content}</p>
          </div>

          <button
            onClick={handleOrder}
            className="btn btn-primary mt-4 w-full md:w-auto"
            disabled={hasBorrowed || quantity <= 0 || loading}
          >
            {hasBorrowed
              ? "Already Borrowed"
              : quantity <= 0
              ? "Out of Stock"
              : "Borrow Now"}
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0  bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-base-100 p-6 rounded-lg shadow-xl w-96 space-y-4">
            <h2 className="text-xl font-bold mb-4">Confirm Borrow</h2>
            <p><strong>Name:</strong> {user?.displayName || "N/A"}</p>
            <p><strong>Email:</strong> {user?.email}</p>
            <p><strong>Return Date:</strong> {returnDateStr}</p>

            <div className="flex justify-end gap-2 mt-4">
              <button onClick={() => setShowModal(false)} className="btn btn-ghost">
                Cancel
              </button>
              <button onClick={confirmOrder} className="btn btn-primary">
                Confirm Borrow
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookDetails;
