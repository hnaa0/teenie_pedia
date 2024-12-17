import { createSlice } from "@reduxjs/toolkit";

const likeSlice = createSlice({
  name: "likes",
  initialState: {
    items: () => {
      const storedLikes = localStorage.getItem("LIKES");
      try {
        return storedLikes ? JSON.parse(storedLikes) : [];
      } catch (error) {
        console.error("Error parsing JSON from localStorage: ", error);
        return [];
      }
    },
  },
  reducers: {
    addLike(state, action) {
      state.items.push(action.payload);
    },
    removeLike(state, action) {
      return {
        ...state,
        items: state.items.filter((item) => item !== action.payload),
      };
    },
    resetLike(state, _) {
      state.items = [];
    },
  },
});

export default likeSlice;
