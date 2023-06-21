import React from "react";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import Post from "../Posts/Post";

const Myprofile = () => {
  const user = {
    _id: "6f783ej38f3482343498",
    username: "Ashar Mallick",
    email: "asharmallick750@gmail.com",
    avatar: {
      public_id: "asoadmskdsmds",
      url: "https://img.freepik.com/free-icon/user_318-159711.jpg",
    },
  };
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
      <Header heading={"Profile"} />
      <main className="w-full bg-secondary min-h-screen py-2 space-y-10">
        <div className="profile-details flex w-[95%] lg:w-3/4 mx-auto justify-between items-center">
          <div className="id flex flex-col lg:text-xl">
            <div className="email">@{user.email}</div>
            <div className="name font-bold text-primary">{user.username}</div>
          </div>
          <div className="image lg:ml-[100px]">
            <img src={user.avatar.url} alt="" className="w-[15vw]" />
          </div>
        </div>
        <div className="btns w-[95%] lg:w-3/4 mx-auto flex justify-center items-center text-white">
          <Link>
            <div className="posts flex  w-[30vw] flex-col bg-[#5231e2] justify-center items-center text-lg py-2 px-8 rounded-tr-none rounded-br-none rounded-xl">
              <span className="font-bold">{52}</span>
              <span className="font-bold">Posts</span>
            </div>
          </Link>
          <Link to={"/followings/" + user._id}>
            <div className="posts flex  w-[30vw] bg-[#704FFE] text-lg flex-col justify-center items-center  py-2 px-8">
              <span className="font-bold">{589}</span>
              <span className="font-bold">Followers</span>
            </div>
          </Link>
          <Link to={"/followers/" + user._id}>
            <div className="posts flex lg:w-[20vw] w-[30vw] flex-col  py-2 px-8 bg-[#704FFE] justify-center items-center text-lg rounded-tl-none rounded-bl-none rounded-xl">
              <span className="font-bold">{5232}</span>
              <span className="font-bold">Followings</span>
            </div>
          </Link>
        </div>
        <div className="myposts mb-40 bg-white w-3/4 mx-auto rounded-t-[40px] shadow-2xl shadow-primary pt-6 flex flex-col justify-center items-center">
          <h1 className="text-xl lg:text-3xl text-gray-900 font-bold">
            My Posts
          </h1>
          <Post
            caption={"Temp"}
            imageUrl={
              "https://www.postplanner.com/hubfs/how%20to%20write%20a%20facebook%20post.jpg"
            }
            comment={"23"}
            likes={"200"}
            user={user}
            postId={"6dfk32309dk32309dk3239"}
          />
          <Post
            caption={"Temp"}
            imageUrl={
              "https://www.postplanner.com/hubfs/how%20to%20write%20a%20facebook%20post.jpg"
            }
            comment={"23"}
            likes={"200"}
            user={user}
            postId={"6dfk32309dk32309dk3239"}
          />
          <Post
            caption={"Temp"}
            imageUrl={
              "https://www.postplanner.com/hubfs/how%20to%20write%20a%20facebook%20post.jpg"
            }
            comment={"23"}
            likes={"200"}
            user={user}
            postId={"6dfk32309dk32309dk3239"}
          />
        </div>
      </main>
    </>
  );
};

export default Myprofile;
