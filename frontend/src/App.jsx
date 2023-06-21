import Login from "./components/Login/Login";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Signup from "./components/Signup/Signup";
import Home from "./components/Home/Home";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadUser } from "./state/actions/user";
import Comments from "./components/Comments/Comments";
import Navbar from "./components/Navbar/Navbar";
import Myprofile from "./components/Myprofile/Myprofile";
import Userprofile from "./components/Userprofile/Userprofile";
import Followings from "./components/Followings/Followings";
import Followers from "./components/Followers/Follwers";
import Search from "./components/Search/Search";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/signup"} element={<Signup />} />
          <Route path={"/comments/:id"} element={<Comments />} />
          <Route path={"/profile"} element={<Myprofile />} />
          <Route path={"/user/:id"} element={<Userprofile />} />
          <Route path={"/followings/:id"} element={<Followings />} />
          <Route path={"/followers/:id"} element={<Followers />} />
          <Route path="/search" element={<Search />} />
          <Route path={"*"} element={<h1>Page not found</h1>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
