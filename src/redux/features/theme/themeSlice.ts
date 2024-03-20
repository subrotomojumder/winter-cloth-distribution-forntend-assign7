import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";

type TTheme = {
  value: boolean;
};
const initialState: TTheme = {
  value: false,
};
const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleDarkTheme: (state) => {
      state.value = !state.value;
    },
  },
});

export const { toggleDarkTheme } = themeSlice.actions;
export default themeSlice.reducer;

export const selectCurrentTheme = (state: RootState) => state.theme.value;
