import { useState } from "react";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { FaBlog , FaComments } from "react-icons/fa";

const Dashboard = () => {

  const [blog,setBlog] = useState([])
  const [comments,setComments] = useState([])
  useEffect(()=>{



     fetch("/api/get-allBlogs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          setBlog(data.blogData)
          
        } else {
          toast.error(data.message);
        }
      });
      fetch("/api/admin-comments").then((res)=>{
        return res.json()
      }).then((data)=>{
        if(data.success){
          setComments(data.commentData)
        }else{
          toast.error(data.message)
        }
      })
  },[blog,comments])

  return (
    <div className="mt-16">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow text-center">
            <FaBlog className="text-3xl text-blue-400"/>
            <h2 className="font-semibold">Total Blogs</h2>
            <p className="text-2xl font-bold text-blue-700">{blog.length}</p>
        </div>
         <div className="bg-white p-6 rounded-xl shadow text-center">
            <FaComments className="text-3xl text-blue-400"/>
            <h2 className="font-semibold">Comments</h2>
            <p className="text-2xl font-bold text-blue-700">{comments.length}</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
