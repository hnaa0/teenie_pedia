import { createSlice } from "@reduxjs/toolkit";

const getInitialLikes = () => {
  try {
    const storedLikes = localStorage.getItem("LIKES");
    return storedLikes ? JSON.parse(storedLikes) : [];
  } catch (error) {
    console.error("Error parsing LIKES from localStorage:", error);
    return [];
  }
};

const likeSlice = createSlice({
  name: "likes",
  initialState: { items: getInitialLikes() },
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
