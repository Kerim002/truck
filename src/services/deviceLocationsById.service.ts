import { createAppAsyncThunk } from "../app/store/hooks";
import { LocationSchema } from "../types/global";
import { errorCatcher } from "../utils/errorCatcher";

const deviceLocationsByIdService = createAppAsyncThunk<
  LocationSchema[],
  { id: string }
>(
  "deviceLocationsById",
  async ({ id }, { rejectWithValue, extra: { api } }) => {
    try {
      const res = await api.get(`/device/location_list/${id}`);
      return res.data;
    } catch (error) {
      const errorData = errorCatcher(error);
      return rejectWithValue(errorData);
    }
  }
);
export { deviceLocationsByIdService };
