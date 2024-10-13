import { useState, useEffect } from "react";

// Array of random background colors
const colors = [
  "#FF5733", "#33FF57", "#3357FF", "#F39C12", "#8E44AD", "#1ABC9C",
  "#E74C3C", "#2ECC71", "#3498DB", "#9B59B6", "#E67E22", "#34495E"
];

const getRandomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [testimonial, setTestimonial] = useState("");

  useEffect(() => {
    // Fetch reviews from MongoDB
    const fetchReviews = async () => {
      const res = await fetch("/api/reviews");
      const data = await res.json();

      // Assign a random color to each review on initial load
      const reviewsWithColors = data.map((review) => ({
        ...review,
        color: getRandomColor(),
      }));

      setReviews(reviewsWithColors);
    };
    fetchReviews();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send a POST request to the API to submit the review
    const response = await fetch("/api/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, testimonial }),
    });

    if (response.ok) {
      const newReview = await response.json(); // Get the new review from the response
      newReview.color = getRandomColor(); // Assign a random color to the new review

      alert("Review submitted successfully");
      setReviews((prevReviews) => [newReview, ...prevReviews].slice(0, 3)); // Add the new review and keep only the latest 3
      setName("");
      setEmail("");
      setTestimonial("");
    } else {
      alert("Failed to submit review");
    }
  };

  return (
    <section className="py-16">
      <div className="p-4 md:p-12">
        <h1 className="text-5xl text-center font-extrabold mb-10">Review Our Efforts</h1>

        <div className="flex flex-col md:flex-row justify-center items-start gap-20">
          {/* Reviews Section */}
          <div className="w-full md:w-1/2 max-h-[70vh] overflow-y-auto scrollbar-hide">
            {reviews.slice(-3).map((review, index) => (
              <div
                key={index}
                className="bg-gray-50 p-5 mx-2 rounded-2xl shadow-lg transition-transform transform hover:scale-105 mb-6"
              >
                <div className="flex items-center mb-3">
                  {/* Avatar with First Letter of Name and Random Color */}
                  <div
                    className="w-10 h-10 rounded-full flex justify-center items-center text-lg font-bold"
                    style={{ backgroundColor: review.color }} // Use the assigned color
                  >
                    {review.name ? review.name[0].toUpperCase() : ""}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-md font-semibold text-gray-900">{review.name}</h3>
                    <p className="text-gray-600 text-sm">{review.email}</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm">{review.testimonial}</p>
              </div>
            ))}
          </div>

          {/* Review Submission Form Section */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <div className="bg-gray-50 p-6 rounded-2xl shadow-lg w-full">
              <h3 className="text-3xl font-bold text-black mb-8 text-center">Share Your Remarks</h3>
              <form onSubmit={handleSubmit}>
                {/* Name and Email Fields */}
                <div className="mb-6 flex flex-col md:flex-row gap-4">
                  <input
                    type="text"
                    id="name"
                    className="w-full md:w-1/2 p-3 rounded-lg bg-white text-gray-900 border border-gray-300 focus:outline-none"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <input
                    type="email"
                    id="email"
                    className="w-full md:w-1/2 p-3 rounded-lg bg-white text-gray-900 border border-gray-300 focus:outline-none"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                {/* Testimonial Field */}
                <textarea
                  id="testimonial"
                  className="w-full p-4 rounded-lg bg-white text-gray-900 border border-gray-300 focus:outline-none"
                  rows="6" // Adjusted height for content without overflow
                  placeholder="Share your experience..."
                  value={testimonial}
                  onChange={(e) => setTestimonial(e.target.value)}
                  required
                ></textarea>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white font-bold p-4 rounded-lg hover:bg-[#D0312D] transition duration-300 focus:outline-none mt-6"
                >
                  Submit Review
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
