const Editprofile = () => {
  return (
    <>
      <div className="page-wraper header-fixed">
        <header className="header bg-white">
          <div className="container">
            <div className="main-bar">
              <div className="left-content">
                <h4 className="title mb-0">Edit profile</h4>
              </div>
              <div className="mid-content"></div>
            </div>
          </div>
        </header>

        <div className="page-content">
          <div className="container">
            <div className="edit-profile">
              <div className="profile-image">
                <div className="media media-100 rounded-circle">
                  <img src="assets/images/stories/pic3.png" alt="/" />
                </div>
                <input
                  type="file"
                  style={{ display: "none" }}
                  accept="images/*"
                  id="file"
                />
                <label htmlFor="file">
                  <a>Change profile photo</a>
                </label>
              </div>
              <form>
                <div className="mb-3 input-group input-mini">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                  />
                </div>
                <div className="mb-3 input-group input-mini">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                  />
                </div>
                <div className="mb-3 input-group input-mini">
                  <input
                    type="url"
                    className="form-control"
                    placeholder="Website"
                  />
                </div>
                <div className="mb-3 input-group input-mini">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Bio"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Editprofile;
