import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./store/itemSlice";
import likeSlice from "./store/likeSlice";

const store = configureStore({
  reducer: { itemStore: itemSlice.reducer, likeStore: likeSlice.reducer },
});

export default store;
