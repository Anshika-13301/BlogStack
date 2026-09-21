import { useEffect, useRef, useState } from "react";
import Quill from "quill";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

const EditBlog = () => {
  const [blogTitle, setBlogTitle] = useState("");
  const [blogSubTitle, setBlogSubTitle] = useState("");
  const [blogCategory, setblogCategory] = useState("");
  const [blogDesc, setblogDesc] = useState("");
  const [blogAction, setblogAction] = useState("");

  const EditorQuill = useRef(null);
  const QuillRef = useRef(null);

  const { id } = useParams();
  const navigate = useNavigate();

  function fetchBlogs() {
    fetch(`/api/blog-edit/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setBlogTitle(data.editData.title);
        setBlogSubTitle(data.editData.subTitle);
        setblogCategory(data.editData.category);
        setblogAction(data.editData.publish);
        setblogDesc(data.editData.description);
        QuillRef.current.root.innerHTML = data.editData.description;
      });
  }

  useEffect(() => {
    if (!QuillRef.current && EditorQuill.current) {
      QuillRef.current = new Quill(EditorQuill.current, { theme: "snow" });
    }

    QuillRef.current.on("text-change", () => {
      setblogDesc(QuillRef.current.root.innerHTML);
    });

    fetchBlogs();
  }, []);

  function handleForm(e) {
    e.preventDefault();
    const formData = {
      blogTitle,
      blogSubTitle,
      blogDesc,
      blogAction,
      blogCategory,
    };
    console.log(formData);
    fetch(`/api/blog-update/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          toast.success(data.message);
          navigate("/admin/blogs");
        } else {
          toast.error(data.message);
        }
      });
  }

  return (
    <div>
      <div className="flex mt-16">
        <div className="flex-1 p-10 min-h-screen">
          <h1 className="text-3xl font-bold mb-6 text-gray-800">
            Edit Blog 🅱️
          </h1>
          <form
            action=""
            className="bg-white shadow-md rounded-xl p-6 max-w-5xl mx-auto space-y-6 mt-5"
            onSubmit={handleForm}
          >
            <label htmlFor="" className="block text-gray-700 font-medium mb-1">
              Blog Title
            </label>
            <input
              type="text"
              name=""
              id=""
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Type here.."
              value={blogTitle}
              onChange={(e) => {
                setBlogTitle(e.target.value);
              }}
            />

            <label htmlFor="" className="block text-gray-700 font-medium mb-1">
              Sub Title
            </label>
            <input
              type="text"
              name=""
              id=""
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Type here.."
              value={blogSubTitle}
              onChange={(e) => {
                setBlogSubTitle(e.target.value);
              }}
            />

            <label htmlFor="" className="block text-gray-700 font-medium mb-1">
              Blog Category
            </label>
            <select
              name=""
              id=""
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
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

            <label htmlFor="" className="block text-gray-700 font-medium mb-1">
              Blog Description
            </label>
            <div
              className="w-full h-74 pb-16 sm:pb-10 relative
                      border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500
                      "
            >
              <div ref={EditorQuill}></div>
            </div>

            <label htmlFor="" className="block text-gray-700 font-medium mb-1">
              Action Publish
            </label>
            <select
              name=""
              id=""
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => {
                setblogAction(e.target.value);
              }}
            >
              <option value="">--Select--</option>
              <option value="Publish">Publish</option>
              <option value="Unpublish">Unpublish</option>
            </select>

            <div className="text-right">
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 cursor-pointer"
              >
                Edit Blog
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditBlog;
