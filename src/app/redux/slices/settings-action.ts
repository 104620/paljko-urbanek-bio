import { RootState } from "../store";
import { settingsSlice } from "./settings-slice";

export const { setCustomModal } = settingsSlice.actions;

export const enableCustomModal = (state: RootState): any =>
  state.settings.customModal;

export const enableCustomModal2 = (state: RootState): any =>
  state.settings.customModal2;

export const enableCustomModal3 = (state: RootState): any =>
  state.settings.customModal3;

export const enableCustomModal4 = (state: RootState): any =>
  state.settings.customModal4;
