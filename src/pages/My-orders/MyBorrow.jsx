// import axios from 'axios'
// import { useContext } from 'react'
import { useState } from "react";
//import { AuthContext } from '../../Provider/AuthProvider'
import BorrowCard from "./BorrowCard";
import { Link, useLoaderData } from "react-router";

const MyBorrow = () => {
  //const { user } = useContext(AuthContext)
  // const [orders, setOrders] = useState([]);

  //        const [borrow,setBorrow] = useState(data)

  const initialBook = useLoaderData();

  console.log(initialBook);

  const [orders, setOrders] = useState(initialBook);

  // useEffect(() => {
  //   axios(`http://localhost:3000/my-orders/${user?.email}`)
  //     .then(data => {

  //       console.log(data?.data)
  //       setOrders(data?.data)
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  // }, [user])

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-12">
          {/* Coffee Cards */}
          {orders.map((book) => (
            <BorrowCard
              key={book._id}
              book={book}
              orders={orders}
              setOrders={setOrders}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBorrow;
