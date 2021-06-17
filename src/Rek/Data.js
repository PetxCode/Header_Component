import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataBase: [],
};

const Data = createSlice({
  name: "dataBase",
  initialState,
  reducers: {
    activeData: (state, { payload }) => {
      state.dataBase = payload;
    },
  },
});

export const { activeData } = Data.actions;

// export const selectData = (state) => state.dataBase.dataBase;

export default Data.reducer;
