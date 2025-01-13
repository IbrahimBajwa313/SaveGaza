import { useState, useEffect } from "react";

const AdminChartData = () => {
  const [chartData, setChartData] = useState(null); // Holds the chart data
  const [formData, setFormData] = useState({}); // Holds form data for edit
  const [isEditing, setIsEditing] = useState(false); // Tracks whether the form is in edit mode

  // Fetch data on page load
  useEffect(() => {
    fetch("/api/chartData")
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          setChartData(data[0]); // Assuming only one document in the collection
          setFormData(data[0]); // Initialize form data with fetched data
        }
      });
  }, []);

  // Handle form submission for updating
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`/api/chartData?id=${formData._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setChartData(data.data); // Update the displayed chart data
        setIsEditing(false); // Reset editing mode
      }
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: Number(value) })); // Update form data
  };

  // Handle edit action
  const handleEdit = (data) => {
    setIsEditing(true); // Enable edit mode
    setFormData(data); // Populate form with the selected data
  };

  return (
    <div className="container mx-8 p-6 bg-gray-50 shadow-md rounded-md">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Manage Chart Data</h1>

      {/* Form for editing chart data */}
      {isEditing && (
        <form onSubmit={handleSubmit} className="mb-6 bg-white p-4 rounded-md shadow">
          <div className="grid grid-cols-1 gap-4">
            <input
              type="number"
              name="PalestiniansKilled"
              placeholder="Palestinians Killed"
              value={formData.PalestiniansKilled || ""}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-green-500"
            />
            <input
              type="number"
              name="ChildrenKilled"
              placeholder="Children Killed"
              value={formData.ChildrenKilled || ""}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-green-500"
            />
            <input
              type="number"
              name="PalestiniansInjured"
              placeholder="Palestinians Injured"
              value={formData.PalestiniansInjured || ""}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-green-500"
            />
            <input
              type="number"
              name="MissingPersons"
              placeholder="Missing Persons"
              value={formData.MissingPersons || ""}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-green-500"
            />
            <input
              type="number"
              name="PeopleDisplaced"
              placeholder="People Displaced"
              value={formData.PeopleDisplaced || ""}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-green-500"
            />
            <input
              type="number"
              name="HousingUnitsDestroyed"
              placeholder="Housing Units Destroyed"
              value={formData.HousingUnitsDestroyed || ""}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-green-500"
            />
            <input
              type="number"
              name="RefugeesNeedingFoodAssistance"
              placeholder="Refugees Needing Food Assistance"
              value={formData.RefugeesNeedingFoodAssistance || ""}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-green-500"
            />
            <button
              type="submit"
              className="p-3 bg-green-500 text-white font-semibold rounded hover:bg-green-600 transition duration-200"
            >
              Update
            </button>
          </div>
        </form>
      )}

      {/* Display fetched chart data */}
      {chartData && !isEditing && (
        <div className="overflow-x-auto bg-white rounded-md shadow">
          <table className="min-w-full bg-white text-left border border-gray-200">
            <thead className="bg-green-500 text-white">
              <tr>
                <th className="p-4">Category</th>
                <th className="p-4">Total</th>
                <th className="p-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(chartData).map(([key, value], index) => {
                if (key !== "_id" && key !== "createdAt") {
                  return (
                    <tr
                      key={key}
                      className={`${
                        index % 2 === 0 ? "bg-gray-100" : "bg-gray-50"
                      } hover:bg-gray-200 transition`}
                    >
                      <td className="p-4 text-gray-800">{key.replace(/([A-Z])/g, " $1")}</td>
                      <td className="p-4 text-gray-800">{value}</td>
                      <td className="p-4 text-center">
                        <button
                          onClick={() => handleEdit(chartData)}
                          className="px-4 py-2 bg-green-500 text-white font-semibold rounded hover:bg-green-600 transition duration-200"
                        >
                          Edit
                        </button>
                      </td>
                    </tr>
                  );
                }
                return null;
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminChartData;
