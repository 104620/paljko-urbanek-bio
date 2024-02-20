import { createSlice } from "@reduxjs/toolkit";

import { ISettingsState } from "./settings-interface";
import { reducer } from "./settings-reducer";

const initialState: ISettingsState = {
  customModal: false,
  customModal2: false,
  customModal3: false,
  customModal4: false,
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: reducer,
});

export const settingsReducer = settingsSlice.reducer;
