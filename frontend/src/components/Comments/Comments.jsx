import React from "react";
import Header from "../Header/Header";
import { useParams } from "react-router-dom";
import { InputUser } from "../Signup/Signup";

const Comments = () => {
  const { id } = useParams();
  console.log(id);
  const post = {
    _id: "6a9mskdmskdwsdksmdsdmsjmdjsd",
    title: "Temp",
    comments: [
      {
        user: {
          _id: "6f783ej38f3482343498",
          username: "Ashar Mallick",
          avatar: {
            public_id: "asoadmskdsmds",
            url: "https://img.freepik.com/free-icon/user_318-159711.jpg",
          },
        },
        comment:
          "Awesome app i ever used. great structure, and customizable for multipurpose. 😀😀",
      },
      {
        user: {
          _id: "6f783ej38f3482343498",
          username: "Ashar Mallick2",
          avatar: {
            public_id: "asoadmskdsmds",
            url: "https://img.freepik.com/free-icon/user_318-159711.jpg",
          },
        },
        comment: "Nice work... 😍😍",
      },
      {
        user: {
          _id: "6f783ej38f3482343498",
          username: "Ashar Mallick3",
          avatar: {
            public_id: "asoadmskdsmds",
            url: "https://img.freepik.com/free-icon/user_318-159711.jpg",
          },
        },
        comment: "We will always be friends until we are so old and senile.",
      },
    ],
  };
  return (
    <>
      <Header heading={"Comments"} hideButtons={true} />
      {post.comments.map((comment, index) => (
        <>
          <section key={index} className="flex items-center my-7 w-3/4 mx-auto">
            <div className="profile-photo flex items-center space-x-3">
              <img
                src={comment.user.avatar.url}
                alt=""
                className="w-[35px] h-[35px]"
              />
              <div className="details">
                <div className="username font-bold">
                  {comment.user.username}
                </div>
                <div className="comment">{comment.comment}</div>
              </div>
            </div>
          </section>
        </>
      ))}
      <div className="add-comment fixed bottom-28 order-b-2 flex justify-center space-x-4 items-center w-full h-[10vh]">
        <div className="img">
          <img
            className="w-[35px]"
            src="https://img.freepik.com/free-icon/user_318-159711.jpg"
            alt=""
          />
        </div>
        <div className="textarea">
          <input
            type="text"
            className="w-[70vw] outline-none p-2 placeholder:font-bold"
            placeholder="Comment"
          />
        </div>
        <div className="submit">
          <button className="bg-primary text-white p-2 rounded-md">
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default Comments;
