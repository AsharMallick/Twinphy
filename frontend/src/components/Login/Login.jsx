import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../state/actions/user";
import { Link, useNavigate } from "react-router-dom";
import picture from "../../assets/pic4.jpg";
import facebookLogo from "../../assets/facebook.png";
import googleLogo from "../../assets/google.png";
import { InputEmail, InputPassword } from "../Signup/Signup";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isHidden, setIsHidden] = useState(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, loading, error } = useSelector((state) => state.user);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(email, password));
  };

  useEffect(() => {
    if (error) {
      //Todo Error handling
    }
  }, [error]);
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <section className="bg-white lg:bg-primary">
      <div className="flex flex-col justify-center items-center min-h-screen space-y-5 w-3/4 mx-auto bg-white">
        <h1 className="text-3xl font-bold">Sign in</h1>
        <form className="flex justify-center items-center flex-col space-y-4 w-full mx-auto">
          <InputEmail id={"email"} placeholder={"Email"} type={"email"} />
          <InputPassword
            id={"password"}
            placeholder={"Password"}
            type={"password"}
          />
          <div className="forgot flex justify-end">
            <Link
              to={"/forgot/password"}
              className="text-sm underline text-[#e48c61]"
            >
              Forgot Password
            </Link>
          </div>
          <div className="w-[90%] ">
            <button
              type={"submit"}
              className="w-full text-xl font-bold p-2 rounded-md text-white mx-auto bg-[#e48c61]"
            >
              Sign in
            </button>
          </div>
        </form>
        <div>
          <p className="text-xs text-[#ffcd90]">Or sign in with</p>
        </div>
        <div className="flex space-x-10">
          <img src={facebookLogo} alt="" className="w-8 h-8" />
          <img src={googleLogo} alt="" className="w-8 h-8" />
        </div>
        <div className="my-4 flex space-x-4 items-center justify-center">
          <p className="text-sm text-gray-600 font-thin">
            Don&apos;t have an account?
          </p>
          <Link
            to={"/signup"}
            className="text-sm text-[#e48c61] underline font-bold"
          >
            Sign up here
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Login;
