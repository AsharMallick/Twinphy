import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { isAuthenticated } = useSelector((state) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuthenticated) {
      console.log({ isAuthenticated });
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);
  return <div>Home still in development</div>;
};

export default Home;
