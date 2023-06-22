import { Link } from "react-router-dom";

const Newpost = () => {
  return (
    <>
      <div className="page-wraper header-fixed">
        <header className="header bg-white">
          <div className="container">
            <div className="main-bar">
              <div className="left-content">
                <Link to="/" className="back-btn">
                  <i className="fa-solid fa-arrow-left"></i>
                </Link>
                <h4 className="title mb-0">Create Post</h4>
              </div>
              <div className="mid-content"></div>
              <div className="right-content">
                <button style={{ border: "none" }} className="post-btn">
                  POST
                </button>
              </div>
            </div>
          </div>
        </header>
        <div className="page-content">
          <div className="container">
            <div className="post-profile">
              <div className="left-content">
                <div className="media media-50 rounded-circle">
                  <Link to="/profile">
                    <img src="assets/images/stories/small/pic1.jpg" alt="/" />
                  </Link>
                </div>
                <div className="ms-2">
                  <Link to="/profile">
                    <h6 className="mb-1">Emile Stork</h6>
                  </Link>
                  <ul className="meta-list">
                    {/* <li className="me-2">
                      <a
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasEnd1"
                        aria-controls="offcanvasEnd1"
                      >
                        <svg
                          className="me-1"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M14.2124 7.76241C14.2124 10.4062 12.0489 12.5248 9.34933 12.5248C6.6507 12.5248 4.48631 10.4062 4.48631 7.76241C4.48631 5.11865 6.6507 3 9.34933 3C12.0489 3 14.2124 5.11865 14.2124 7.76241ZM2 17.9174C2 15.47 5.38553 14.8577 9.34933 14.8577C13.3347 14.8577 16.6987 15.4911 16.6987 17.9404C16.6987 20.3877 13.3131 21 9.34933 21C5.364 21 2 20.3666 2 17.9174ZM16.1734 7.84875C16.1734 9.19506 15.7605 10.4513 15.0364 11.4948C14.9611 11.6021 15.0276 11.7468 15.1587 11.7698C15.3407 11.7995 15.5276 11.8177 15.7184 11.8216C17.6167 11.8704 19.3202 10.6736 19.7908 8.87118C20.4885 6.19676 18.4415 3.79543 15.8339 3.79543C15.5511 3.79543 15.2801 3.82418 15.0159 3.87688C14.9797 3.88454 14.9405 3.90179 14.921 3.93246C14.8955 3.97174 14.9141 4.02253 14.9396 4.05607C15.7233 5.13216 16.1734 6.44206 16.1734 7.84875ZM19.3173 13.7023C20.5932 13.9466 21.4317 14.444 21.7791 15.1694C22.0736 15.7635 22.0736 16.4534 21.7791 17.0475C21.2478 18.1705 19.5335 18.5318 18.8672 18.6247C18.7292 18.6439 18.6186 18.5289 18.6333 18.3928C18.9738 15.2805 16.2664 13.8048 15.5658 13.4656C15.5364 13.4493 15.5296 13.4263 15.5325 13.411C15.5345 13.4014 15.5472 13.3861 15.5697 13.3832C17.0854 13.3545 18.7155 13.5586 19.3173 13.7023Z"
                            fill="#130F26"
                          />
                        </svg>
                        Friends
                        <i className="fa-solid fa-angle-down ms-2"></i>
                      </a>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
            <div className="post-content-area">
              <textarea
                className="form-control"
                placeholder="What's on your mind?"
              ></textarea>
            </div>
          </div>
        </div>
        <footer className="footer border-0 fixed">
          <div className="container">
            <ul className="element-list">
              <input
                type="file"
                accept="image/*,video/*"
                style={{ display: "none" }}
                id="file"
              />
              <label htmlFor="file" style={{ cursor: "pointer" }}>
                <li>
                  <a>
                    <i className="fa-solid fa-file-image"></i>Photo/Video
                  </a>
                </li>
              </label>
            </ul>
          </div>
        </footer>
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasEnd1"
        >
          <div className="offcanvas-header px-3">
            <h5 className="offcanvas-title" id="offcanvasEndLabel">
              Post audience
            </h5>
            <button
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
              <i className="fa fa-close"></i>
            </button>
          </div>
          <div className="offcanvas-body small">
            <h6 className="title">Who can see your post?</h6>
            <ul className="list-style-1">
              <li>
                The Terms are to be read together by you with any terms,
                conditions or disclaimers provided in the pages of our website.
                Please review the Terms carefully. The Terms apply to all users
                of our website, including without limitation.
              </li>
              <li>
                The Terms are to be read together by you with any terms,
                conditions or disclaimers provided in the pages of our website.
                Please review the Terms carefully. The Terms apply to all users
                of our website, including without limitation.
              </li>
            </ul>
            <h6 className="title">Use of our Website</h6>
            <ul className="list-style-1">
              <li>
                You agree to not use our website to conduct any activity that
                would constitute a civil or criminal offence or violate any law.
              </li>
            </ul>
            <h6 className="title">Use of our Website</h6>
            <ul className="element-list style-2">
              <li>
                <a>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask
                      id="mask0_33437_4524"
                      maskUnits="userSpaceOnUse"
                      x="2"
                      y="13"
                      width="16"
                      height="9"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2 13.957H17.1838V21.0566H2V13.957Z"
                        fill="white"
                      />
                    </mask>
                    <g mask="url(#mask0_33437_4524)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.59176 15.457C6.81276 15.457 3.49976 15.814 3.49976 17.519C3.49976 18.871 5.54976 19.557 9.59176 19.557C13.6338 19.557 15.6838 18.864 15.6838 17.499C15.6838 16.144 13.6338 15.457 9.59176 15.457ZM9.59176 21.057C7.51576 21.057 1.99976 21.057 1.99976 17.519C1.99976 13.957 7.71376 13.957 9.59176 13.957C12.8508 13.957 17.1838 14.324 17.1838 17.499C17.1838 21.057 11.4698 21.057 9.59176 21.057Z"
                        fill="black"
                      />
                    </g>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.59181 3.5C7.58681 3.5 5.95581 5.131 5.95581 7.135C5.95581 9.139 7.58681 10.77 9.59181 10.77H9.62281C10.5868 10.766 11.4948 10.387 12.1758 9.7C12.8578 9.015 13.2308 8.104 13.2268 7.138C13.2268 5.131 11.5958 3.5 9.59181 3.5ZM9.59181 12.27C6.75981 12.27 4.45581 9.966 4.45581 7.135C4.45581 4.304 6.75981 2 9.59181 2C12.4228 2 14.7268 4.304 14.7268 7.135C14.7328 8.499 14.2038 9.787 13.2398 10.757C12.2778 11.728 10.9928 12.265 9.62581 12.27H9.59181Z"
                      fill="black"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16.4824 11.1318C16.1144 11.1318 15.7934 10.8608 15.7404 10.4858C15.6834 10.0758 15.9684 9.69577 16.3784 9.63877C17.6264 9.46377 18.5684 8.38077 18.5704 7.11877C18.5704 5.86477 17.6724 4.80677 16.4374 4.60477C16.0284 4.53677 15.7514 4.15177 15.8184 3.74277C15.8854 3.33377 16.2724 3.05877 16.6794 3.12377C18.6444 3.44577 20.0704 5.12677 20.0704 7.11977C20.0664 9.12477 18.5694 10.8468 16.5874 11.1248C16.5524 11.1298 16.5174 11.1318 16.4824 11.1318Z"
                      fill="black"
                    />
                    <mask
                      id="mask1_33437_4524"
                      maskUnits="userSpaceOnUse"
                      x="17"
                      y="13"
                      width="5"
                      height="6"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M17.8452 13.4834H21.979V18.4609H17.8452V13.4834Z"
                        fill="white"
                      />
                    </mask>
                    <g mask="url(#mask1_33437_4524)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M19.8955 18.4609C19.5925 18.4609 19.3075 18.2759 19.1945 17.9769C19.0475 17.5899 19.2425 17.1559 19.6295 17.0099C20.4795 16.6879 20.4795 16.2949 20.4795 16.1269C20.4795 15.5599 19.8085 15.1719 18.4855 14.9749C18.0755 14.9129 17.7925 14.5309 17.8535 14.1219C17.9155 13.7119 18.3045 13.4369 18.7065 13.4899C21.4125 13.8949 21.9795 15.1479 21.9795 16.1269C21.9795 16.8559 21.6645 17.8429 20.1615 18.4119C20.0745 18.4449 19.9845 18.4609 19.8955 18.4609Z"
                        fill="black"
                      />
                    </g>
                  </svg>
                </a>
                <div className="ms-2">
                  <h6 className="mb-0">Friends</h6>
                  <span>Lorem Ipsum dolor sit amet.</span>
                </div>
              </li>
              <li>
                <a>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask
                      id="mask0_33437_4524"
                      maskUnits="userSpaceOnUse"
                      x="2"
                      y="13"
                      width="16"
                      height="9"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2 13.957H17.1838V21.0566H2V13.957Z"
                        fill="white"
                      />
                    </mask>
                    <g mask="url(#mask0_33437_4524)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.59176 15.457C6.81276 15.457 3.49976 15.814 3.49976 17.519C3.49976 18.871 5.54976 19.557 9.59176 19.557C13.6338 19.557 15.6838 18.864 15.6838 17.499C15.6838 16.144 13.6338 15.457 9.59176 15.457ZM9.59176 21.057C7.51576 21.057 1.99976 21.057 1.99976 17.519C1.99976 13.957 7.71376 13.957 9.59176 13.957C12.8508 13.957 17.1838 14.324 17.1838 17.499C17.1838 21.057 11.4698 21.057 9.59176 21.057Z"
                        fill="black"
                      />
                    </g>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.59181 3.5C7.58681 3.5 5.95581 5.131 5.95581 7.135C5.95581 9.139 7.58681 10.77 9.59181 10.77H9.62281C10.5868 10.766 11.4948 10.387 12.1758 9.7C12.8578 9.015 13.2308 8.104 13.2268 7.138C13.2268 5.131 11.5958 3.5 9.59181 3.5ZM9.59181 12.27C6.75981 12.27 4.45581 9.966 4.45581 7.135C4.45581 4.304 6.75981 2 9.59181 2C12.4228 2 14.7268 4.304 14.7268 7.135C14.7328 8.499 14.2038 9.787 13.2398 10.757C12.2778 11.728 10.9928 12.265 9.62581 12.27H9.59181Z"
                      fill="black"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16.4824 11.1318C16.1144 11.1318 15.7934 10.8608 15.7404 10.4858C15.6834 10.0758 15.9684 9.69577 16.3784 9.63877C17.6264 9.46377 18.5684 8.38077 18.5704 7.11877C18.5704 5.86477 17.6724 4.80677 16.4374 4.60477C16.0284 4.53677 15.7514 4.15177 15.8184 3.74277C15.8854 3.33377 16.2724 3.05877 16.6794 3.12377C18.6444 3.44577 20.0704 5.12677 20.0704 7.11977C20.0664 9.12477 18.5694 10.8468 16.5874 11.1248C16.5524 11.1298 16.5174 11.1318 16.4824 11.1318Z"
                      fill="black"
                    />
                    <mask
                      id="mask1_33437_4524"
                      maskUnits="userSpaceOnUse"
                      x="17"
                      y="13"
                      width="5"
                      height="6"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M17.8452 13.4834H21.979V18.4609H17.8452V13.4834Z"
                        fill="white"
                      />
                    </mask>
                    <g mask="url(#mask1_33437_4524)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M19.8955 18.4609C19.5925 18.4609 19.3075 18.2759 19.1945 17.9769C19.0475 17.5899 19.2425 17.1559 19.6295 17.0099C20.4795 16.6879 20.4795 16.2949 20.4795 16.1269C20.4795 15.5599 19.8085 15.1719 18.4855 14.9749C18.0755 14.9129 17.7925 14.5309 17.8535 14.1219C17.9155 13.7119 18.3045 13.4369 18.7065 13.4899C21.4125 13.8949 21.9795 15.1479 21.9795 16.1269C21.9795 16.8559 21.6645 17.8429 20.1615 18.4119C20.0745 18.4449 19.9845 18.4609 19.8955 18.4609Z"
                        fill="black"
                      />
                    </g>
                  </svg>
                </a>
                <div className="ms-2">
                  <h6 className="mb-0">Friends exception...</h6>
                  <span>Lorem Ipsum dolor sit amet.</span>
                </div>
              </li>
              <li>
                <a>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16.9229 10.2C16.5089 10.2 16.1729 9.86401 16.1729 9.45001V7.30301C16.1729 5.20701 14.4679 3.50201 12.3719 3.50201H12.3559C11.3429 3.50201 10.3939 3.89201 9.67688 4.60301C8.95488 5.31701 8.55588 6.27001 8.55188 7.28601V9.45001C8.55188 9.86401 8.21588 10.2 7.80188 10.2C7.38788 10.2 7.05188 9.86401 7.05188 9.45001V7.30301C7.05788 5.86301 7.61488 4.53401 8.61988 3.53801C9.62588 2.54101 10.9539 1.96401 12.3749 2.00201C15.2949 2.00201 17.6729 4.38001 17.6729 7.30301V9.45001C17.6729 9.86401 17.3369 10.2 16.9229 10.2Z"
                      fill="black"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.542 10.1288C6.864 10.1288 5.5 11.4928 5.5 13.1708V17.4598C5.5 19.1378 6.864 20.5018 8.542 20.5018H16.183C17.86 20.5018 19.225 19.1378 19.225 17.4598V13.1708C19.225 11.4928 17.86 10.1288 16.183 10.1288H8.542ZM16.183 22.0018H8.542C6.037 22.0018 4 19.9648 4 17.4598V13.1708C4 10.6658 6.037 8.62878 8.542 8.62878H16.183C18.688 8.62878 20.725 10.6658 20.725 13.1708V17.4598C20.725 19.9648 18.688 22.0018 16.183 22.0018Z"
                      fill="black"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.3623 17.1756C11.9483 17.1756 11.6123 16.8396 11.6123 16.4256V14.2046C11.6123 13.7906 11.9483 13.4546 12.3623 13.4546C12.7763 13.4546 13.1123 13.7906 13.1123 14.2046V16.4256C13.1123 16.8396 12.7763 17.1756 12.3623 17.1756Z"
                      fill="black"
                    />
                  </svg>
                </a>
                <div className="ms-2">
                  <h6 className="mb-0">Only me</h6>
                  <span>Only me</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newpost;