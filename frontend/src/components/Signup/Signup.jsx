import { useState, useEffect } from "react";
import { signupUser } from "../../state/actions/user";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, loading, error } = useSelector((state) => state.user);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signupUser(name, email, password, avatar));
  };

  const handleGoogleSignup = () => {
    // Handle Google signup
    console.log("Google signup");
  };

  const handleFacebookSignup = () => {
    // Handle Facebook signup
    console.log("Facebook signup");
  };
  useEffect(() => {
    if (error) {
      //Todo Error handling
      console.log(error);
    }
  }, [error]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    const Reader = new FileReader();
    Reader.readAsDataURL(file);

    Reader.onload = () => {
      if (Reader.readyState === 2) {
        setAvatar(Reader.result);
      }
    };
  };
  //   console.log(avatar)
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <>
      <section className="bg-white lg:bg-primary">
        <div className="flex flex-col justify-center items-center min-h-screen space-y-5 w-3/4 mx-auto bg-white">
          <h1 className="text-3xl font-bold ">Create an account</h1>
          <form className="flex justify-center items-center flex-col space-y-4 w-full mx-auto">
            <InputUser id={"name"} placeholder={"Name"} type={"text"} />
            <InputEmail id={"email"} placeholder={"Email"} type={"email"} />
            <InputPassword
              id={"password"}
              placeholder={"Password"}
              type={"password"}
            />
            <div className="w-[90%] ">
              <button
                type={"submit"}
                className="w-full text-xl font-bold p-2 rounded-md text-white mx-auto bg-[#e48c61]"
              >
                Sign in
              </button>
            </div>
          </form>
          <div className="my-4 flex space-x-4 items-center justify-center">
            <p className="text-sm text-gray-600 font-thin">
              Already have an account?
            </p>
            <Link
              to={"/login"}
              className="text-sm text-[#e48c61] underline font-bold"
            >
              Login here
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;

export const InputUser = (props) => (
  <div
    className={`input flex ${
      props.width ? props.width : "w-[90%]"
    } border-[1px] p-[6px] rounded-lg border-[#e48c61] space-x-3`}
  >
    <div className="input-icon bg-[#ffcd90] w-fit p-2 rounded-md">
      <svg width="20" height="20" viewBox="0 0 19 19" fill="none">
        <path
          d="M15.587 16.3479V14.8261C15.587 14.019 15.2663 13.2448 14.6956 12.6741C14.1248 12.1033 13.3507 11.7827 12.5435 11.7827H6.45655C5.64937 11.7827 4.87525 12.1033 4.30448 12.6741C3.73372 13.2448 3.41307 14.019 3.41307 14.8261V16.3479"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M9.50002 8.73918C11.1809 8.73918 12.5435 7.37657 12.5435 5.6957C12.5435 4.01483 11.1809 2.65222 9.50002 2.65222C7.81915 2.65222 6.45654 4.01483 6.45654 5.6957C6.45654 7.37657 7.81915 8.73918 9.50002 8.73918Z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    </div>
    <input
      type={props.tyoe}
      id={props.id}
      className="placeholder:text-gray-600 text-sm w-[90%] rounded-lg mx-auto border-none outline-none"
      placeholder={props.placeholder}
    />
  </div>
);
export const InputEmail = (props) => (
  <div className="input flex w-[90%] border-[1px] p-[6px] rounded-lg border-[#e48c61] space-x-3">
    <div className="input-icon bg-[#ffcd90] w-fit p-2 rounded-md">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M22 6L12 13L2 6"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    </div>
    <input
      type={props.tyoe}
      id={props.id}
      className="placeholder:text-gray-600 text-sm w-[90%] rounded-lg mx-auto border-none outline-none"
      placeholder={props.placeholder}
    />
  </div>
);
export const InputPassword = (props) => {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <div className="input flex w-[90%] border-[1px] p-[6px] rounded-lg border-[#e48c61] space-x-3">
      <div className="input-icon bg-[#ffcd90] w-fit p-2 rounded-md">
        <svg width="20" height="20" viewBox="0 0 19 19" fill="none">
          <path
            d="M15.587 16.3479V14.8261C15.587 14.019 15.2663 13.2448 14.6956 12.6741C14.1248 12.1033 13.3507 11.7827 12.5435 11.7827H6.45655C5.64937 11.7827 4.87525 12.1033 4.30448 12.6741C3.73372 13.2448 3.41307 14.019 3.41307 14.8261V16.3479"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M9.50002 8.73918C11.1809 8.73918 12.5435 7.37657 12.5435 5.6957C12.5435 4.01483 11.1809 2.65222 9.50002 2.65222C7.81915 2.65222 6.45654 4.01483 6.45654 5.6957C6.45654 7.37657 7.81915 8.73918 9.50002 8.73918Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </div>
      <label htmlFor="passpword"></label>
      <input
        type={isHidden ? props.type : "text"}
        id={props.id}
        className="placeholder:text-gray-600 text-sm w-[90%] rounded-lg mx-auto border-none outline-none"
        placeholder={props.placeholder}
      />
      <button
        type="button"
        className="text-sm text-gray-500"
        onClick={() => setIsHidden(!isHidden)}
      >
        {isHidden ? "Show" : "Hide"}
      </button>
    </div>
  );
};
