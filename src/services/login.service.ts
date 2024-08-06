import { errorCatcher } from "../utils/errorCatcher";
import { LoginRequest, LoginResponse } from "../types/loginService";
import { createAppAsyncThunk } from "../app/store/hooks";

const loginService = createAppAsyncThunk<LoginResponse, LoginRequest>(
  "login",
  async (body, { rejectWithValue, extra: { router, api } }) => {
    try {
      const res = await api.post(`/login`, body);
      if (res.data) {
        await router.navigate("/");
      }
      return res.data;
    } catch (error) {
      const errorData = errorCatcher(error);
      return rejectWithValue(errorData);
    }
  }
);

export { loginService };
