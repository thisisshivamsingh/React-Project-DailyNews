import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "../utils/thunks";

export const postSlice = createSlice({
  name: "posts",
  initialState: {
    loading: true,
    articles: {
      item: [],
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.articles = action.payload;
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default postSlice.reducer;
