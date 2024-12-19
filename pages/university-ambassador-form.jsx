import { useState } from "react";
import axios from "axios";

export default function UniversityAmbassadorForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: "",
    phone: "",
    profession: "",
    universityName: "",
    skills: "",
    contribution: "",
  });

  const [errors, setErrors] = useState({});

  // Handle changes in input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Validate the form fields
  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.city.trim()) newErrors.city = "City is required.";
    if (!formData.profession.trim())
      newErrors.profession = "Profession is required.";
    if (!formData.universityName.trim())
      newErrors.universityName = "University Name is required.";
    if (!formData.skills.trim()) newErrors.skills = "Skills are required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      // Replace with the actual API endpoint URL
      const response = await axios.post("/api/joinAPI", formData);

      // Check if the API response is successful
      if (response.status === 200) {
        alert("University Ambassador details have been submitted!");
      } else {
        alert("Submission failed. Please try again.");
      }
    } catch (error) {
      // Log the error for debugging
      console.error("There was an error submitting the form:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8">
      <section className="max-w-3xl mx-auto p-6 bg-blue-50 rounded-lg shadow-lg">
        <h1 className="text-xl sm:text-2xl md:text-4xl font-extrabold text-center text-black mb-6">
          Join the <span className="text-[#22C55E]">Campaign As</span>
          <br />
          <span className="text-[#D0312D]">University Ambassador</span>
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-base font-semibold text-gray-700">
              Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg mt-2"
            />
            {errors.name && <p className="text-red-500">{errors.name}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-base font-semibold text-gray-700">
              Email (Optional)
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg mt-2"
            />
          </div>

          {/* City */}
          <div>
            <label className="block text-base font-semibold text-gray-700">
              City<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg mt-2"
            />
            {errors.city && <p className="text-red-500">{errors.city}</p>}
          </div>

          {/* Phone No */}
          <div>
            <label className="block text-base font-semibold text-gray-700">
              Phone No (Optional)
            </label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg mt-2"
            />
          </div>

          {/* Profession */}
          <div>
            <label className="block text-base font-semibold text-gray-700">
              Profession<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="profession"
              value={formData.profession}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg mt-2"
            />
            {errors.profession && (
              <p className="text-red-500">{errors.profession}</p>
            )}
          </div>

          {/* University Name */}
          <div>
            <label className="block text-base font-semibold text-gray-700">
              University Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="universityName"
              value={formData.universityName}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg mt-2"
            />
            {errors.universityName && (
              <p className="text-red-500">{errors.universityName}</p>
            )}
          </div>

          {/* Skills */}
          <div>
            <label className="block text-base font-semibold text-gray-700">
              Skills<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg mt-2"
            />
            {errors.skills && <p className="text-red-500">{errors.skills}</p>}
          </div>

          {/* Contribution */}
          <div>
            <label className="block text-base font-semibold text-gray-700">
              Would you like to contribute in any other way? (Optional)
            </label>
            <textarea
              name="contribution"
              value={formData.contribution}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg mt-2"
              rows="4"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#22C55E] text-white font-bold py-3 rounded-lg mt-6 hover:bg-[#D0312D] transition duration-300"
          >
            Submit
          </button>
        </form>
      </section>
    </div>
  );
}
