import { createAppAsyncThunk } from "../app/store/hooks";
import { DriverPayload } from "../types/driverService";
import { errorCatcher } from "../utils/errorCatcher";

const driverCreateService = createAppAsyncThunk<any, DriverPayload>(
  "driverCreate",
  async (body, { rejectWithValue, extra: { api } }) => {
    try {
      const res = await api.post(`/driver/create_driver`, body);
      return res.data;
    } catch (error) {
      const errorData = errorCatcher(error);
      return rejectWithValue(errorData);
    }
  }
);
export { driverCreateService };
