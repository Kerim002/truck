import { createAppAsyncThunk } from "../app/store/hooks";
import { DriverItem, DriverPayload } from "../types/driverService";

import { errorCatcher } from "../utils/errorCatcher";

const driversListService = createAppAsyncThunk<DriverItem[], void>(
  "driversList",
  async (_, { rejectWithValue, extra: { api } }) => {
    try {
      const res = await api.get("/driver/all_driver");
      return res.data;
    } catch (error) {
      const errorData = errorCatcher(error);
      return rejectWithValue(errorData);
    }
  }
);
const driverById = createAppAsyncThunk<DriverItem, { id: string }>(
  "diverById",
  async ({ id }, { rejectWithValue, extra: { api } }) => {
    try {
      const res = await api.get(`/driver/get_driver/${id}`);
      return res.data;
    } catch (error) {
      const errorData = errorCatcher(error);
      return rejectWithValue(errorData);
    }
  }
);
const driverAddService = createAppAsyncThunk<any, DriverPayload>(
  "driverAdd",
  async (driver) => {}
);
export { driversListService, driverById };
