import React from "react";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import { SingleUserDetails } from "../Followings/Followings";
const Followers = () => {
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
            <h1 className="text-lg text-gray-700 font-bold">Followers</h1>
          </div>
          <SingleUserDetails user={user} />
        </div>
      </main>
    </>
  );
};

export default Followers;
