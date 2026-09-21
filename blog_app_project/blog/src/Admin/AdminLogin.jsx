import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../config";

const AdminLogin = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  function handleForm(e) {
    e.preventDefault();

    fetch(`${API_URL}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success(data.message);

          localStorage.setItem("token", data.token);

          navigate("/admin");
        } else {
          toast.error(data.message);
        }
      })
      .catch((error) => {
        console.error("Login error:", error);
        toast.error("Unable to connect to server");
      });
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-purple-200">

        <h2 className="text-2xl font-bold text-center mb-2">
          Admin Login
        </h2>

        <p className="text-center text-gray-500 mb-6">
          Welcome Back! Please login to continue
        </p>

        <form onSubmit={handleForm}>

          {/* Email */}
          <div>
            <label className="text-sm font-medium">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email.."
              className="w-full mt-1 px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-500"
              value={form.email}
              onChange={(e) =>
                setForm({
                  ...form,
                  email: e.target.value,
                })
              }
              required
            />
          </div>

          {/* Password */}
          <div className="mt-4">
            <label className="text-sm font-medium">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password.."
              className="w-full mb-3 mt-1 px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-500"
              value={form.password}
              onChange={(e) =>
                setForm({
                  ...form,
                  password: e.target.value,
                })
              }
              required
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition cursor-pointer"
          >
            Login
          </button>

        </form>
      </div>
    </div>
  );
};

export default AdminLogin;