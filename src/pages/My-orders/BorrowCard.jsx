import { Link } from "react-router";
import Swal from "sweetalert2";

const BorrowCard = ({ book, orders, setOrders }) => {
  const { _id, name, author, quantity, image, category } = book;

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
        fetch(`https://library-server-self-theta.vercel.app/return_book/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Returned!",
                text: "Your book has been returned.",
                icon: "success",
              });
              const remainingOrders = orders.filter((book) => book._id !== _id);
              setOrders(remainingOrders);
            }
          });
      }
    });
  };

  return (
    <div className="card card-side bg-base-100 shadow-md border rounded-xl p-4 flex flex-col md:flex-row items-center gap-4">
      {/* Image */}
      <figure className="w-full md:w-40 h-40 overflow-hidden rounded-xl">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </figure>

      {/* Content */}
      <div className="flex-1 w-full text-base-content">
        <h2 className="text-lg font-bold text-primary">{name}</h2>
        <p className="text-sm">
          <span className="font-semibold">Author:</span> {author}
        </p>
        <p className="text-sm">
          <span className="font-semibold">Category:</span> {category}
        </p>
        <p className="text-sm">
          <span className="font-semibold">Quantity:</span> {quantity}
        </p>
      </div>

      {/* Actions */}
      <div className="md:self-start w-full md:w-auto">
        <button onClick={() => handleReturn(_id)} className="btn btn-error btn-sm w-full">
          Return Book
        </button>
      </div>
    </div>
  );
};

export default BorrowCard;
