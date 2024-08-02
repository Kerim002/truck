import { createAppAsyncThunk } from "../app/store/hooks";
import { DeviceItem } from "../types/deviceService";
import { errorCatcher } from "../utils/errorCatcher";

const deviceListService = createAppAsyncThunk<
  DeviceItem[],
  { page: number; limit: number }
>(
  "deviceList",
  async ({ page = 1, limit = 10 }, { rejectWithValue, extra: { api } }) => {
    try {
      const res = await api.get(`/device/all_device`, {
        params: { page, limit },
      });
      return res.data;
    } catch (error) {
      const errorData = errorCatcher(error);
      return rejectWithValue(errorData);
    }
  }
);
export { deviceListService };
