import React from "react";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
const Followings = () => {
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
      <Header heading={user.username} hideButtons={true} />
      <main className="min-h-screen bg-secondary pt-5">
        <div className="folloings flex flex-col w-3/4 mx-auto space-y-7">
          <div className="heading">
            <h1 className="text-lg text-gray-700 font-bold">Followings</h1>
          </div>
          <SingleUserDetails user={user} />
        </div>
      </main>
    </>
  );
};

export default Followings;

export const SingleUserDetails = ({ user }) => {
  return (
    <Link to={"/user/aismaisfdskm"}>
      <div className="user-details flex items-center space-x-5">
        <div className="img">
          <img src={user.avatar.url} alt="" className="w-[4vw]" />
        </div>
        <div className="username text-lg font-bold">{user.username}</div>
      </div>
    </Link>
  );
};
