import React from "react";
import { Link } from "react-router";

const Categories = () => {

  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="my-10 font-bold text-2xl text-center">Categories</h2>
      <div className="grid sm:grid-cols-1  lg:grid-cols-4 gap-5 md:grid-cols-2">
        <div className="card bg-base-100  shadow-sm border">
          <figure>
            <img
              src="https://i.ibb.co/jPk21v6g/Novel-Logo.jpg"
              className="h-80"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-center">Novel</h2>
            <p>
              A novel is a long, imaginative narrative that explores characters,
              themes, and plots, often reflecting human experiences and emotions
              across various settings and social or personal contexts.
            </p>
            <div className="card-actions w-full">
              <Link to={'categorywiseBook/Novel'}>
                <button className="btn btn-primary">Explore More</button>
              </Link>{" "}
            </div>
          </div>
        </div>

        <div className="card bg-base-100  shadow-sm border">
          <figure>
            <img
              src="https://i.ibb.co/FbNjkpkd/history-minimal-thin-line-icons-set-vector.jpg"
              className="h-80"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">History</h2>
            <p>
              History books explore real past events, cultures, and people,
              often aiming to inform or analyze human development, wars,
              revolutions, and civilizations with factual accuracy and deep
              research.
            </p>
            <div className="card-actions w-full">
              <Link to={'categorywiseBook/History'}>
                <button className="btn btn-primary">Explore More</button>
              </Link>{" "}
            </div>
          </div>
        </div>

        <div className="card bg-base-100  shadow-sm border">
          <figure>
            <img
              src="https://i.ibb.co/xKm1VbpS/663e0fe6775379546a6c090312fc8cd7.jpg"
              className="h-80"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Thriller</h2>
            <p>
              Thriller books are fast-paced, suspenseful stories filled with
              tension, danger, and unexpected twists, often involving crime,
              espionage, or psychological elements to keep readers on edge.
            </p>
            <div className="card-actions w-full">
              <Link to={'categorywiseBook/Thriller'}>
                <button className="btn btn-primary">Explore More</button>
              </Link>{" "}
            </div>
          </div>
        </div>

        <div className="card bg-base-100  shadow-sm border">
          <figure>
            <img
              src="https://i.ibb.co/fY0snczN/fiction.jpg"
              className="h-80"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Science Fiction</h2>
            <p>
              Fiction books contain imaginative storytelling that isn’t bound by
              real events, allowing authors to invent characters, worlds, and
              plots across various genres like romance, sci-fi, or drama.
            </p>
            <div className="card-actions w-full">
              <Link to={'categorywiseBook/Fiction'}>
                <button className="btn btn-primary">Explore More</button>
              </Link>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
