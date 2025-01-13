import Image from "next/image";
import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { useState } from "react";

const ContactAndSubscribe = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  // Handle the form submission
  const handleSubmit = async (event) => {
    // Prevent the default form submission behavior (page refresh)
    setSuccessMessage("");
    setError("");
    event.preventDefault();
    setIsSubmitting(true);
    setError(""); // Clear previous error messages

    // try {
    //   const res = await fetch("/api/subscribe", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ email }),
    //   });

    //   const data = await res.json(); // Read the response body only once

    //   if (res.ok) {
    //     setSuccessMessage("Thank you for subscribing!");
    //   } else {
    //     setError(data.error || "Something went wrong!");
    //   }
    // } catch (err) {
    //   console.error("Error during subscription:", err); // Log the actual error message
    //   setError("Failed to subscribe. Please try again later.");
    // } finally {
    //   setIsSubmitting(false);
    // }
  };

  return (
    <div className="flex flex-col lg:flex-row justify-evenly min-h-[80vh] items-center gap-8 pb-4 lg:pb-8 min-h-screen w-full">
      {/* Contact Section */}
      <div className="bg-white p-8 lg:p-6 rounded-2xl min-h-[60vh] shadow-xl w-full lg:max-w-lg">
        <h1 className="text-3xl lg:text-4xl font-extrabold text-center mb-6">
          Contact us
        </h1>
        <ContactItem
          icon={<FaMapMarkerAlt className="text-pink-500 w-7 h-7" />}
          label="Address"
          content={
            <a
              href="https://www.google.com/maps/place/Malikabad+Shopping+Mall/@33.640815,73.0750282,18.17z/data=!3m1!5s0x38dfde06df682eb3:0x17a97efdcb5a3c3a!4m10!1m2!2m1!1sSGC+Office+S%2323,+3rd+Floor,+Malikabad+Centre+near+6th+Rd,+Murree+++++++++++++++Rd,+Rawalpindi!3m6!1s0x14e3d7c028cd49d9:0x26940945443d7b5f!8m2!3d33.6402985!4d73.0757894!15sCl1TR0MgT2ZmaWNlIFMjMjMsIDNyZCBGbG9vciwgTWFsaWthYmFkIENlbnRyZSBuZWFyIDZ0aCBSZCwgTXVycmVlICAgICAgICAgICAgICAgUmQsIFJhd2FscGluZGmSAQ9zaG9wcGluZ19jZW50ZXLgAQA!16s%2Fg%2F1hm66jljv?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              SGC Office S#23, 3rd Floor, Malikabad Centre near 6th Rd, Murree
              Rd, Rawalpindi
            </a>
          }
        />
        <ContactItem
          icon={<FaPhoneAlt className="text-yellow-500 w-7 h-7" />}
          label="Phone"
          content="+92 332 5900041"
        />
        <ContactItem
          icon={<FaEnvelope className="text-blue-500 w-7 h-7" />}
          label="Email"
          content={
            <a
              href="mailto:tameer2k23@gmail.com"
              className="text-blue-500 hover:underline"
            >
              tameer2k23@gmail.com
            </a>
          }
        />
      </div>

      {/* Subscribe Section */}
      <div className="bg-white p-4 lg:p-8 rounded-2xl shadow-xl w-full lg:max-w-2xl min-h-[60vh] lg:h-[60vh] flex flex-col justify-center items-center text-center mt-0">
        <Image
          src="/Picture2.png"
          alt="Support Image"
          layout="responsive"
          width={500}
          height={400}
          className="rounded-lg"
        />
        <form
          className="flex mt-6 lg:mt-10 flex-col lg:flex-row items-center w-full space-y-4 lg:space-y-0 lg:space-x-4"
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="border border-gray-300 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className="w-full lg:w-auto bg-[#22C55E] px-6 py-4 text-white font-bold rounded-lg hover:bg-[#D0312D] transition-colors duration-600"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Subscribing..." : "Subscribe"}
          </button>
          {error && <p className="text-red-500 mt-2">{error}</p>}
          {successMessage && (
            <p className="text-green-500 mt-2">{successMessage}</p>
          )}
        </form>
        <p className="text-sm text-gray-500 mt-4">
          By clicking on the button, you agree to the{" "}
          <a href="#" className="underline hover:text-blue-600">
            privacy policy
          </a>
        </p>
      </div>
    </div>
  );
};

const ContactItem = ({ icon, label, content }) => (
  <div className="flex items-center space-x-4 mb-4 lg:mb-6 w-full">
    {icon}
    <div>
      <p className="text-xl lg:text-2xl font-bold">{label}</p>
      <p>{content}</p>
    </div>
  </div>
);

export default ContactAndSubscribe;
