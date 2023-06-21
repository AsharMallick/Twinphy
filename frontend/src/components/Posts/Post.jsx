import React, { useState } from "react";
import { Link } from "react-router-dom";

const Post = ({ caption, imageUrl, user, userId, postId, comment, likes }) => {
  const [isLiked, setIsLiked] = useState(false);
  const handleLike = () => {
    setIsLiked(!isLiked);
  };
  return (
    <>
      <section className="flex flex-col h-fit mb-[100px] p-4 space-y-3 w-3/4 mx-auto">
        <div className="profile-details flex items-center space-x-4">
          <img src={user.avatar.url} alt="" className="w-[35px] " />
          <div className="flex flex-col font-bold">
            <p>{user.username}</p>
          </div>
        </div>
        <div className="caption text-lg font-semibold">
          <p>{caption}</p>
        </div>
        <div className="image">
          <img src={imageUrl} alt="" className="w-[100%] rounded-lg" />
        </div>
        <div className="actions flex flex-wrap space-x-3">
          <button
            onClick={handleLike}
            style={{ padding: "3px 20px" }}
            className="likes flex items-center  lg:text-lg bg-[#ffd3c3] rounded-full"
          >
            <i
              className={`fa-regular ${
                isLiked && "hidden"
              } text-primary fa-heart fill-icon mr-2`}
            ></i>
            <i
              className={`fa-solid fa-heart ${
                !isLiked && "hidden"
              } fill-icon-2 text-primary mr-2`}
            ></i>
            <p className="font-bold text-gray-700 ">{likes}</p>
          </button>
          <Link
            to={`/comments/` + postId}
            style={{ padding: "3px 20px" }}
            className="likes flex items-center  text-lg bg-purple-300 rounded-full"
          >
            <i className="fa-solid fa-comment fill-icon mr-2 text-purple-500"></i>
            <p className="font-bold text-gray-700 ">{comment}</p>
          </Link>
        </div>
      </section>
      <hr />
    </>
  );
};

export default Post;
