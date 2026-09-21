import { Link, useNavigate } from "react-router-dom";
import { IoMdExit } from "react-icons/io";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/admin-login");
  };

  return (
    <div className="w-60 bg-gray-700 text-white p-5 mt-16">

      <h2 className="text-2xl font-bold mb-6">
        Admin Panel
      </h2>

      <ul className="space-y-6">

        <li className="hover:text-blue-500">
          <Link to="/admin">
            Dashboard
          </Link>
        </li>

        <li className="hover:text-blue-500">
          <Link to="/admin/blogs">
            Manage Blogs
          </Link>
        </li>

        <li className="hover:text-blue-500">
          <Link to="/admin/comments">
            Comments
          </Link>
        </li>

        {/* Exit / Logout */}
        <li className="hover:text-blue-500">
          <button
            onClick={handleLogout}
            className="cursor-pointer flex items-center"
          >
            Exit
            <IoMdExit className="ml-1 text-xl text-red-500" />
          </button>
        </li>

      </ul>

    </div>
  );
};

export default Sidebar;