import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from "./pages/Home";
import Blogs from "./components/Blogs";
import About from "./pages/About";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import BlogDetails from "./pages/BlogDetails";

import AdminLogin from "./Admin/AdminLogin";
import AdminLayout from "./Admin/AdminLayout";
import Dashboard from "./Admin/Dashboard";
import AllBlogs from "./Admin/AllBlogs";
import CreateBlog from "./Admin/CreateBlog";
import Comments from "./Admin/Comments";
import EditBlog from "./Admin/EditBlog";

import "quill/dist/quill.snow.css";

const App = () => {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        {/* User Pages */}

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/blogs"
          element={<Blogs />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/blog-details/:id"
          element={<BlogDetails />}
        />


        {/* Admin Login */}

        <Route
          path="/admin-login"
          element={<AdminLogin />}
        />


        {/* Admin Dashboard */}

        <Route
          path="/admin"
          element={
            <AdminLayout>
              <Dashboard />
            </AdminLayout>
          }
        />


        {/* All Blogs */}

        <Route
          path="/admin/blogs"
          element={
            <AdminLayout>
              <AllBlogs />
            </AdminLayout>
          }
        />


        {/* Create Blog */}

        <Route
          path="/admin/create"
          element={
            <AdminLayout>
              <CreateBlog />
            </AdminLayout>
          }
        />


        {/* Comments */}

        <Route
          path="/admin/comments"
          element={
            <AdminLayout>
              <Comments />
            </AdminLayout>
          }
        />


        {/* Edit Blog */}

        <Route
          path="/admin/edit-blog/:id"
          element={
            <AdminLayout>
              <EditBlog />
            </AdminLayout>
          }
        />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
};

export default App;