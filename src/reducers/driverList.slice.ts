import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DriverItem } from "../types/driverService";
import { Loading } from "../types/global";
import { driversListService } from "../services/drivers.service";
type DriversSchema = {
  data: DriverItem[];
  loading: Loading;
  error: any;
};

const initialDriversState: DriversSchema = {
  data: [],
  error: null,
  loading: "idle",
};
const driversSlice = createSlice({
  name: "drivers",
  initialState: initialDriversState,
  selectors: {
    selectDriverList: (state: DriversSchema) => state.data,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(driversListService.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(
        driversListService.fulfilled,
        (state, { payload }: PayloadAction<DriverItem[]>) => {
          state.data = payload;
          state.loading = "succeeded";
        }
      )
      .addCase(driversListService.rejected, (state, action) => {
        state.error = action.error;
        state.loading = "failed";
      });
  },
});
export const { selectDriverList } = driversSlice.selectors;
export { driversSlice };
