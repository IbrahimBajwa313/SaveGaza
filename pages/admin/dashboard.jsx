import { useEffect, useState } from "react";

const Dashboard = () => {
  const [groundActivists, setGroundActivists] = useState([]);
  const [universityAmbassadors, setUniversityAmbassadors] = useState([]);
  const [socialMediaActivists, setSocialMediaActivists] = useState([]);

  const [showMoreGround, setShowMoreGround] = useState(false);
  const [showMoreUniversity, setShowMoreUniversity] = useState(false);
  const [showMoreSocialMedia, setShowMoreSocialMedia] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const groundResponse = await fetch("/api/groundActivist");
        const universityResponse = await fetch("/api/universityAmbassador");
        const socialMediaResponse = await fetch("/api/socialMediaActivist");

        const groundData = await groundResponse.json();
        const universityData = await universityResponse.json();
        const socialMediaData = await socialMediaResponse.json();

        setGroundActivists(groundData);
        setUniversityAmbassadors(universityData);
        setSocialMediaActivists(socialMediaData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const toggleShowMoreGround = () => setShowMoreGround(!showMoreGround);
  const toggleShowMoreUniversity = () => setShowMoreUniversity(!showMoreUniversity);
  const toggleShowMoreSocialMedia = () => setShowMoreSocialMedia(!showMoreSocialMedia);

  const displayedGroundActivists = showMoreGround ? groundActivists : groundActivists.slice(0, 2);
  const displayedUniversityAmbassadors = showMoreUniversity ? universityAmbassadors : universityAmbassadors.slice(0, 2);
  const displayedSocialMediaActivists = showMoreSocialMedia ? socialMediaActivists : socialMediaActivists.slice(0, 2);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-6xl font-extrabold mb-16 text-center text-black">Dashboard</h2>

      {/* Styled Scrollbar CSS */}
      <style jsx>{`
        .scrollbar::-webkit-scrollbar {
          height: 10px;
        }
        .scrollbar::-webkit-scrollbar-track {
          background: #f3f4f6;
        }
        .scrollbar::-webkit-scrollbar-thumb {
          background: #22c55e;
          border-radius: 8px;
        }
        .scrollbar::-webkit-scrollbar-thumb:hover {
          background: #d0312d;
        }
      `}</style>

      {/* Ground Activists Section */}
      <div className="mb-16 lg:mx-32">
        <h3 className="text-3xl font-extrabold text-center text-black mb-4">
          Ground <span className="text-[#D0312D]">Activists</span>
        </h3>
        <div className="overflow-x-auto scrollbar">
          <table className="min-w-full border bg-white rounded-lg shadow-md">
            <thead>
              <tr className="bg-[#22C55E] text-white">
                <th className="border px-2 py-1 text-sm">Name</th>
                <th className="border px-2 py-1 text-sm">Email</th>
                <th className="border px-2 py-1 text-sm">City</th>
                <th className="border px-2 py-1 text-sm">Phone</th>
                <th className="border px-2 py-1 text-sm">Age</th>
                <th className="border px-2 py-1 text-sm">Profession</th>
                <th className="border px-2 py-1 text-sm">Institute</th>
              </tr>
            </thead>
            <tbody>
              {displayedGroundActivists.map((activist, index) => (
                <tr key={index} className="border-b">
                  <td className="border px-2 py-1 text-sm">{activist.name}</td>
                  <td className="border px-2 py-1 text-sm">{activist.email}</td>
                  <td className="border px-2 py-1 text-sm">{activist.city}</td>
                  <td className="border px-2 py-1 text-sm">{activist.phone}</td>
                  <td className="border px-2 py-1 text-sm">{activist.age}</td>
                  <td className="border px-2 py-1 text-sm">{activist.profession}</td>
                  <td className="border px-2 py-1 text-sm">{activist.institute}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {groundActivists.length > 2 && (
          <div className="flex justify-end mt-2">
            <button
              onClick={toggleShowMoreGround}
              className="px-4 py-2 bg-[#22C55E] text-white rounded-lg hover:bg-[#D0312D] transition duration-300 text-sm"
            >
              {showMoreGround ? "Show Less" : "Show All"}
            </button>
          </div>
        )}
      </div>

      {/* University Ambassadors Section */}
      <div className="mb-16 lg:mx-32">
        <h3 className="text-3xl font-extrabold text-center text-black mb-4">
          University <span className="text-[#D0312D]">Ambassadors</span>
        </h3>
        <div className="overflow-x-auto scrollbar">
          <table className="min-w-full border bg-white rounded-lg shadow-md">
            <thead>
              <tr className="bg-[#22C55E] text-white">
                <th className="border px-2 py-1 text-sm">Name</th>
                <th className="border px-2 py-1 text-sm">Email</th>
                <th className="border px-2 py-1 text-sm">Phone</th>
                <th className="border px-2 py-1 text-sm">University Name</th>
                <th className="border px-2 py-1 text-sm">City</th>
                <th className="border px-2 py-1 text-sm">Profession</th>
                <th className="border px-2 py-1 text-sm">Skills</th>
                <th className="border px-2 py-1 text-sm">Additional Contribution</th>
              </tr>
            </thead>
            <tbody>
              {displayedUniversityAmbassadors.map((ambassador, index) => (
                <tr key={index} className="border-b">
                  <td className="border px-2 py-1 text-sm">{ambassador.name}</td>
                  <td className="border px-2 py-1 text-sm">{ambassador.email}</td>
                  <td className="border px-2 py-1 text-sm">{ambassador.phone}</td>
                  <td className="border px-2 py-1 text-sm">{ambassador.universityName}</td>
                  <td className="border px-2 py-1 text-sm">{ambassador.city}</td>
                  <td className="border px-2 py-1 text-sm">{ambassador.profession}</td>
                  <td className="border px-2 py-1 text-sm">{ambassador.skills}</td>
                  <td className="border px-2 py-1 text-sm">{ambassador.contribution}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {universityAmbassadors.length > 2 && (
          <div className="flex justify-end mt-2">
            <button
              onClick={toggleShowMoreUniversity}
              className="px-4 py-2 bg-[#22C55E] text-white rounded-lg hover:bg-[#D0312D] transition duration-300 text-sm"
            >
              {showMoreUniversity ? "Show Less" : "Show All"}
            </button>
          </div>
        )}
      </div>

      {/* Social Media Activists Section */}
      <div className="mb-16 lg:mx-32">
        <h3 className="text-3xl font-extrabold text-center text-black mb-4">
          Social <span className="text-[#22C55E]">Media</span>{" "}
          <span className="text-[#D0312D]">Activists</span>
        </h3>
        <div className="overflow-x-auto scrollbar">
          <table className="min-w-full border bg-white rounded-lg shadow-md">
            <thead>
              <tr className="bg-[#22C55E] text-white">
                <th className="border px-2 py-1 text-sm">Name</th>
                <th className="border px-2 py-1 text-sm">Email</th>
                <th className="border px-2 py-1 text-sm">Phone</th>
                <th className="border px-2 py-1 text-sm">City</th>
                <th className="border px-2 py-1 text-sm">Platforms</th>
                <th className="border px-2 py-1 text-sm">Skills</th>
                <th className="border px-2 py-1 text-sm">Thoughts</th>
                <th className="border px-2 py-1 text-sm">Pledge</th>
              </tr>
            </thead>
            <tbody>
              {displayedSocialMediaActivists.map((activist, index) => (
                <tr key={index} className="border-b">
                  <td className="border px-2 py-1 text-sm">{activist.name}</td>
                  <td className="border px-2 py-1 text-sm">{activist.email}</td>
                  <td className="border px-2 py-1 text-sm">{activist.phone}</td>
                  <td className="border px-2 py-1 text-sm">{activist.city}</td>
                  <td className="border px-2 py-1 text-sm">{activist.platforms.join(", ")}</td>
                  <td className="border px-2 py-1 text-sm">{activist.skills.join(", ")}</td>
                  <td className="border px-2 py-1 text-sm">{activist.thoughts}</td>
                  <td className="border px-2 py-1 text-sm">{activist.pledge}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {socialMediaActivists.length > 2 && (
          <div className="flex justify-end mt-2">
            <button
              onClick={toggleShowMoreSocialMedia}
              className="px-4 py-2 bg-[#22C55E] text-white rounded-lg hover:bg-[#D0312D] transition duration-300 text-sm"
            >
              {showMoreSocialMedia ? "Show Less" : "Show All"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;