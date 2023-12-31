import { useEffect, useState } from "react";
import { SingleUserDetails } from "../Followings/Followings";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../state/actions/user";


const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  
  
  const { users } = useSelector((state) => state.allUsers);

  useEffect(() => {
    dispatch(getAllUsers(searchQuery));
  }, [searchQuery, dispatch]);

  return (
    <>
      <header className="header">
        <div className="container">
          <form className="my-3">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search.."
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <span className="input-group-text">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.7871 22.7761L17.9548 16.9437C19.5193 15.145 20.4665 12.7982 20.4665 10.2333C20.4665 4.58714 15.8741 0 10.2333 0C4.58714 0 0 4.59246 0 10.2333C0 15.8741 4.59246 20.4665 10.2333 20.4665C12.7982 20.4665 15.145 19.5193 16.9437 17.9548L22.7761 23.7871C22.9144 23.9255 23.1007 24 23.2816 24C23.4625 24 23.6488 23.9308 23.7871 23.7871C24.0639 23.5104 24.0639 23.0528 23.7871 22.7761ZM1.43149 10.2333C1.43149 5.38004 5.38004 1.43681 10.2279 1.43681C15.0812 1.43681 19.0244 5.38537 19.0244 10.2333C19.0244 15.0812 15.0812 19.035 10.2279 19.035C5.38004 19.035 1.43149 15.0865 1.43149 10.2333Z"
                    fill="var(--primary)"
                  />
                </svg>
              </span>
            </div>
          </form>
        </div>
      </header>
      {users?.length > 0 ? (
        users?.map((user) => (
          <SingleUserDetails
            key={user._id}
            user={user}
          />
        ))
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
          }}
        >
          <h1>No user found</h1>
        </div>
      )}
    </>
  );
};

export default Search;
