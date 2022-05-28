import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

const compareAdapter = createEntityAdapter({
   selectId: (item) => item.id,
});

export const compareSlice = createSlice({
   name: "compare",
   initialState: compareAdapter.getInitialState(),
   reducers: {
      addProductCompare: (state, { payload }) => {
         compareAdapter.addOne(state, payload);
      },
      removeProductCompare: (state, { payload }) => {
         compareAdapter.removeOne(state, payload);
      },
   },
});
export const { addProductCompare, removeProductCompare } = compareSlice.actions;

export default compareSlice.reducer;
