import { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { useParams } from "react-router-dom";
import DOMPurify from "dompurify";
import { toast } from "react-hot-toast";
import { API_URL } from "../config";

const BlogDetails = () => {
  const { id } = useParams();

  const [blogs, setBlogs] = useState({});
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [allComments, setAllComments] = useState([]);

  useEffect(() => {
    // Get Blog Details
    fetch(`${API_URL}/api/blog-details-page/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data.blog);
      })
      .catch((error) => {
        console.error("Failed to load blog:", error);
      });

    // Get Comments
    fetch(`${API_URL}/api/user-comments`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setAllComments(data.comments);
        } else {
          toast.error(data.message);
        }
      })
      .catch((error) => {
        console.error("Failed to load comments:", error);
      });
  }, [id]);

  const formatDate = (value) => {
    if (!value) return "";

    const date = new Date(value);

    if (Number.isNaN(date.getTime())) return value;

    const dd = String(date.getDate()).padStart(2, "0");
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const yy = String(date.getFullYear()).slice(-2);

    return `${dd}/${mm}/${yy}`;
  };

  function handleForm(e) {
    e.preventDefault();

    const title = blogs.title;

    const formData = {
      name,
      comment,
      title,
    };

    fetch(`${API_URL}/api/comment-add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success(data.message);
          setComment("");
          setName("");
        } else {
          toast.error(data.message);
        }
      })
      .catch((error) => {
        console.error("Comment error:", error);
        toast.error("Something went wrong");
      });
  }

  return (
    <div className="bg-gray-100 min-h-screen py-20 px-3">
      <div className="max-w-5xl mx-auto">

        {/* Published Date */}
        <div className="px-6 py-1.5 text-blue-500 font-bold text-center">
          Published on {formatDate(blogs.createdAt)}
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-center">
          {blogs.title}
        </h1>

        {/* Category */}
        <div className="flex justify-center mt-3">
          <span className="bg-blue-100 text-blue-600 px-4 py-1.5 rounded-full text-sm">
            {blogs.category}
          </span>
        </div>

        {/* Image */}
        <div className="mt-6">
          <img
            src={`${API_URL}/uploads/${blogs.blogImage}`}
            alt={blogs.title}
            className="w-full h-96 object-cover rounded-xl"
          />
        </div>

        {/* Subtitle */}
        <h2 className="mt-6 text-xl font-semibold text-center">
          {blogs.subTitle}
        </h2>

        {/* Blog Content */}
        <div className="mt-4 space-y-4 text-gray-700 leading-relaxed text-sm">

          <div
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(blogs.description || ""),
            }}
          ></div>

          <div className="border-t my-8"></div>

          {/* Comment Section */}
          <div>
            <h3 className="font-semibold mb-4">
              Add Your Comments
            </h3>

            <form onSubmit={handleForm}>

              <input
                type="text"
                placeholder="Add name.."
                className="w-full border border-gray-400 rounded-md p-3 outline-none text-sm mb-4"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />

              <textarea
                placeholder="Add a comment.."
                className="w-full border border-gray-400 rounded-md p-3 outline-none text-sm mb-4"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                required
              ></textarea>

              <button
                className="mt-3 px-5 py-2 bg-blue-500 text-white rounded-md cursor-pointer hover:bg-blue-600 transition"
                type="submit"
              >
                Submit
              </button>

            </form>

            {/* Comments List */}
            <div className="mt-6 space-y-4">
              {allComments.map((cmnt) => (
                <div
                  key={cmnt._id}
                  className="bg-white p-4 rounded-md shadow-sm"
                >
                  <FaUserCircle className="text-gray-400 text-2xl" />

                  <p className="text-sm font-semibold">
                    {cmnt.userName}
                  </p>

                  <p className="mt-2 text-sm">
                    {cmnt.userComment}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Share */}
          <div className="mt-10 text-center text-sm text-gray-500">
            Share this article on

            <div className="flex justify-center gap-4 mt-2">

              <span className="cursor-pointer">
                <FaFacebook className="text-2xl text-blue-600" />
              </span>

              <span className="cursor-pointer">
                <FaInstagram className="text-2xl text-red-600" />
              </span>

              <span className="cursor-pointer">
                <FaTwitter className="text-2xl text-blue-600" />
              </span>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BlogDetails;