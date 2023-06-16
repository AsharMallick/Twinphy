import axios from "axios";
import { server } from "../store";

export const loginUser = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: "loginUserRequest",
    });

    const { data } = await axios.post(
      `${server}/login`,
      {
        email,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    console.log({ data });
    dispatch({
      type: "loginUserSuccess",
      payload: data.user,
    });
  } catch (error) {
    console.log({ error });
    dispatch({
      type: "loginUserFail",
      payload: error.response.data.message,
    });
  }
};

export const signupUser =
  (username, email, password, avatar) => async (dispatch) => {
    try {
      dispatch({ type: "signupUserRequest" });
      const {
        data: { user },
      } = await axios.post(
        `${server}/register`,
        { name: username, email, password, avatar },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log({ user });
      dispatch({ type: "signupUserSuccess", payload: user });
    } catch (error) {
      dispatch({
        type: "signupUserFail",
        payload: error.response.data.message,
      });
    }
  };

export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: "loadUserRequest" });
    const { data } = await axios.get(`${server}/me`, { withCredentials: true });
    dispatch({ type: "loadUserSuccess", payload: data.user });
  } catch (error) {
    dispatch({ type: "loadUserFail", payload: error.response.data.message });
  }
};

export const logout = () => async (dispatch) => {
  try {
    dispatch({ type: "logoutUserRequest" });
    const { data } = await axios.get(`${server}/logout`, {
      withCredentials: true,
    });
    dispatch({ type: "logoutUserSuccess", payload: data.message });
  } catch (error) {
    dispatch({ type: "logoutUserFail", payload: error.response.data.message });
  }
};
