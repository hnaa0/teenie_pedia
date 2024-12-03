import { createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
  name: "pings",
  initialState: { all: [] },
  reducers: {
    setData: (state, action) => {
      state.all = action.payload;
    },
  },
});

export default itemSlice;
