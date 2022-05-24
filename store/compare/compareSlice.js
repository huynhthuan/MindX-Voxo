import { createSlice } from "@reduxjs/toolkit";

export const compareSlice = createSlice({
   name: "compare",
   initialState: { value: [] },
   reducers: {
      addProductCompare: (state, action) => {
         state.value.push(action.payload);
      },
      removeProductCompare: (state, action) => {
         state.value = action.payload;
      },
   },
});
export const { addProductCompare, removeProductCompare } = compareSlice.actions;

export default compareSlice.reducer;
