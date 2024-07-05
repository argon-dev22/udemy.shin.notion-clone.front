import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: [] };

export const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    setNote: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setNote } = noteSlice.actions;
export default noteSlice.reducer;
