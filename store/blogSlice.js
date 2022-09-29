import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blogs: [],
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    allBlogs: (state, { payload }) => {
      state.blogs = payload;
    },
  },
});

export const { allBlogs } = blogSlice.actions;
export default blogSlice.reducer;
