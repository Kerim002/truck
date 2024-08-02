import { createAppAsyncThunk } from "../app/store/hooks";
import { DriverItem } from "../types/driverService";

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

export { driversListService };
