import { createSlice } from "@reduxjs/toolkit";

const likeSlice = createSlice({
  name: "likes",
  initialState: { items: JSON.parse(localStorage.getItem("LIKES") || []) },
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
