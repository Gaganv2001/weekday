import { configureStore } from "@reduxjs/toolkit";
import  jobReducer  from "./slicer/jobSlice";

export const store = configureStore({
  reducer: {
    job: jobReducer,
  },
});
