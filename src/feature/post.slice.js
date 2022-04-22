import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: null,
  },
  reducers: {
    getPosts: (state, { payload }) => {
      state.posts = payload;
    },
    addPost: (state, { payload }) => {
      state.posts.push(payload);
    },
    deletePost: (state, { payload }) => {
      state.posts = state.posts.filter((post) => post.id !== payload);
    },
  },
});

export const { getPosts, addPost, deletePost } = postSlice.actions;
export default postSlice.reducer;
