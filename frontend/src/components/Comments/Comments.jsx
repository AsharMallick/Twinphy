import Header from "../Header/Header";
import { Link } from "react-router-dom";
const Comments = () => {
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
      <Header heading={"Comments"} hideButtons={true} />
      <div className="page-wraper header-fixed">
        <header className="header bg-white">
          <div className="container">
            <div className="main-bar">
              <div className="left-content">
                {/* <a className="back-btn">
                  <i className="fa-solid fa-arrow-left"></i>
                </a> */}
                <h4 className="title mb-0">Comments</h4>
              </div>
              <div className="mid-content"></div>
              <div className="right-content"></div>
            </div>
          </div>
        </header>
        <div className="page-content">
          <div className="container profile-area bottom-content">
            <ul className="dz-comments-list">
              <li>
                <div className="list-content">
                  <img
                    src="../../public/assets/images/stories/small/pic1.jpg"
                    alt="/"
                  />
                  <div>
                    <Link to="/user/asjaksmask">
                      <h6 className="font-14 mb-1">Lucas Mokmana</h6>
                    </Link>
                    <p className="mb-2">
                      Awesome app i ever used. great structure, and customizable
                      for multipurpose. 😀😀
                    </p>
                    {/* <ul className="bottom-item">
                      <li className="text-light">3 Like</li>
                      <li className="text-light">Reply</li>
                      <li className="text-light">Send</li>
                    </ul> */}
                  </div>
                </div>
                {/* <div className="ms-auto">
                  <div className="like-button">
                    <i className="fa-regular fa-heart ms-auto"></i>
                  </div>
                </div> */}
              </li>
              <li>
                <div className="list-content">
                  <img
                    src="../../public/assets/images/stories/small/pic3.jpg"
                    alt="/"
                  />
                  <div>
                    <Link to="/user/asjaksmask">
                      <h6 className="font-14 mb-1">Hendri Lee</h6>
                    </Link>
                    <p className="mb-2">Nice work... 😍😍</p>
                    {/* <ul className="bottom-item">
                      <li className="text-light">2 Like</li>
                      <li className="text-light">Reply</li>
                      <li className="text-light">Send</li>
                    </ul> */}
                  </div>
                </div>
                {/* <div className="ms-auto">
                  <div className="like-button">
                    <i className="fa-regular fa-heart ms-auto"></i>
                  </div>
                </div> */}
              </li>
              <li>
                <div className="list-content">
                  <img
                    src="../../public/assets/images/stories/small/pic4.jpg"
                    alt="/"
                  />
                  <div>
                    <Link to="/user/asjaksmask">
                      <h6 className="font-14 mb-1">Temp user</h6>
                    </Link>
                    <p className="mb-2">
                      We will always be friends until we are so old and senile.
                    </p>
                    {/* <ul className="bottom-item">
                      <li className="text-light">7 Like</li>
                      <li className="text-light">Reply</li>
                      <li className="text-light">Send</li>
                    </ul> */}
                  </div>
                </div>
                {/* <div className="ms-auto">
                  <div className="like-button">
                    <i className="fa-regular fa-heart ms-auto"></i>
                  </div>
                </div> */}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comments;
