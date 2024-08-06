import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DriverItem } from "../types/driverService";
import { Loading } from "../types/global";
import { driverByIdService } from "../services/driverById.service";
type DriverSchema = {
  data: DriverItem | null;
  error: any;
  loading: Loading;
};
const initialDriverState: DriverSchema = {
  data: null,
  error: null,
  loading: "idle",
};
const driverSlice = createSlice({
  name: "driver",
  initialState: initialDriverState,
  selectors: {
    selectDriver: (state: DriverSchema) => state.data,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(driverByIdService.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(
        driverByIdService.fulfilled,
        (state, { payload }: PayloadAction<DriverItem>) => {
          state.data = payload;
        }
      )
      .addCase(driverByIdService.rejected, (state, action) => {
        state.error = action.error;
        state.loading = "failed";
      });
  },
});
export const { selectDriver } = driverSlice.selectors;
export { driverSlice };
