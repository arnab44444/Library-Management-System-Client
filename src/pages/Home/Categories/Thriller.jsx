import React, { useState } from "react";
import { useLoaderData } from "react-router";
import Card from "./Card";

const Thriller = () => {
  const thriller = useLoaderData();
  console.log(thriller);

  const [books] = useState(thriller || []);

  return (
    <div>
      <div className="my-10 grid mx-5  sm:grid-cols-1 lg:grid-cols-3 gap-5 md:grid-cols-2">
        {books.map((book) => (
          <Card key={book._id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Thriller;
