import { combineReducers } from "@reduxjs/toolkit";
import { homeSlice } from "../../reducers/home.slice";
import { driversSlice } from "../../reducers/driverList.slice";
import { driverSlice } from "../../reducers/driver.slice";
import { deviceListSlice } from "../../reducers/device-list.slice";

const rootReducer = combineReducers({
  home: homeSlice.reducer,
  drivers: driversSlice.reducer,
  driver: driverSlice.reducer,
  deviceList: deviceListSlice.reducer,
});
export { rootReducer };
