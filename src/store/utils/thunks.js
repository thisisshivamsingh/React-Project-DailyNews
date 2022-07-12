import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const URL_SERVE = "http://localhost:3001";

export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async ({ page = 1, order = "asc", limit = "10" }, { getState }) => {
    try {
      // http://localhost:3004/posts?_page=1&_limit=6&_order=desc&_sort=id
      const response = await axios.get(
        `${URL_SERVE}/posts?_page=${page}&_limit=${limit}&_order=${order}&_sort=id`
      );

      const prevState = getState().posts;

      return {
        items: [...prevState.articles.items, ...response.data],
        page: page,
        end: response.data.length === 0 ? true : false,
      };
    } catch (error) {
      throw error;
    }
  }
);
