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
  (username, email, password, avatar = "temp") =>
  async (dispatch) => {
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

export const getPostOfFollowing = () => async (dispatch) => {
  try {
    dispatch({
      type: "postOfFollowingRequest",
    });

    const { data } = await axios.get(server + "/posts", {
      withCredentials: true,
    });
    dispatch({
      type: "postOfFollowingSuccess",
      payload: data.posts,
    });
  } catch (error) {
    dispatch({
      type: "postOfFollowingFailure",
      payload: error.response.data.message,
    });
  }
};

export const getAllUsers = (name = "") => {
  return async (dispatch) => {
    try {
      dispatch({ type: "allUsersRequest" });

      const { data } = await axios.get(server + "/users?name=" + name, {
        withCredentials: true,
      });
      dispatch({ type: "allUsersSuccess", payload: data.users });
    } catch (error) {
      dispatch({
        type: "allUsersFailure",
        payload: error.response.data.message,
      });
    }
  };
};

export const getMyPosts = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: "myPostRequest" });

      const { data } = await axios.get(server + "/posts", {
        withCredentials:true
      });
      dispatch({ type: "myPostSuccess", payload: data.posts });
    } catch (error) {
      dispatch({ type: "myPostFailure", payload: error.response.data.message });
    }
  };
};
export const register = (name, email, password, avatar) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "registerRequest" });

      const { data } = await axios.post(
        server + "/api/v1/register",
        { name, email, password, avatar },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      dispatch({ type: "registerSuccess", payload: data.user });
    } catch (error) {
      dispatch({
        type: "registerFailure",
        payload: error.response.data.message,
      });
    }
  };
};
export const updateProfile = (name, email, avatar) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "updateProfileRequest" });
      const { data } = await axios.put(
        server + "/api/v1/update/profile",
        { name, email, avatar },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      dispatch({ type: "updateProfileSuccess", payload: data.user });
    } catch (error) {
      dispatch({
        type: "updateProfileFailure",
        payload: error.response.data.message,
      });
    }
  };
};
export const updatePassword = (newPassword, oldPassword) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "updatePasswordRequest" });
      const { data } = await axios.put(
        server + "/api/v1/update/password",
        { newPassword, oldPassword },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      dispatch({ type: "updatePasswordSuccess", payload: data.message });
    } catch (error) {
      dispatch({
        type: "updatePasswordFailure",
        payload: error.response.data.message,
      });
    }
  };
};
export const deleteProfile = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: "deleteProfileRequest" });
      const { data } = await axios.delete(server + "/api/v1/delete/me");
      dispatch({ type: "deleteProfileSuccess", payload: data.message });
    } catch (error) {
      dispatch({
        type: "deleteProfileFailure",
        payload: error.response.data.message,
      });
    }
  };
};
export const forgotPassword = (email) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "forgotPasswordRequest" });
      const { data } = await axios.post(
        server + "/api/v1/forgot/password",
        { email },
        { headers: { "Content-Type": "application/json" } }
      );
      dispatch({ type: "forgotPasswordSuccess", payload: data.message });
    } catch (error) {
      dispatch({
        type: "forgotPasswordFailure",
        payload: error.response.data.message,
      });
    }
  };
};
export const resetPassword = (token, password) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "resetPasswordRequest" });
      const { data } = await axios.put(
        `${server}/api/v1/password/reset/${token}`,
        { password },
        { headers: { "Content-Type": "application/json" } }
      );
      dispatch({ type: "resetPasswordSuccess", payload: data.message });
    } catch (error) {
      dispatch({
        type: "resetPasswordFailure",
        payload: error.response.data.message,
      });
    }
  };
};

export const getUserPosts = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "userPostsRequest" });
      const { data } = await axios.get(`${server}/api/v1/userposts/${id}`);
      console.log(data);
      dispatch({ type: "userPostsSuccess", payload: data.posts });
    } catch (error) {
      dispatch({
        type: "userPostsFailure",
        payload: error.response.data.message,
      });
    }
  };
};
export const getUserProfile = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "userProfileRequest" });
      const { data } = await axios.get(`${server}/api/v1/user/${id}`);
      dispatch({ type: "userProfileSuccess", payload: data.user });
    } catch (error) {
      dispatch({
        type: "userProfileFailure",
        payload: error.response.data.message,
      });
    }
  };
};
export const followUnfollowUser = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "followUserRequest" });
      const { data } = await axios.get(`${server}/follow/${id}`, {
        withCredentials: true,
      });
      dispatch({ type: "followUserSuccess", payload: data.message });
    } catch (error) {
      dispatch({
        type: "followUserFailure",
        payload: error.response.data.message,
      });
    }
  };
};
