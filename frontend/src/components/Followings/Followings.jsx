import { Link } from "react-router-dom";
const Followings = () => {
  return (
    <>
      <div className="page-wraper header-fixed">
        {/* <!-- Preloader -->
        <!-- <div id="preloader">
            <div class="spinner"></div>
        </div> --> */}
        <header className="header">
          <div className="container">
            <div className="main-bar">
              <div className="left-content">
                <h4 className="title mb-0">Jovi Daniel Jr.</h4>
              </div>
              <div className="mid-content"></div>
              <div className="right-content"></div>
            </div>
          </div>
        </header>

        <div className="page-content">
          <nav id="main-navigation">
            <ul className="links-container">
              <li className="nav-link active">85 Followings</li>
            </ul>
          </nav>
          <div className="swiper-scrollbar"></div>
          <div className="container profile-area pt-0">
            <article id="pages-container">
              <article id="pages-container-inner">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="contant-section style-2">
                      <div className="tab-content" id="myTab3Content">
                        <div
                          style={{ padding: "62px 10px" }}
                          className="tab-pane fade show active"
                          id="list"
                          role="tabpanel"
                          aria-labelledby="list-tab"
                        >
                          <div className="dz-user-list row g-3">
                            {/* Card Starts here */}
                            <div className="col-12">
                              <div className="user-grid style-2">
                                <Link
                                  to="/user/asasajskas"
                                  className="d-flex align-items-center"
                                >
                                  <div className="media status media-50">
                                    <img
                                      src="../../public/assets/images/stories/small/pic1.jpg"
                                      alt="/"
                                    />
                                    <div className="active-point"></div>
                                  </div>
                                  <span className="name">Andy Lee</span>
                                </Link>
                                <Link className="follow-btn">UNFOLLOW</Link>
                              </div>
                            </div>
                            {/* Card Ends here */}
                            <div className="col-12">
                              <div className="user-grid style-2">
                                <Link
                                  to="/user/asasajskas"
                                  className="d-flex align-items-center"
                                >
                                  <div className="media status media-50">
                                    <img
                                      src="../../public/assets/images/stories/small/pic2.jpg"
                                      alt="/"
                                    />
                                    <div className="active-point"></div>
                                  </div>
                                  <span className="name">Brian Harahap</span>
                                </Link>
                                <Link className="follow-btn">UNFOLLOW</Link>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="user-grid style-2">
                                <Link
                                  to="/user/asasajskas"
                                  className="d-flex align-items-center"
                                >
                                  <div className="media status media-50">
                                    <img
                                      src="../../public/assets/images/stories/small/pic3.jpg"
                                      alt="/"
                                    />
                                    <div className="active-point"></div>
                                  </div>
                                  <span className="name">Christian Hang</span>
                                </Link>
                                <Link className="follow-btn">UNFOLLOW</Link>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="user-grid style-2">
                                <Link
                                  to="/user/asasajskas"
                                  className="d-flex align-items-center"
                                >
                                  <div className="media status media-50">
                                    <img
                                      src="../../public/assets/images/stories/small/pic4.jpg"
                                      alt="/"
                                    />
                                    <div className="active-point"></div>
                                  </div>
                                  <span className="name">Chloe Mc.Jenskin</span>
                                </Link>
                                <Link className="follow-btn">UNFOLLOW</Link>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="user-grid style-2">
                                <Link
                                  to="/user/asasajskas"
                                  className="d-flex align-items-center"
                                >
                                  <div className="media status media-50">
                                    <img
                                      src="../../public/assets/images/stories/small/pic6.jpg"
                                      alt="/"
                                    />
                                    <div className="active-point"></div>
                                  </div>
                                  <span className="name">David Bekam</span>
                                </Link>
                                <Link className="follow-btn">UNFOLLOW</Link>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="user-grid style-2">
                                <Link
                                  to="/user/asasajskas"
                                  className="d-flex align-items-center"
                                >
                                  <div className="media status media-50">
                                    <img
                                      src="../../public/assets/images/stories/small/pic5.jpg"
                                      alt="/"
                                    />
                                    <div className="active-point"></div>
                                  </div>
                                  <span className="name">Dons John</span>
                                </Link>
                                <Link className="follow-btn">UNFOLLOW</Link>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="user-grid style-2">
                                <Link
                                  to="/user/asasajskas"
                                  className="d-flex align-items-center"
                                >
                                  <div className="media status media-50">
                                    <img
                                      src="../../public/assets/images/stories/small/pic6.jpg"
                                      alt="/"
                                    />
                                    <div className="active-point"></div>
                                  </div>
                                  <span className="name">Eric Leew</span>
                                </Link>
                                <Link className="follow-btn">UNFOLLOW</Link>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="user-grid style-2">
                                <Link
                                  to="/user/asasajskas"
                                  className="d-flex align-items-center"
                                >
                                  <div className="media status media-50">
                                    <img
                                      src="../../public/assets/images/stories/small/pic7.jpg"
                                      alt="/"
                                    />
                                    <div className="active-point"></div>
                                  </div>
                                  <span className="name">Richard Sigh</span>
                                </Link>
                                <Link className="follow-btn">UNFOLLOW</Link>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="user-grid style-2">
                                <Link
                                  to="/user/asasajskas"
                                  className="d-flex align-items-center"
                                >
                                  <div className="media status media-50">
                                    <img
                                      src="../../public/assets/images/stories/small/pic8.jpg"
                                      alt="/"
                                    />
                                    <div className="active-point"></div>
                                  </div>
                                  <span className="name">Andy Lee</span>
                                </Link>
                                <Link className="follow-btn">UNFOLLOW</Link>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="user-grid style-2">
                                <Link
                                  to="/user/asasajskas"
                                  className="d-flex align-items-center"
                                >
                                  <div className="media status media-50">
                                    <img
                                      src="../../public/assets/images/stories/small/pic5.jpg"
                                      alt="/"
                                    />
                                    <div className="active-point"></div>
                                  </div>
                                  <span className="name">Brian Harahapc</span>
                                </Link>
                                <Link className="follow-btn">UNFOLLOW</Link>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="user-grid style-2">
                                <Link
                                  to="/user/asasajskas"
                                  className="d-flex align-items-center"
                                >
                                  <div className="media status media-50">
                                    <img
                                      src="../../public/assets/images/stories/small/pic4.jpg"
                                      alt="/"
                                    />
                                    <div className="active-point"></div>
                                  </div>
                                  <span className="name">David Bekam</span>
                                </Link>
                                <Link className="follow-btn">UNFOLLOW</Link>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="user-grid style-2">
                                <Link
                                  to="/user/asasajskas"
                                  className="d-flex align-items-center"
                                >
                                  <div className="media status media-50">
                                    <img
                                      src="../../public/assets/images/stories/small/pic3.jpg"
                                      alt="/"
                                    />
                                    <div className="active-point"></div>
                                  </div>
                                  <span className="name">Jackson</span>
                                </Link>
                                <Link className="follow-btn">UNFOLLOW</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </article>
          </div>
        </div>
      </div>
    </>
  );
};

export default Followings;

export const SingleUserDetails = ({ user }) => {
  const styles = {
    width: "50vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "20px auto",
  };
  return (
    <div className="col-12" style={{ width: "100vw" }}>
      <div className="user-grid style-2" style={styles}>
        <Link to="/user/asasajskas" className="d-flex align-items-center">
          <div className="media status media-50">
            <img
              src="../../public/assets/images/stories/small/pic1.jpg"
              alt="/"
            />
            <div className="active-point"></div>
          </div>
          <span
            className="name"
            style={{
              marginLeft: "20px",
              color: "#2f2f2f",
              fontWeight: "bolder",
            }}
          >
            {user.username}
          </span>
        </Link>
        <Link className="follow-btn">UNFOLLOW</Link>
      </div>
    </div>
  );
};
