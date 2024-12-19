import { useState, useEffect } from "react";
import Image from "next/image"; // Import Next.js Image
import Loader from "./Loader"; // Importing the loader component

const dpImages = [
  "/dps/dp1.jpg",
  "/dps/dp2.png",
  "/dps/dp3.png",
  "/dps/dp4.png",
  "/dps/dp5.png",
];

const getRandomDp = () => {
  return dpImages[Math.floor(Math.random() * dpImages.length)];
};

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [testimonial, setTestimonial] = useState("");

  useEffect(() => {
    const fetchReviews = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/reviews");
        const data = await res.json();
        const reviewsWithDps = data.map((review) => ({
          ...review,
          dp: getRandomDp(),
        }));
        setReviews(reviewsWithDps);
      } catch (error) {
        console.error("Failed to fetch reviews", error);
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, testimonial }),
      });

      if (response.ok) {
        const newReview = await response.json();
        newReview.dp = getRandomDp();

        alert("Review submitted successfully");
        setReviews((prevReviews) => [newReview, ...prevReviews].slice(0, 3));
        setName("");
        setEmail("");
        setTestimonial("");
      } else {
        alert("Failed to submit review");
      }
    } catch (error) {
      console.error("Error submitting review", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <section className="">
      <div className="py-4 md:py-12">
        <h1 className="text-5xl text-center max-h-[60vh] font-extrabold mb-10">
          Review Our Efforts
        </h1>

        <div className="flex flex-col md:flex-row justify-center items-start gap-20">
          {/* Reviews Section */}
          <div className="w-full md:w-1/2 max-h-[70vh] overflow-y-auto scrollbar-hide">
            {reviews.slice(-3).map((review, index) => (
              <div
                key={index}
                className="bg-gray-50 p-5 mx-2 rounded-2xl shadow-lg transition-transform transform hover:scale-105 mb-6"
              >
                <div className="flex items-center mb-3">
                  {/* Avatar with Random Image */}
                  <Image
                    src={review.dp}
                    alt="Profile Picture"
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h3 className="text-md font-semibold text-gray-900">
                      {review.name}
                    </h3>
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
              <h3 className="text-3xl font-bold text-black mb-8 text-center">
                Share Your Remarks
              </h3>
              <form onSubmit={handleSubmit}>
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

                <textarea
                  id="testimonial"
                  className="w-full p-4 rounded-lg bg-white text-gray-900 border border-gray-300 focus:outline-none"
                  rows="6"
                  placeholder="Share your experience..."
                  value={testimonial}
                  onChange={(e) => setTestimonial(e.target.value)}
                  required
                ></textarea>

                <button
                  type="submit"
                  className="w-full bg-[#22C55E] text-white font-bold p-4 rounded-lg hover:bg-[#D0312D] transition duration-300 focus:outline-none mt-6"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Review"}
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
