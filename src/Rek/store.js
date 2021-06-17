import { configureStore } from "@reduxjs/toolkit";
import Data from "./Data";

export const store = configureStore({
  reducer: {
    myStore: Data,
  },
});
