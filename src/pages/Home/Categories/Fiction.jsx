import React, { useState } from 'react';
import Card from './Card';
import { useLoaderData } from 'react-router';

const Fiction = () => {
    const fiction = useLoaderData();
    console.log(fiction)

    const [books] = useState(history || []);
    
      return (
        <div className=''>
          <div className="my-10 grid mx-5 sm:grid-cols-1  lg:grid-cols-3 gap-5 md:grid-cols-2">
            {books.map((book) => (
              <Card key={book._id} book={book} />
            ))}
          </div>
        </div>
      );
};

export default Fiction;