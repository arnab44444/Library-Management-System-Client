import axios from 'axios'
import { useContext } from 'react'
import { useEffect, useState } from 'react'
import { AuthContext } from '../../Provider/AuthProvider'
import BorrowCard from './BorrowCard'

const MyBorrow = () => {
  const { user } = useContext(AuthContext)
  const [orders, setOrders] = useState([]);

  
  useEffect(() => {
    axios(`http://localhost:3000/my-orders/${user?.email}`)
      .then(data => {
        console.log(data?.data)
        setOrders(data?.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [user])
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 py-12'>
        {/* Coffee Cards */}
        {orders.map(book => (
          <BorrowCard key={book._id} book={book} />
        ))}
      </div>
    </div>
  )
}

export default MyBorrow