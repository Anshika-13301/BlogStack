import { useEffect, useRef, useState } from "react";
import UploadImage from "../assets/image-upload.png";
import Quill from "quill";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../config";

const CreateBlog = () => {
  const [image, setImage] = useState(null);
  const [blogTitle, setBlogTitle] = useState("");
  const [blogSubTitle, setBlogSubTitle] = useState("");
  const [blogCategory, setblogCategory] = useState("");
  const [blogDesc, setblogDesc] = useState("");
  const [blogAction, setblogAction] = useState("");

  const EditorQuill = useRef(null);
  const QuillRef = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (!QuillRef.current && EditorQuill.current) {
      QuillRef.current = new Quill(EditorQuill.current, {
        theme: "snow",
      });

      QuillRef.current.on("text-change", () => {
        setblogDesc(QuillRef.current.root.innerHTML);
      });
    }

    return () => {
      if (QuillRef.current) {
        QuillRef.current = null;
      }
    };
  }, []);

  function handleForm(e) {
    e.preventDefault();

    if (!image) {
      toast.error("Please select a blog image");
      return;
    }

    const formData = new FormData();

    formData.append("blogTitle", blogTitle);
    formData.append("blogSubTitle", blogSubTitle);
    formData.append("blogCategory", blogCategory);
    formData.append("blogDesc", blogDesc);
    formData.append("blogAction", blogAction);
    formData.append("image", image);

    const token = localStorage.getItem("token");

    fetch(`${API_URL}/api/create-blog`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success(data.message);
          navigate("/admin/blogs");
        } else {
          toast.error(data.message);
        }
      })
      .catch((error) => {
        console.error("Create blog error:", error);
        toast.error("Unable to connect to server");
      });
  }

  return (
    <div className="flex mt-16">
      <div className="flex-1 p-10 min-h-screen">

        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Add Blog 🅱️
        </h1>

        <form
          className="bg-white shadow-md rounded-xl p-6 max-w-5xl mx-auto space-y-6 mt-5"
          onSubmit={handleForm}
        >

          {/* Upload Image */}
          <label
            htmlFor="image"
            className="block text-gray-700 font-medium mb-1"
          >
            Upload Image

            <img
              src={
                !image
                  ? UploadImage
                  : URL.createObjectURL(image)
              }
              alt="Blog preview"
              className="mt-2 h-16 rounded cursor-pointer"
            />

            <input
              type="file"
              name="image"
              id="image"
              hidden
              accept="image/*"
              onChange={(e) => {
                setImage(e.target.files[0]);
              }}
            />
          </label>

          {/* Blog Title */}
          <label className="block text-gray-700 font-medium mb-1">
            Blog Title
          </label>

          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type here.."
            value={blogTitle}
            onChange={(e) => {
              setBlogTitle(e.target.value);
            }}
          />

          {/* Sub Title */}
          <label className="block text-gray-700 font-medium mb-1">
            Sub Title
          </label>

          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type here.."
            value={blogSubTitle}
            onChange={(e) => {
              setBlogSubTitle(e.target.value);
            }}
          />

          {/* Category */}
          <label className="block text-gray-700 font-medium mb-1">
            Blog Category
          </label>

          <select
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={blogCategory}
            onChange={(e) => {
              setblogCategory(e.target.value);
            }}
          >
            <option value="">--Select--</option>
            <option value="Technology">Technology</option>
            <option value="Web Development">Web Development</option>
            <option value="Programming">Programming</option>
            <option value="Backend">Backend</option>
            <option value="Frontend">Frontend</option>
            <option value="Database">Database</option>
          </select>

          {/* Description */}
          <label className="block text-gray-700 font-medium mb-1">
            Blog Description
          </label>

          <div
            className="w-full h-74 pb-16 sm:pb-10 relative border border-gray-300 rounded"
          >
            <div ref={EditorQuill}></div>
          </div>

          {/* Publish Action */}
          <label className="block text-gray-700 font-medium mb-1">
            Action Publish
          </label>

          <select
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={blogAction}
            onChange={(e) => {
              setblogAction(e.target.value);
            }}
          >
            <option value="">--Select--</option>
            <option value="Publish">Publish</option>
            <option value="Unpublish">Unpublish</option>
          </select>

          {/* Button */}
          <div className="text-right">
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 cursor-pointer"
            >
              Add Blog
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default CreateBlog;