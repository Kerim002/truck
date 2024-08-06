import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch, extraArgument } from "./store";
import {
  AsyncThunk,
  AsyncThunkPayloadCreator,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit";

export interface MyThunkConfig {
  state: RootState;
  dispatch: AppDispatch;
  extra: typeof extraArgument;
  rejectValue: unknown;
  serializedErrorType: unknown;
  pendingMeta: unknown;
  fulfilledMeta: unknown;
  rejectedMeta: unknown;
}
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const createAppSelector = createSelector.withTypes<RootState>();
export const createAppAsyncThunk: <Returned, ThunkArg = void>(
  typePrefix: string,
  payloadCreator: AsyncThunkPayloadCreator<Returned, ThunkArg, MyThunkConfig>
) => AsyncThunk<Returned, ThunkArg, MyThunkConfig> =
  createAsyncThunk.withTypes<MyThunkConfig>();
