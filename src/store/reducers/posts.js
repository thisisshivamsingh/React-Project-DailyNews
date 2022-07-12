import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
  name: "posts",
  initialState: {
    loading: true,
    articles: {
      item: [],
    },
  },
  reducers: {},
});

export default postSlice.reducer;
