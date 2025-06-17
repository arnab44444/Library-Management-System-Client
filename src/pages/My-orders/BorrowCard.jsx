import { useState } from "react";
import Swal from "sweetalert2";

const BorrowCard = ({ book, orders, setOrders }) => {
  const { _id, name, author, quantity, image, category } = book;
  const [books, setBooks] = useState(book);

  const handleReturn = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You can borrow the book again if it's available.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, return it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://library-server-self-theta.vercel.app/return_book/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Returned!",
                text: "Your book has been returned.",
                icon: "success",
              });

              setBooks((prev) => ({
                ...prev,
                quantity: prev.quantity + 1,
              }));

              const remainingOrders = orders.filter((book) => book._id !== _id);
              setOrders(remainingOrders);
            }
          });
      }
    });
  };

  return (
    <div className="card w-full md:w-80 bg-base-100 dark:bg-neutral shadow-lg border border-base-300 dark:border-neutral-content rounded-2xl overflow-hidden hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
      {/* Book Image */}
      <figure className="h-56 bg-base-200 dark:bg-neutral-focus object-cover">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
        />
      </figure>

      {/* Book Info */}
      <div className="p-5 space-y-2 text-base-content dark:text-neutral-content">
        <h2 className="text-lg font-bold text-primary dark:text-secondary">{name}</h2>
        <p className="text-sm">
          <span className="font-semibold">Author:</span> {author}
        </p>
        <p className="text-sm">
          <span className="font-semibold">Category:</span> {category}
        </p>
        <p className="text-sm">
          <span className="font-semibold">Available:</span> {quantity}
        </p>

        <button
          onClick={() => handleReturn(_id)}
          className="btn btn-error btn-sm w-full mt-3"
        >
          Return Book
        </button>
      </div>
    </div>
  );
};

export default BorrowCard;
