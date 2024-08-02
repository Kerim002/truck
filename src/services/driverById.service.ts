import { createAppAsyncThunk } from "../app/store/hooks";
import { DriverItem } from "../types/driverService";
import { errorCatcher } from "../utils/errorCatcher";

const driverByIdService = createAppAsyncThunk<DriverItem, { id: string }>(
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
export { driverByIdService };
