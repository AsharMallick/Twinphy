// import { useState } from "react";
import { Link } from "react-router-dom";

const Post = ({
  caption,
  fileUrl,
  user,
  userId,
  postId,
  comment,
  likes,
  isVideo,
}) => {
  //   const [isLiked, setIsLiked] = useState(false);
  //   const handleLike = () => {
  //     setIsLiked(!isLiked);
  //   };
  let fileExt = fileUrl.split(".")[fileUrl.split(".").length - 1];
  return (
    <div className="page-content" style={{ marginBottom: "-70px" }}>
      <div className="content-inner pt-0">
        <div className="container bottom-content">
          <div className="post-area">
            <div className="post-card">
              <div className="top-meta">
                <div className="d-flex justify-content-between align-items-start">
                  <Link to="/user/sodjskdmkld" className="media media-40">
                    <img className="rounded" src={user.avatar.url} alt="/" />
                  </Link>
                  <div className="meta-content ms-3">
                    <h6 className="title mb-0">
                      <Link to={"/user/" + userId}>{user.name}</Link>
                    </h6>
                  </div>
                </div>
                <a
                  className="item-content item-link"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasBottom1"
                  aria-controls="offcanvasBottom"
                >
                  <svg
                    width="15"
                    height="14"
                    viewBox="0 0 15 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.7566 4.93237L9.60021 0.182841C9.14886 -0.23294 8.4375 0.104591 8.4375 0.750465V3.25212C3.73157 3.30959 0 4.31562 0 9.07267C0 10.9927 1.1596 12.8948 2.4414 13.8893C2.84139 14.1996 3.41145 13.8101 3.26397 13.3071C1.93553 8.77542 3.89405 7.57236 8.4375 7.50264V10.25C8.4375 10.8969 9.14942 11.2329 9.60021 10.8176L14.7566 6.06761C15.0809 5.7688 15.0814 5.23158 14.7566 4.93237Z"
                      fill="#E4BEAB"
                    />
                  </svg>
                </a>
              </div>
              <p className="text-black">{caption}</p>
              <div className="dz-meda">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {fileExt === "mp4" || fileExt === "avi" ? (
                    <video
                      src={fileUrl}
                      style={{
                        width: "50%",
                      }}
                      controls
                    ></video>
                  ) : (
                    <img src={fileUrl} style={{ width: "150px" }} />
                  )}
                </div>
                <div className="post-meta-btn">
                  <ul>
                    <li>
                      <a className="action-btn bg-primary">
                        <i className="fa-regular fa-heart fill-icon"></i>
                        <i className="fa-solid fa-heart fill-icon-2"></i>
                        <h6 className="font-14 mb-0 ms-2" id="value1">
                          {likes}
                        </h6>
                      </a>
                    </li>
                    <li>
                      <Link
                        to="/comments/dshdsjds"
                        className="action-btn bg-secondary"
                      >
                        <i className="fa-solid fa-comment fill-icon"></i>
                        <h6 className="font-14 mb-0 ms-2">{comment}</h6>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
