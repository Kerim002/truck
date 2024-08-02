import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DeviceItem } from "../types/deviceService";
import { Loading } from "../types/global";
import { deviceListService } from "../services/deviceList.service";

type DeviceListSchema = {
  data: DeviceItem[];
  error: any;
  loading: Loading;
};

const initialDeviceListState: DeviceListSchema = {
  data: [],
  error: null,
  loading: "idle",
};

const deviceListSlice = createSlice({
  name: "deviceList",
  initialState: initialDeviceListState,
  selectors: {
    selectDeviceList: (state: DeviceListSchema) => state.data,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(deviceListService.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(
        deviceListService.fulfilled,
        (state, { payload }: PayloadAction<DeviceItem[]>) => {
          state.data = payload;
          state.loading = "succeeded";
        }
      )
      .addCase(deviceListService.rejected, (state, action) => {
        state.error = action.error;
        state.loading = "failed";
      });
  },
});
export const { selectDeviceList } = deviceListSlice.selectors;
export { deviceListSlice };
