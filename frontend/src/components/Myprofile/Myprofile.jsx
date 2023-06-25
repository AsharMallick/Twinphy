import { useEffect } from "react";
import { Link } from "react-router-dom";
import Post from "../Posts/Post";
import { useSelector, useDispatch } from "react-redux";
import { getMyPosts } from "../../state/actions/user";

const Myprofile = () => {
  const { user, loading } = useSelector((state) => state.user);
  const { posts } = useSelector((state) => state.myPosts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyPosts());
  }, [dispatch]);

  return (
    <>
      {!loading ? (
        <div className="page-wraper header-fixed">
          {/* <!-- <div id="preloader">
        <div class="spinner"></div>
    </div> -->
        <!-- Preloader end-->

        <!-- Header --> */}
          <header className="header">
            <div className="container">
              <div className="main-bar">
                <div className="left-content">
                  {/* <a className="back-btn">
                  <i className="fa-solid fa-arrow-left"></i>
                </a> */}
                  <h4 className="title mb-0">Profile</h4>
                </div>
                <div className="mid-content"></div>
              </div>
            </div>
          </header>
          {/* <!-- Header End --> */}

          {/* <!-- Page Content --> */}
          <div className="page-content">
            <div className="container profile-area">
              <div className="profile">
                <div className="main-profile">
                  <div className="left-content">
                    <span>@{user?.email.split("@")[0]}</span>
                    <h5 className="mt-1">{user?.name}</h5>
                  </div>
                  <div className="right-content">
                    <div className="upload-box">
                      <img src={user?.avatar.url} alt="/" />
                      <Link to="/editprofile" className="upload-btn">
                        <i className="fa-solid fa-pencil"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="contant-section">
                <div className="social-bar">
                  <ul>
                    <li className="active">
                      <a>
                        <h4>{user?.posts?.length}</h4>
                        <span>Post</span>
                      </a>
                    </li>
                    <li>
                      <Link to="/followings/asasas">
                        <h4>{user?.following?.length}</h4>
                        <span>Following</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/followers/asaisa">
                        <h4>{user?.followers?.length}</h4>
                        <span>Followers</span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="title-bar my-2">
                  <h6 style={{ margin: "10px 0px" }} className="mb-0">
                    My Posts
                  </h6>
                  {/* <div className="dz-tab style-2">
                  <ul className="nav nav-tabs" id="myTab3" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        id="home-tab3"
                        data-bs-toggle="tab"
                        data-bs-target="#home-tab-pane3"
                        type="button"
                        role="tab"
                        aria-controls="home-tab-pane"
                        aria-selected="true"
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10 3H3V10H10V3Z"
                            stroke="var(--primary)"
                            strokeWidth="2"
                            strokeOpacity="0.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M21 3H14V10H21V3Z"
                            stroke="var(--primary)"
                            strokeWidth="2"
                            strokeOpacity="0.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M21 14H14V21H21V14Z"
                            stroke="var(--primary)"
                            strokeWidth="2"
                            strokeOpacity="0.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M10 14H3V21H10V14Z"
                            stroke="var(--primary)"
                            strokeWidth="2"
                            strokeOpacity="0.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="profile-tab3"
                        data-bs-toggle="tab"
                        data-bs-target="#profile-tab-pane3"
                        type="button"
                        role="tab"
                        aria-controls="profile-tab-pane"
                        aria-selected="false"
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8 6H21"
                            stroke="var(--primary)"
                            strokeOpacity="0.5"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M8 12H21"
                            stroke="var(--primary)"
                            strokeOpacity="0.5"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M8 18H21"
                            stroke="var(--primary)"
                            strokeOpacity="0.5"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M3 6H3.01"
                            stroke="var(--primary)"
                            strokeOpacity="0.5"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M3 12H3.01"
                            stroke="var(--primary)"
                            strokeOpacity="0.5"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M3 18H3.01"
                            stroke="var(--primary)"
                            strokeOpacity="0.5"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </li>
                  </ul>
                </div> */}
                </div>
                <div
                  style={{ marginTop: "20px" }}
                  className="tab-content"
                  id="myTabContent3"
                >
                  <div
                    className="tab-pane fade show active"
                    id="home-tab-pane3"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                    tabIndex="0"
                  >
                    {/* <div className="dz-lightgallery style-2" id="lightgallery">
                    <a
                      className="gallery-box"
                      href="assets/images/post/pic1.png"
                    >
                      <img
                        src="../../public/assets/images/post/pic1.png"
                        alt="image"
                      />
                    </a>
                    <a
                      className="gallery-box"
                      href="assets/images/post/pic2.png"
                    >
                      <img
                        src="../../public/assets/images/post/pic2.png"
                        alt="image"
                      />
                    </a>
                    <a
                      className="gallery-box"
                      href="assets/images/post/pic3.png"
                    >
                      <img
                        src="../../public/assets/images/post/pic3.png"
                        alt="image"
                      />
                    </a>
                    <a
                      className="gallery-box"
                      href="assets/images/post/pic4.png"
                    >
                      <img
                        src="../../public/assets/images/post/pic4.png"
                        alt="image"
                      />
                    </a>
                    <a
                      className="gallery-box"
                      href="assets/images/post/pic5.png"
                    >
                      <img
                        src="../../public/assets/images/post/pic5.png"
                        alt="image"
                      />
                    </a>
                    <a
                      className="gallery-box"
                      href="assets/images/post/pic6.png"
                    >
                      <img
                        src="../../public/assets/images/post/pic6.png"
                        alt="image"
                      />
                    </a>
                    <a
                      className="gallery-box"
                      href="assets/images/post/pic7.png"
                    >
                      <img
                        src="../../public/assets/images/post/pic7.png"
                        alt="image"
                      />
                    </a>
                    <a
                      className="gallery-box"
                      href="assets/images/post/pic8.png"
                    >
                      <img
                        src="../../public/assets/images/post/pic8.png"
                        alt="image"
                      />
                    </a>
                  </div> */}
                    {user && user.posts?.length >= 0 ? (
                      user.posts.map((post) => (
                        <Post
                          key={post._id}
                          caption={post.caption}
                          fileUrl={post.file.url}
                          comment={post.comments.length}
                          likes={post.likes.length}
                          user={user}
                          postId={post._id}
                        />
                      ))
                    ) : (
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          minHeight: "",
                        }}
                      >
                        <h1>No post found</h1>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
          }}
        >
          <h1>Loading...</h1>
        </div>
      )}
    </>
  );
};

export default Myprofile;
