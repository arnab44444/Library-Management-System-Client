import { Link } from "react-router";

const BorrowCard = ({ book }) => {
  const { _id, name, author, quantity, image, category } = book;

  return (
    <div className="card card-side bg-base-100 shadow-md border rounded-xl p-4 flex flex-col md:flex-row items-center gap-4">
      {/* Image */}
      <figure className="w-full md:w-40 h-40 overflow-hidden rounded-xl">
        <img src={image} alt={name} className="w-full h-full" />
      </figure>

      {/* Content */}
      <div className="flex-1 w-full">
        <h2 className="text-lg font-bold text-primary">{name}</h2>
        <p className="text-sm text-neutral">
          <span className="font-semibold">Author:</span> {author}
        </p>
        <p className="text-sm text-neutral">
          <span className="font-semibold">Category:</span> {category}
        </p>
        <p className="text-sm text-neutral">
          <span className="font-semibold">Quantity:</span> {quantity}
        </p>
      </div>

      {/* Actions */}
      <div className="md:self-start w-full md:w-auto">
        <button className="btn btn-error btn-sm w-full">Cancel Order</button>
      </div>
    </div>
  );
};

export default BorrowCard;
