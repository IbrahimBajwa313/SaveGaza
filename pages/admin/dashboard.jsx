import { useEffect, useState } from "react";
import axios from "axios";

export default function SocialMediaActivists() {
  const [participants, setParticipants] = useState([]); // Initialize as an empty array
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchParticipants = async () => {
    try {
      const response = await axios.get("/api/socialMediaActivist");
      setParticipants(response.data.data || []); // Ensure it's an array
    } catch (err) {
      setError(`Failed to fetch participants: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchParticipants();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8">
      <h1 className="text-2xl sm:text-4xl font-extrabold text-center text-black mb-6">
        Social Media Activists
      </h1>

      {error && <p className="text-red-500 text-center">{error}</p>}
      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : (
        <section className="max-w-6xl mx-auto mb-8 p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-green-600 mb-4">Participants</h2>
          <div className="overflow-y-auto max-h-60">
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
                {Array.isArray(participants) && participants.length === 0 ? (
                  <tr>
                    <td colSpan="8" className="text-center py-4">
                      No participants found.
                    </td>
                  </tr>
                ) : (
                  participants.map((participant) => (
                    <tr key={participant._id} className="border-b">
                      <td className="px-4 py-2">{participant.name}</td>
                      <td className="px-4 py-2">{participant.email || "N/A"}</td>
                      <td className="px-4 py-2">{participant.mobile || "N/A"}</td>
                      <td className="px-4 py-2">{participant.university || "N/A"}</td>
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
        </section>
      )}
    </div>
  );
}