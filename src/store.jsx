import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./store/itemSlice";

const store = configureStore({
  reducer: { itemStore: itemSlice.reducer },
});

export default store;
