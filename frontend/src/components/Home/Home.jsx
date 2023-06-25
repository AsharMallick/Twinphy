import Post from "../Posts/Post";
import Story from "../Story/Story";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getPostOfFollowing, loadUser, logout } from "../../state/actions/user";

const user = {
  _id: "6f783ej38f3482343498",
  username: "Ashar Mallick",
  avatar: {
    public_id: "asoadmskdsmds",
    url: "https://img.freepik.com/free-icon/user_318-159711.jpg",
  },
};

const Home = () => {
  const { isAuthenticated } = useSelector((state) => state.user);

  const { posts } = useSelector((state) => state.postsOfFollowing);

  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      //   setTimeout(() => {
      navigate("/login");
      //   }, 1580);
    } else {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);
  const dispatch = useDispatch();

  const handleLogout = async () => {
    await dispatch(logout());
    dispatch(loadUser());
  };

  useEffect(() => {
    dispatch(getPostOfFollowing());
  }, [dispatch]);
  return (
    <>
      <main className="bg-gradient-2">
        <header className="header">
          <div className="container">
            <div className="main-bar">
              <div className="left-content">
                <h4 className="title mb-0">Home</h4>
              </div>
              <div className="mid-content"></div>

              <div className="right-content d-flex align-items-center">
                <a
                  style={{ cursor: "pointer" }}
                  onClick={handleLogout}
                  className="bell-icon me-2"
                >
                  {/* <svg
                    id="Layer_3"
                    height="24"
                    viewBox="0 0 22 22"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    data-name="Layer 3"
                  >
                    <g>
                      <path d="m-.0132 8v9a5.0018 5.0018 0 0 0 5 5h12a5.0018 5.0018 0 0 0 5-5v-9zm14.49 6.87-6 3.38a.9472.9472 0 0 1 -.49.13 1.0145 1.0145 0 0 1 -1-1v-6.76a1.0039 1.0039 0 0 1 1.49-.87l6 3.38a.9971.9971 0 0 1 0 1.74z" />
                      <path d="m6.0968 6h-6.11v-1a4.9909 4.9909 0 0 1 2.27-4.19l1.19 1.62z" />
                      <path d="m15.1068 6h-6.52l-2.96-4-1.44-1.93a4.2509 4.2509 0 0 1 .8-.07h5.72l1.46 2z" />
                      <path d="m21.9868 5v1h-4.4l-2.95-4-1.47-2h3.82a5.0018 5.0018 0 0 1 5 5z" />
                    </g>
                  </svg> */}
                  <img src="../../public/assets/images/icons/logout.png" />
                </a>
              </div>
            </div>
          </div>
        </header>
        {/* <Navbar /> */}
        <div className="page-content">
          <div className="content-inner pt-0">
            <div className="container bottom-content">
              <Story />
              {posts?.length > 0 ? (
                posts.map((post) => (
                  <Post
                    key={post._id}
                    caption={"Temp"}
                    imageUrl={
                      "https://www.postplanner.com/hubfs/how%20to%20write%20a%20facebook%20post.jpg"
                    }
                    comment={"23"}
                    likes={"200"}
                    user={user}
                    postId={"6dfk32309dk32309dk3239"}
                  />
                ))
              ) : (
                <>
                  <h1>No posts to show</h1>
                  <small>(Pease follow someone)</small>
                </>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
