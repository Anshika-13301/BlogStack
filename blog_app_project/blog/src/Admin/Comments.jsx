import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaTrash } from "react-icons/fa";

const Comments = () => {
  const [activeTab, setActiveTab] = useState(true);
  const [comments, setComments] = useState([]);

  const filteredComments = comments.filter((data) =>
    activeTab ? data.isApproved : !data.isApproved,
  );

  useEffect(() => {
    fetch("/api/admin-comments")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        
        setComments(data.commentData);
      });
  }, [comments]);

  function handleDelete(id) {
    fetch(`/api/comment-delete/${id}`, {
      method: "Delete",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          toast.success(data.message);
        } else {
          toast.error(data.message);
        }
      });
  }

  function handleUpdate(id){
    fetch(`/api/comment-approve/${id}`,{
      method:"PUT"
    }).then((res)=>{
      return res.json()
    }).then((data)=>{
      if(data.success){
        toast.success(data.message)
      }else{
        toast.error(data.message)
      }
    })
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen mt-16">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl text-gray-800 font-semibold">Comments</h1>
        {/* Tabes */}

        <div className="flex gap-4">
          <button
            className={`px-5 py-1 rounded-full border cursor-pointer ${
              activeTab
                ? "border-blue-500 text-blue-600"
                : "border-gray-400 text-gray-500"
            }`}
            onClick={() => {
              setActiveTab(true);
            }}
          >
            Approved
          </button>

          <button
            className={`px-5 py-1 rounded-full border cursor-pointer ${
              activeTab
                ? "border-blue-500 text-blue-600"
                : "border-gray-400 text-gray-500"
            }`}
            onClick={() => {
              setActiveTab(false);
            }}
          >
            Not Approved
          </button>
        </div>
      </div>
      {/* Table Container */}
      <div className="bg-white rounded-xl shadow p-6">
        {/* Table Head */}
        <div className="grid grid-cols-2 font-semibold text-gray-600 mb-4 ">
          <p>BLOG TITLE & COMMENT</p>
          <p className="text-right">ACTION</p>
        </div>

        {/* Comments List */}
        <div className="space-y-6 ">
          {filteredComments.map((item) => (
            <div
              key={item._id}
              className="grid grid-cols-2 items-start border border-gray-300 p-5 rounded-2xl"
            >
              {/* Blog + Comment */}
              <div>
                <p className="font-medium">Blog : {item.blog}</p>

                <div className="border border-blue-300 p-5 rounded-2xl mt-2">
                  <p className="mt-2">
                    <span className="font-medium">Name :</span> {item.userName}
                  </p>

                  <p>
                    <span className="font-medium">Comment :</span>{" "}
                    {item.userComment}
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex justify-end items-center gap-4">
                {/* Approve Button */}
                <button
                  className={`px-4 py-1 rounded-full text-sm  ${
                    item.isApproved
                      ? "bg-green-100 text-green-600 "
                      : "bg-yellow-100 text-yellow-600 cursor-pointer"
                  }`}
                  onClick={()=>{handleUpdate(item._id)}}
                >
                  {item.isApproved ? "Approved" : "Approve"}
                </button>

                {/* Delete */}
                <FaTrash
                  className="cursor-pointer text-gray-500 hover:text-red-500"
                  onClick={() => {
                    handleDelete(item._id);
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Comments;
