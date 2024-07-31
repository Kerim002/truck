import { createAppAsyncThunk } from "../app/store/hooks";
import { MainSchema } from "../types/homeService";
import { errorCatcher } from "../utils/errorCatcher";

const homeService = createAppAsyncThunk<MainSchema, void>(
  "home/fetch",
  async (_, { rejectWithValue, extra: { api } }) => {
    try {
      const res = await api.get(`/main`);
      return res.data;
    } catch (error) {
      const errorData = errorCatcher(error);
      return rejectWithValue(errorData);
    }
  }
);
export { homeService };
