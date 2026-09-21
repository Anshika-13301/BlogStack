import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Categories = [
  "All",
  "Technology",
  "Web Development",
  "Programming",
  "Backend",
  "Frontend",
  "Database",
];

const Blogs = ({searchTerm}) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [blogs, setBlogs] = useState([]);

  const filterByCategory =
    activeCategory === "All"
      ? blogs
      : blogs.filter((blog) => blog.category === activeCategory);

      const filteredBlogs = searchTerm ? filterByCategory.filter((blog)=>{
        const term = searchTerm.toLowerCase();
        return(
          blog.title?.toLowerCase().includes(term)||
            blog.category?.toLowerCase().includes(term)||
              blog.subTitle?.toLowerCase().includes(term)
        )
      }) : filterByCategory


  useEffect(() => {
    fetch("/api/user-blog-data")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBlogs(data.blogData);
      })
      .catch((error) => {
        console.error("Failed to load blog data:", error);
      });
  }, []);

  return (
    <div className="py-1 px-4 m-14">
      <div className="max-w-7xl mx-auto">
        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {Categories.map((cat) => (
            <button
              onClick={() => {
                setActiveCategory(cat);
              }}
              key={cat}
              className={`px-5 py-2 rounded-full transition cursor-pointer ${
                activeCategory === cat
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-blue-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
      {/* Blog Cards */}

      {
        filteredBlogs.length === 0 ? 
        <div className="text-center text-gray-600 py-20">
          No blogs match your search. Try a different Keyword or category
        </div>: <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredBlogs.map((blog) => (
          <Link key={blog._id} to={`/blog-details/${blog._id}`}>
            <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow hover:shadow-blue-200 transition h-full">
              {/* image */}
              <img
                src={`http://localhost:5000/uploads/${blog.blogImage}`}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              {/* Content */}
              <div className="p-5">
                {/* Category tag */}
                <span className="text-sm bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                  {blog.category}
                </span>
                {/* Title */}
                <h2 className="mt-3 font-semibold text-lg ">{blog.title}</h2>
               
              </div>
            </div>
          </Link>
        ))}
      </div>
      }

     
    </div>
  );
};

export default Blogs;
