import { createAppAsyncThunk } from "../app/store/hooks";
import { DriverPayload } from "../types/driverService";
import { errorCatcher } from "../utils/errorCatcher";

const driverCreateService = createAppAsyncThunk<any, DriverPayload>(
  "driverCreate",
  async (body, { rejectWithValue, extra: { api } }) => {
    try {
      const res = await api.post(`/driver/create_driver`, body);
      console.log("succes");
      return res.data;
    } catch (error) {
      const errorData = errorCatcher(error);
      console.log("dfali");
      return rejectWithValue(errorData);
    }
  }
);
export { driverCreateService };
