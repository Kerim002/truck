import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Loading } from "../types/global";
import { MainSchema, StatusKeys } from "../types/homeService";
import { homeService } from "../services/main.service";

type HomeSchema = {
  data: MainSchema | null;
  loading: Loading;
  error: any;
  statusType: StatusKeys;
};
const initialHomeState: HomeSchema = {
  data: null,
  error: null,
  loading: "idle",
  statusType: "import",
};
const homeSlice = createSlice({
  name: "home",
  initialState: initialHomeState,
  selectors: {
    selectType: (state) => state.statusType,
    // selectStatus: createSelector(
    //   [(state: HomeSchema) => state.data?.Status],
    //   (status) => {
    //     const keys: StatusKeys[] = ["empty", "export", "import", "transit"];
    //     const result = {
    //       empty: null,
    //       export: null,
    //       import: null,
    //       transport: null,
    //     };

    //     keys.forEach((key) => status.);
    //     return result;
    //   }
    // ),
    selectStatus: (state: HomeSchema) => state.data?.Status ?? [],
    selectStatusTotal: createSelector(
      [(state: HomeSchema) => state.data?.Status],
      (status) => {
        let total: number = 0;
        status?.forEach((s) => (total += s.count));
        return total;
      }
    ),
    selectLocationList:
      createSelector(
        [
          (state: HomeSchema) => state.data?.Locations,
          (state: HomeSchema) => state.statusType,
        ],
        (locations, type) =>
          locations?.filter((location) => location.status === type)
      ) ?? [],
  },
  reducers: {
    setHomeType: (state, { payload }: PayloadAction<StatusKeys>) => {
      state.statusType = payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(homeService.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(
        homeService.fulfilled,
        (state, { payload }: PayloadAction<MainSchema>) => {
          state.data = payload;
          state.loading = "succeeded";
        }
      )
      .addCase(homeService.rejected, (state, action) => {
        state.error = action.error;
        state.loading = "failed";
      });
  },
});
export const { setHomeType } = homeSlice.actions;
export { homeSlice };
