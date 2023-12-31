import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  loading: false,
};

export const userReducer = createReducer(initialState, {
  loginUserRequest: (state) => {
    state.loading = true;
  },
  loginUserSuccess: (state, action) => {
    state.loading = false;
    state.user = action.payload;
    state.isAuthenticated = true;
  },
  loginUserFail: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticated = false;
  },
  signupUserRequest: (state) => {
    state.loading = true;
  },
  signupUserSuccess: (state, action) => {
    state.loading = false;
    state.user = action.payload;
    state.isAuthenticated = true;
  },
  signupUserFail: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticated = false;
  },
  logoutUserRequest: (state) => {
    state.loading = true;
  },
  logoutUserSuccess: (state, action) => {
    state.loading = false;
    state.user = null;
    state.message = action.payload;
    state.isAuthenticated = false;
  },
  logoutUserFail: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticated = true;
  },
  loadUserRequest: (state) => {
    state.loading = true;
  },
  loadUserSuccess: (state, action) => {
    state.loading = false;
    state.user = action.payload;
    state.isAuthenticated = true;
  },
  loadUserFail: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticated = false;
  },

  clearMessage: (state) => {
    state.message = null;
  },
  clearError: (state) => {
    state.error = null;
  },
});

export const postOfFollowingReducer = createReducer(initialState, {
  postOfFollowingRequest: (state) => {
    state.loading = true;
  },
  postOfFollowingSuccess: (state, action) => {
    state.loading = false;
    state.posts = action.payload;
  },
  postOfFollowingFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  clearErrors: (state) => {
    state.error = null;
  },
});

export const allUsersReducer = createReducer(initialState, {
  allUsersRequest: (state) => {
    state.loading = true;
  },
  allUsersSuccess: (state, action) => {
    state.loading = false;
    state.users = action.payload;
  },
  allUsersFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  clearErrors: (state) => {
    state.error = null;
  },
});

export const getUserPosts = createReducer(initialState, {
  userPostsRequest: (state) => {
    state.loading = true;
  },
  userPostsSuccess: (state, action) => {
    state.loading = false;
    state.posts = action.payload;
  },
  userPostsFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  clearErrors: (state) => {
    state.error = null;
  },
});
export const getUserProfile = createReducer(initialState, {
  userProfileRequest: (state) => {
    state.loading = true;
  },
  userProfileSuccess: (state, action) => {
    state.loading = false;
    state.user = action.payload;
  },
  userProfileFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  clearErrors: (state) => {
    state.error = null;
  },
});

// router.route("/register").post(register);

// router.route("/login").post(login);

// router.route("/logout").get(logout);

// router.route("/follow/:id").get(isAuthenticated, followUser);

// router.route("/update/password").put(isAuthenticated, updatePassword);

// router.route("/update/profile").put(isAuthenticated, updateProfile);

// router.route("/delete/me").delete(isAuthenticated, deleteMyProfile);
// router.route("/me").get(isAuthenticated, myProfile);

// router.route("/my/posts").get(isAuthenticated, getMyPosts);

// router.route("/userposts/:id").get(isAuthenticated, getUserPosts);

// router.route("/user/:id").get(isAuthenticated, getUserProfile);

// router.route("/users").get(isAuthenticated, getAllUsers);

// router.route("/forgot/password").post(forgotPassword);

// router.route("/password/reset/:token").put(resetPassword);
