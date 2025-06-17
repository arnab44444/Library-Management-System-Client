import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";

const categories = [
  {
    title: "Novel",
    img: "https://i.ibb.co/jPk21v6g/Novel-Logo.jpg",
    desc: `A novel is a long, imaginative narrative that explores characters, themes, and plots, often reflecting human experiences and emotions across various settings and social or personal contexts.`,
    link: "categorywiseBook/Novel",
  },
  {
    title: "History",
    img: "https://i.ibb.co/FbNjkpkd/history-minimal-thin-line-icons-set-vector.jpg",
    desc: `History books explore real past events, cultures, and people, often aiming to inform or analyze human development, wars, revolutions, and civilizations with factual accuracy and deep research.`,
    link: "categorywiseBook/History",
  },
  {
    title: "Thriller",
    img: "https://i.ibb.co/xKm1VbpS/663e0fe6775379546a6c090312fc8cd7.jpg",
    desc: `Thriller books are fast-paced, suspenseful stories filled with tension, danger, and unexpected twists, often involving crime, espionage, or psychological elements to keep readers on edge.`,
    link: "categorywiseBook/Thriller",
  },
  {
    title: "Science Fiction",
    img: "https://i.ibb.co/HpBtNJYm/open-book-concept-fairy-tale-fiction-storytelling.jpg",
    desc: `Fiction books contain imaginative storytelling that isn’t bound by real events, allowing authors to invent characters, worlds, and plots across various genres like romance, sci-fi, or drama.`,
    link: "categorywiseBook/Fiction",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, type: "spring", stiffness: 50 },
  }),
  hover: { scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.15)" },
};

const Categories = () => {
  return (
    <div className="max-w-7xl mx-auto px-5 py-10">
      <h2 className="my-10 font-bold text-3xl text-center text-indigo-700">
        Categories
      </h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map(({ title, img, desc, link }, index) => (
          <motion.div
            key={title}
            className="card bg-base-100 shadow-sm border rounded-lg overflow-hidden cursor-pointer flex flex-col"
            custom={index}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            variants={cardVariants}
          >
            <div className="overflow-hidden h-60">
              <motion.img
                src={img}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-300"
                whileHover={{ scale: 1.1 }}
              />
            </div>
            <div className="card-body flex flex-col flex-grow">
              <h2 className="card-title text-center">{title}</h2>
              <p className="flex-grow text-sm mt-2">{desc}</p>
              <div className="card-actions w-full mt-4 justify-center">
                <Link to={link}>
                  <button className="btn btn-primary w-full md:w-auto">
                    Explore More
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
