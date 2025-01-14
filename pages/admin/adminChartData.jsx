import { useState, useEffect } from "react";

const AdminChartData = () => {
  const [chartData, setChartData] = useState(null);
  const [formData, setFormData] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  // Fetch data on component mount
  useEffect(() => {
    fetch("/api/chartData")
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          setChartData(data[0]); // Use the first document
          setFormData(data[0]); // Initialize form with fetched data
        }
      });
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`/api/chartData?id=${formData._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (res.ok) {
        setChartData(result.data); // Update displayed data
        setIsEditing(false);
      } else {
        console.error(result.error);
      }
    } catch (error) {
      console.error("Error updating chart data:", error);
    }
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: Number(value) }));
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="flex text-3xl font-bold justify-center inline-block text-green-500 my-10">Manage Chart Data</h1>
      {isEditing ? (
        <form
        onSubmit={handleSubmit}
        className="bg-blue-50 shadow-md rounded-lg p-6 border border-gray-200 max-w-md mx-auto"
      >
        <h2 className="text-xl font-semibold text-center text-red-600 mb-4">Edit Chart Data</h2>
        {Object.keys(formData).map((key) => {
          if (key === "_id" || key === "createdAt" || key === "updatedAt") return null;
          return (
            <div key={key} className="flex flex-col mb-4">
              <label
                htmlFor={key}
                className="text-black font-medium capitalize mb-2"
              >
                {key.replace(/([A-Z])/g, " $1")}
              </label>
              <input
                id={key}
                type="number"
                name={key}
                value={formData[key] || ""}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          );
        })}
        <div className="flex space-x-4">
          <button
            type="submit"
            className="px-4 py-2 bg-green-500 text-white font-bold rounded hover:bg-green-600 transition w-full"
          >
            Update
          </button>
          <button
            type="button"
            onClick={() => setIsEditing(false)}
            className="px-4 py-2 bg-red-600 text-white font-bold rounded hover:bg-red-700 transition w-full"
          >
            Cancel
          </button>
        </div>
      </form>
      ) : (
        <div className="bg-blue-50 shadow-md rounded-lg p-6 border border-gray-200 max-w-md mx-auto">
  {chartData ? (
    <div className="space-y-4">
      {/* <h2 className="text-xl font-semibold text-center text-blue-700">Chart Data</h2> */}
      {Object.entries(chartData).map(([key, value]) => {
        if (key === "_id" || key === "createdAt" || key === "updatedAt") return null;
        return (
          <div key={key} className="flex justify-between items-center bg-white p-3 rounded-md shadow-sm hover:shadow transition-shadow">
            <strong className="text-gray-700 capitalize text-sm">
              {key.replace(/([A-Z])/g, " $1")}:
            </strong>
            <span className="text-gray-900 text-sm">{value}</span>
          </div>
        );
      })}
      <button
        onClick={() => setIsEditing(true)}
        className="px-4 py-2 bg-green-500 text-white font-medium rounded-md hover:bg-green-600 w-full mt-4 transition"
      >
        Edit Data
      </button>
    </div>
  ) : (
    <div className="text-center py-6">
      <p className="text-gray-500 text-sm">Loading chart data...</p>
    </div>
  )}
</div>

      )}
    </div>
  );
};

export default AdminChartData;
