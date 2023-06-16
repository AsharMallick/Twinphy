import Login from "./components/Login/Login";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Signup from "./components/Signup/Signup";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadUser } from "./state/actions/user";

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
        </Routes>
      </Router>
    </>
  );
}

export default App;
