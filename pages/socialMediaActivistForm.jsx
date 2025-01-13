import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function SocialMediaActivistForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    platforms: [],
    skills: [],
    thoughts: "",
    pledge: "",
    otherPledge: "", // State for the other pledge text
    otherSkill: "", // State for the other skill text
  });

  const [message, setMessage] = useState("");
  const [messageColor, setMessageColor] = useState("");
  const router = useRouter();
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prevState) => {
        const updatedArray = checked
          ? [...prevState[name], value]
          : prevState[name].filter((item) => item !== value);
        return { ...prevState, [name]: updatedArray };
      });
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.city.trim()) newErrors.city = "City is required.";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required.";
    if (formData.platforms.length === 0)
      newErrors.platforms = "Select at least one platform.";
    if (formData.skills.length === 0 && !formData.otherSkill.trim())
      newErrors.skills = "Select at least one skill or specify another.";
    if (!formData.thoughts.trim())
      newErrors.thoughts = "Please share your thoughts.";
    if (!formData.pledge.trim())
      newErrors.pledge = "Please select your pledge.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      await axios.post("/api/socialMediaActivist", formData);
      setMessage("Social Media Activist details have been submitted!");
      setMessageColor("#22C55E");
      setFormData({
        name: "",
        email: "",
        phone: "",
        city: "",
        platforms: [],
        skills: [],
        thoughts: "",
        pledge: "",
        otherPledge: "",
        otherSkill: "",
      });
      setTimeout(() => {
        router.push("/");
      }, 2000);
    } catch (error) {
      console.error("Submission error:", error);
      setMessage("Something went wrong. Please try again.");
      setMessageColor("D0312D");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8">
      <section className="max-w-3xl mx-auto p-6 bg-blue-50 rounded-lg shadow-lg">
        <h1 className="text-xl sm:text-2xl md:text-4xl font-extrabold text-center text-black mb-6">
          Join the <span className="text-[#22C55E]">Campaign As</span>
          <br />
          <span className="text-[#D0312D]">Social Media Activist</span>
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
              E-mail (Optional)
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg mt-2"
            />
          </div>

          {/* Phone No */}
          <div>
            <label className="block text-base font-semibold text-gray-700">
              Phone No <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg mt-2"
            />
            {errors.phone && <p className="text-red-500">{errors.phone}</p>}
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

          {/* Platforms */}
          <div>
            <label className="block text-base font-semibold text-gray-700">
              On which platform would you like to be an activist of SGC?
              <span className="text-red-500">*</span>
            </label>
            <div className="mt-2 space-y-2">
              {[
                "Instagram",
                "Twitter",
                "Facebook",
                "LinkedIn",
                "TikTok",
                "YouTube",
              ].map((platform) => (
                <div key={platform}>
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      name="platforms"
                      value={platform}
                      checked={formData.platforms.includes(platform)}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    {platform}
                  </label>
                </div>
              ))}
            </div>
            {errors.platforms && (
              <p className="text-red-500">{errors.platforms}</p>
            )}
          </div>

          {/* Skills */}
          <div>
            <label className="block text-base font-semibold text-gray-700">
              Can you help SGC in any of the fields?
              <span className="text-red-500">*</span>
            </label>
            <div className="mt-2 space-y-2">
              {[
                "Content Writing",
                "Video Editing",
                "Urdu Designing",
                "English Designing",
                "Memes/Reels Editing",
                "Animation",
                "Other",
              ].map((skill) => (
                <div key={skill}>
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      name="skills"
                      value={skill}
                      checked={formData.skills.includes(skill)}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    {skill}
                  </label>
                </div>
              ))}
            </div>
            {errors.skills && <p className="text-red-500">{errors.skills}</p>}
          </div>

          {/* Other skill text field */}
          {formData.skills.includes("Other") && (
            <div>
              <label className="block text-base font-semibold text-gray-700">
                Please specify your skill
              </label>
              <input
                type="text"
                name="otherSkill"
                value={formData.otherSkill}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg mt-2"
              />
            </div>
          )}

          {/* Thoughts */}
          <div>
            <label className="block text-base font-semibold text-gray-700">
              Why would you like to be a volunteer at SGC? Share your thoughts
              <span className="text-red-500">*</span>
            </label>
            <textarea
              name="thoughts"
              value={formData.thoughts}
              onChange={handleChange}
              rows="4"
              className="w-full p-3 border border-gray-300 rounded-lg mt-2"
            />
            {errors.thoughts && (
              <p className="text-red-500">{errors.thoughts}</p>
            )}
          </div>

          {/* Pledge */}
          <div>
            <label className="block text-base font-semibold text-gray-700">
              Do you pledge to become a voice for Gaza and to remain true to the
              cause?<span className="text-red-500">*</span>
            </label>
            <div className="mt-2 space-y-2">
              {["Yes", "No", "Other"].map((pledgeOption) => (
                <div key={pledgeOption}>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="pledge"
                      value={pledgeOption}
                      checked={formData.pledge === pledgeOption}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    {pledgeOption}
                  </label>
                </div>
              ))}
            </div>
            {errors.pledge && <p className="text-red-500">{errors.pledge}</p>}
          </div>

          {/* Other pledge text field */}
          {formData.pledge === "Other" && (
            <div>
              <label className="block text-base font-semibold text-gray-700">
                Please specify your pledge
              </label>
              <input
                type="text"
                name="otherPledge"
                value={formData.otherPledge}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg mt-2"
              />
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#22C55E] text-white font-bold py-3 rounded-lg mt-6 hover:bg-[#D0312D] transition duration-300"
          >
            Submit
          </button>
        </form>
        {message && (
          <p style={{ color: messageColor }} className="mt-4 text-center">
            {message}
          </p>
        )}
      </section>
    </div>
  );
}
