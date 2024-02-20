import { PayloadAction } from "@reduxjs/toolkit";
import { ISettingsState } from "./settings-interface";

export const reducer = {
  setCustomModal: (state: ISettingsState, action: PayloadAction<boolean>) => {
    state.customModal = action.payload;
  },
  setCustomModal2: (state: ISettingsState, action: PayloadAction<boolean>) => {
    state.customModal2 = action.payload;
  },
  setCustomModal3: (state: ISettingsState, action: PayloadAction<boolean>) => {
    state.customModal3 = action.payload;
  },
  setCustomModal4: (state: ISettingsState, action: PayloadAction<boolean>) => {
    state.customModal4 = action.payload;
  },
};
