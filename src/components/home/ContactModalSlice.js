import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contactModalOpen: false,
};

export const contactModalSlice = createSlice({
  name: "contactModal",
  initialState,
  reducers: {
    openContactModal: (state, actions) => {
      state.contactModalOpen = true;
    },
    closeContactModal: (state, actions) => {
      state.contactModalOpen = false;
    },
  },
});

export const { openContactModal, closeContactModal } =
  contactModalSlice.actions;

export default contactModalSlice.reducer;
