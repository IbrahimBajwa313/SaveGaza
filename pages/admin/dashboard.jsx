import { useEffect, useState } from "react";
import axios from "axios";

export default function ParticipantsList() {
  const [participants, setParticipants] = useState({
    ground: [],
    university: [],
    social: [],
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState({
    ground: 1,
    university: 1,
    social: 1,
  });
  const itemsPerPage = 5;

  const fetchParticipantsByCategory = async (category) => {
    try {
      // Request the category participants from the API
      const response = await axios.get("/api/joinAPI", {
        params: { category }, // Pass category as query parameter
      });
      return response.data.data; // Ensure the API returns an object with 'data' containing the participants
    } catch (err) {
      throw new Error(`Failed to fetch ${category} participants.`);
    }
  };

  useEffect(() => {
    const fetchAllParticipants = async () => {
      try {
        const ground = await fetchParticipantsByCategory("ground");
        const university = await fetchParticipantsByCategory("university");
        const social = await fetchParticipantsByCategory("social");

        setParticipants({ ground, university, social }); // Update state with fetched data
      } catch (err) {
        setError(err.message); // Set error if fetching fails
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchAllParticipants(); // Fetch participants on component mount
  }, []);

  const handlePageChange = (category, page) =>
    setCurrentPage((prev) => ({ ...prev, [category]: page }));

  const filteredParticipants = (category) =>
    participants[category]
      .filter(
        (p) =>
          p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.university?.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .slice(
        (currentPage[category] - 1) * itemsPerPage,
        currentPage[category] * itemsPerPage
      );

  const categories = [
    { name: "Ground Activist", key: "ground" },
    { name: "University Ambassador", key: "university" },
    { name: "Social Media Activist", key: "social" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8">
      <h1 className="text-2xl sm:text-4xl font-extrabold text-center text-black mb-6">
        Campaign Participants by{" "}
        <span className="text-[#22C55E]">Category</span>
      </h1>

      {/* Search Bar */}
      <div className="max-w-3xl mx-auto mb-6">
        <input
          type="text"
          placeholder="Search by name or university"
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {error && <p className="text-red-500 text-center">{error}</p>}
      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : (
        categories.map(({ name, key }) => (
          <section
            key={key}
            className="max-w-6xl mx-auto mb-8 p-4 bg-white rounded-lg shadow-md"
          >
            <h2 className="text-xl font-bold text-green-600 mb-4">{name}</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto">
                <thead>
                  <tr className="bg-[#22C55E] text-white">
                    <th className="px-4 py-2">Name</th>
                    <th className="px-4 py-2">Email</th>
                    <th className="px-4 py-2">Phone</th>
                    <th className="px-4 py-2">University</th>
                    <th className="px-4 py-2">Skills</th>
                    <th className="px-4 py-2">Profession</th>
                    <th className="px-4 py-2">City</th>
                    <th className="px-4 py-2">Age</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredParticipants(key).length === 0 ? (
                    <tr>
                      <td colSpan="8" className="text-center py-4">
                        No participants found for {name}.
                      </td>
                    </tr>
                  ) : (
                    filteredParticipants(key).map((participant) => (
                      <tr key={participant._id} className="border-b">
                        <td className="px-4 py-2">{participant.name}</td>
                        <td className="px-4 py-2">
                          {participant.email || "N/A"}
                        </td>
                        <td className="px-4 py-2">
                          {participant.mobile || "N/A"}
                        </td>
                        <td className="px-4 py-2">
                          {participant.university || "N/A"}
                        </td>
                        <td className="px-4 py-2">{participant.skills}</td>
                        <td className="px-4 py-2">{participant.profession}</td>
                        <td className="px-4 py-2">{participant.city}</td>
                        <td className="px-4 py-2">{participant.age}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            {filteredParticipants(key).length > 0 && (
              <div className="flex justify-end mt-4">
                <button
                  disabled={currentPage[key] === 1}
                  onClick={() => handlePageChange(key, currentPage[key] - 1)}
                  className="px-3 py-1 bg-gray-200 rounded-md mr-2 disabled:opacity-50"
                >
                  Previous
                </button>
                <button
                  disabled={
                    currentPage[key] >=
                    Math.ceil(participants[key].length / itemsPerPage)
                  }
                  onClick={() => handlePageChange(key, currentPage[key] + 1)}
                  className="px-3 py-1 bg-gray-200 rounded-md disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            )}
          </section>
        ))
      )}
    </div>
  );
}
