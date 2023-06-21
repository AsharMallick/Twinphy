import React from "react";
import Header from "../Header/Header";
import { InputUser } from "../Signup/Signup";
import { SingleUserDetails } from "../Followings/Followings";

const Search = () => {
  const user = {
    _id: "6f783ej38f3482343498",
    username: "Ashar Mallick",
    email: "asharmallick750@gmail.com",
    avatar: {
      public_id: "asoadmskdsmds",
      url: "https://img.freepik.com/free-icon/user_318-159711.jpg",
    },
  };
  return (
    <>
      <Header heading={"Search"} hideButtons={false} />
      <main className="pt-5">
        <section className="flex flex-col space-y-20 w-3/4 mx-auto">
          <div className="searchinp mx-auto">
            <InputUser width={"w-[50vw]"} />
          </div>
          <div className="users grid grid-cols-3 gap-6 mt-10">
            <SingleUserDetails user={user} />
            <SingleUserDetails user={user} />
            <SingleUserDetails user={user} />
            <SingleUserDetails user={user} />
            <SingleUserDetails user={user} />
            <SingleUserDetails user={user} />
            <SingleUserDetails user={user} />
            <SingleUserDetails user={user} />
          </div>
        </section>
      </main>
    </>
  );
};

export default Search;
