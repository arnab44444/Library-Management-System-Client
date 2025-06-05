import React, { useState } from "react";
import { useLoaderData } from "react-router";
import Card from "./Card";

const Novel = () => {
  const novel = useLoaderData();
  console.log(novel);

  const [books, setBooks] = useState(novel || []);

  return (
    <div >
      <div className="my-10 grid  sm:grid-cols-1 lg:grid-cols-3 gap-5 md:grid-cols-2">
        {books.map((book) => (
          <Card key={book._id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Novel;
