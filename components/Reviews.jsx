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
      const reviewsWithColors = data.map(review => ({
        ...review,
        color: getRandomColor()
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
    <section className="bg-blue-50 dark:bg-gray-900 py-16 px-6">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 lg:p-10">
          <h1 className="text-4xl md:text-5xl lg:text-4xl font-extrabold leading-tight text-gray-900 dark:text-white mb-6">
            What are your reviews for the{" "}
            <span className="text-green-600">Save Gaza Campaign</span>
          </h1>

          <div className="flex flex-col md:flex-row gap-12">
            {/* Reviews Section */}
            <div className="w-full md:w-1/2">
              {reviews.slice(-3).map((review, index) => (
                <div
                  key={index}
                  className="bg-gray-100 dark:bg-gray-700 p-5 rounded-lg shadow-md transition-transform transform hover:scale-105 mb-6"
                >
                  <div className="flex items-center mb-3">
                    {/* Avatar with First Letter of Name and Random Color */}
                    <div
                      className="w-10 h-10 rounded-full flex justify-center items-center text-white text-lg font-bold"
                      style={{ backgroundColor: review.color }} // Use the assigned color
                    >
                      {review.name ? review.name[0].toUpperCase() : ""}

                    </div>
                    <div className="ml-4">
                      <h3 className="text-md font-semibold text-gray-900 dark:text-gray-100">
                        {review.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {review.email}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    {review.testimonial}
                  </p>
                </div>
              ))}
            </div>

            {/* Review Submission Form Section */}
            <div className="w-full md:w-1/2 flex justify-center items-center">
              <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-lg shadow-xl">
                <h3 className="text-3xl font-bold text-black dark:text-gray-100 mb-6 text-center">
                  Share Your Remarks
                </h3>
                <form onSubmit={handleSubmit}>
                  {/* Name and Email Fields */}
                  <div className="mb-6 flex gap-6 flex-col md:flex-row">
                    <div className="w-full md:w-1/2">
                      <input
                        type="text"
                        id="name"
                        className="w-full p-3 rounded-lg bg-white dark:bg-gray-600 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-500 focus:outline-none"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="w-full md:w-1/2">
                      <input
                        type="email"
                        id="email"
                        className="w-full p-3 rounded-lg bg-white dark:bg-gray-600 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-500 focus:outline-none"
                        placeholder="Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  {/* Testimonial Field */}
                  <div className="mb-6">
                    <textarea
                      id="testimonial"
                      className="w-full p-4 rounded-lg bg-white dark:bg-gray-600 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-500 focus:outline-none"
                      rows="4"
                      placeholder="Share your experience..."
                      value={testimonial}
                      onChange={(e) => setTestimonial(e.target.value)}
                      required
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-green-600 dark:bg-gray-600 text-white p-4 rounded-lg hover:bg-black dark:hover:bg-gray-500 transition duration-300 focus:outline-none"
                  >
                    Submit Review
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
