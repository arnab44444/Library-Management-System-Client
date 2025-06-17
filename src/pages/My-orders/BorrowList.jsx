import React, { use, useState } from 'react';
import BorrowCard from './BorrowCard';
import { Link } from 'react-router';

const BorrowList = ({myBorrowPromise}) => {

    const initialBook = use(myBorrowPromise);

    console.log(initialBook);


    const [orders, setOrders] = useState(initialBook);


     return (
    <div>
      {orders.length === 0 ? (
        <div className="text-center py-20">
          <h2 className="text-2xl font-bold text-error mb-4">
            No books borrowed yet.
          </h2>
          <p className="text-base-content mb-4">
            Go back to the Home section and borrow your books.
          </p>
          <Link to="/">
            <button className="btn btn-primary">Go to Home</button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-12">
          {/* Coffee Cards */}
          {orders.map((book) => (
            <BorrowCard
              key={book._id}
              book={book}
              orders={orders}
              // (user.accessToken)
              setOrders={setOrders}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default BorrowList;