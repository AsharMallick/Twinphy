import { configureStore } from "@reduxjs/toolkit";
import {
  allUsersReducer,
  getUserPosts,
  getUserProfile,
  postOfFollowingReducer,
  userReducer,
} from "./reducers/user";
import { myPostReducer, postReducer } from "./reducers/post";

export const server = "http://localhost:4000/api/v1";
const store = configureStore({
  reducer: {
    user: userReducer,
    postsOfFollowing: postOfFollowingReducer,
    allUsers: allUsersReducer,
    like: postReducer,
    myPosts: myPostReducer,
    userPosts: getUserPosts,
    userProfile: getUserProfile,
  },
});

export default store;
