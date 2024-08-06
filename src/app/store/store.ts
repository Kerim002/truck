import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import { router } from "../router/routes";
import { api } from "../api/api";
export const extraArgument = {
  router,
  api,
};
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: { extraArgument } }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
