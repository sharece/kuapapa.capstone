import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contactModalOpen: false,
};

export const modalSlice = createSlice({
  name: "contactModal",
  initialState,
  reducers: {
    openContactModal: (state, actions) => {
      state.contactModalOpen = true;
    },
  },
});

export const { openContactModal, closeContactModal } = modalSlice.actions;

export default modalSlice.reducer;
