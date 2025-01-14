import { useState, useEffect } from "react";
import Link from "next/link";
import { useUser } from "../../context/UserContext";
import { FaCheck, FaSignOutAlt, FaTrash, FaEdit } from "react-icons/fa";
import Loader from "../../components/Loader";

export default function Users() {
  const { showPopup, updatePopup, logout } = useUser();
  const [users, setUsers] = useState([]);
  const [userRole, setUserRole] = useState(false);
  const [showDel, setShowDel] = useState(false);
  const [confirmation, setConfirmation] = useState(false);
  const [userId, setUserId] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    const userRole = localStorage.getItem("role");
    const userId = localStorage.getItem("userId");
    setLoading(true);
    const res = await fetch("/api/getUsers", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Role: userRole,
        "User-ID": userId,
      },
    });
    const data = await res.json();
    if (data.success) {
      setUsers(data.data);
      setLoading(false);
    } else {
      console.error("Failed to fetch users:", data.message);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(`/api/users/${userId}`, {
        method: "DELETE",
      });
      const data = await response.json();
      if (data.success) {
        setUsers((prevUser) => prevUser.filter((user) => user._id !== userId));
        setShowDel(false);
        setConfirmation(true);
        setTimeout(() => {
          setConfirmation(false);
        }, 3000);
      } else {
        console.error("Failed to delete post:", data.message);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsDeleting(false);
    }
  };

  useEffect(() => {
    fetchUsers();
    const role = Number(localStorage.getItem("role"));
    setUserRole(role);
  }, []);

  if (isDeleting || loading) return <Loader />;

  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-20 pb-20 pt-8">
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-semibold">
          {userRole ? "Info" : "All users"}
        </h1>
        {userRole ? (
          <Link
            className="px-4 py-2 bg-[#22C55E] text-white rounded hover:bg-[#D0312D] transition-all duration-300"
            href="/admin/addUser"
          >
            Add User
          </Link>
        ) : null}
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow-md overflow-hidden">
          <thead className="bg-green-600 text-white">
            <tr>
              <th className="py-3 px-4 text-left font-semibold">Index</th> 
              <th className="py-3 px-4 text-left font-semibold">Username</th>
              <th className="py-3 px-4 text-left font-semibold">Role</th>
              <th className="py-3 px-4 text-center font-semibold">Edit</th>
              {userRole ? (
                <th className="py-3 px-4 text-center font-semibold">Delete</th>
              ) : null}
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                key={user.user_id}
                className={`border-t hover:bg-gray-200 ${
                  index % 2 === 0 ? "bg-gray-100" : "bg-gray-50"
                }`}
              >
                <td className="py-3 px-4 text-gray-800 text-center">
                  {index + 1}
                </td> 
                <td className="py-3 px-4 text-gray-800">{user.username}</td>
                <td className="py-3 px-4 text-gray-800">
                  {user.role === 1 ? "Admin" : "Normal User"}
                </td>
                <td className="py-3 px-4 text-center">
                  <Link
                    className="text-blue-500 hover:text-blue-700 hover:underline block w-fit mx-auto"
                    href={`/admin/editUser/${user._id}`}
                  >
                    <FaEdit size={20} />
                  </Link>
                </td>
                {userRole ? (
                  <td className="py-3 px-4 text-center">
                    <div
                      className="text-red-500 hover:text-red-700 hover:underline cursor-pointer block w-fit mx-auto"
                      onClick={() => {
                        setShowDel((prevState) => !prevState);
                        setUserId(user._id);
                      }}
                    >
                      <FaTrash size={18} />
                    </div>
                  </td>
                ) : null}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Popup for confirmation */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-md shadow-lg text-center">
            <div className="flex flex-col justify-center items-center gap-5">
              <div className="bg-red-200 p-6 rounded-full flex items-center justify-center">
                <FaSignOutAlt size={25} color="red" />
              </div>
              <p className="mb-4 text-lg">Are you sure you want to logout?</p>
              <div className="flex justify-center gap-3">
                <button
                  onClick={() => {
                    logout();
                    updatePopup(false);
                  }}
                  className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                >
                  Yes
                </button>
                <button
                  onClick={() => updatePopup(false)}
                  className="px-4 py-2 bg-gray-300 text-black rounded-md hover:bg-gray-400"
                >
                  No
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Delete User Popup */}
      {showDel && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-md shadow-lg text-center">
            <div className="flex flex-col justify-center items-center gap-5">
              <div className="bg-red-200 p-6 rounded-full flex items-center justify-center">
                <FaTrash size={25} color="red" />
              </div>
              <p className="mb-4 text-lg">
                Are you sure you want to delete this user?
              </p>
              <div className="flex justify-center gap-3">
                <button
                  onClick={() => {
                    handleDelete();
                    setIsDeleting(true);
                  }}
                  className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                >
                  Yes
                </button>
                <button
                  onClick={() => setShowDel(false)}
                  className="px-4 py-2 bg-gray-300 text-black rounded-md hover:bg-gray-400"
                >
                  No
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Success Confirmation */}
      {confirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-md shadow-lg text-center">
            <div className="flex flex-col justify-center items-center gap-5">
              <div className="bg-green-400 p-6 rounded-full flex items-center justify-center">
                <FaCheck size={25} color="white" />
              </div>
              <p>User Deleted Successfully!</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
 