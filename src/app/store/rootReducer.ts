import { combineReducers } from "@reduxjs/toolkit";
import { homeSlice } from "../../reducers/home.slice";
import { driversSlice } from "../../reducers/driverList.slice";
import { driverSlice } from "../../reducers/driver.slice";

const rootReducer = combineReducers({
  home: homeSlice.reducer,
  drivers: driversSlice.reducer,
  driver: driverSlice.reducer,
});
export { rootReducer };
