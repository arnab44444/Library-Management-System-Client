import React, { useState } from "react";
import { Star } from "lucide-react";

// Average rating calculation function
const averageRating = (reviews) => {
  if (reviews.length === 0) return 0;
  const total = reviews.reduce((acc, r) => acc + r.rating, 0);
  return total / reviews.length;
};

const BookReviewSection = () => {
  const [reviews, setReviews] = useState([
    {
      name: "Riya Sultana",
      rating: 5,
      comment: "Amazing storytelling and characters!",
      date: "2025-06-06",
    },
    {
      name: "Anik Das",
      rating: 3,
      comment: "Good book, but a bit slow in the middle.",
      date: "2025-06-04",
    },
  ]);

  const [newReview, setNewReview] = useState({
    name: "",
    rating: 0,
    comment: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const today = new Date().toISOString().slice(0, 10);
    setReviews([{ ...newReview, date: today }, ...reviews]);
    setNewReview({ name: "", rating: 0, comment: "" });
  };

  return (
    <div className="p-6 bg-base-100 shadow-md rounded-xl space-y-6 max-w-5xl mx-auto mt-10">
      <h2 className="text-2xl font-bold text-center">📖 Book Reviews</h2>

      {/* Average Rating */}
      <div className="flex items-center gap-2">
        <div className="flex text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={20}
              fill={i < averageRating(reviews) ? "#facc15" : "none"}
              stroke="#facc15"
            />
          ))}
        </div>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {averageRating(reviews).toFixed(1)} out of 5
        </span>
      </div>

      {/* Review Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          value={newReview.name}
          onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
          className="input input-bordered w-full"
          required
        />

        {/* Star Rating */}
        <div className="flex items-center gap-2">
          {[...Array(5)].map((_, i) => (
            <button
              type="button"
              key={i}
              onClick={() => setNewReview({ ...newReview, rating: i + 1 })}
              className={`text-2xl ${
                i < newReview.rating ? "text-yellow-400" : "text-gray-300"
              }`}
            >
              ★
            </button>
          ))}
        </div>

        <textarea
          placeholder="Write your review..."
          value={newReview.comment}
          onChange={(e) =>
            setNewReview({ ...newReview, comment: e.target.value })
          }
          className="textarea textarea-bordered w-full"
          required
        ></textarea>

        <button type="submit" className="btn btn-primary w-full md:w-auto">
          Submit Review
        </button>
      </form>

      {/* Review List */}
      <div className="divider">All Reviews</div>
      <div className="space-y-4">
        {reviews.map((rev, index) => (
          <div
            key={index}
            className="border p-4 rounded-lg bg-base-200 space-y-2"
          >
            <div className="flex justify-between items-center">
              <h3 className="font-semibold">{rev.name}</h3>
              <span className="text-xs text-gray-500">{rev.date}</span>
            </div>
            <div className="flex text-yellow-400">
              {[...Array(rev.rating)].map((_, i) => (
                <Star key={i} size={16} fill="#facc15" stroke="#facc15" />
              ))}
            </div>
            <p className="text-sm">{rev.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookReviewSection;
