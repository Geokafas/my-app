import { configureStore } from "@reduxjs/toolkit";
import storeReducer from "./reducer-slices/storeData";
export default configureStore({
  reducer: {
    appData: storeReducer,
  },
});
