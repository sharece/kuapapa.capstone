import contactModalReducer from "./components/home/ContactModalSlice";
import { configureStore, applyMiddleware } from "@reduxjs/toolkit";

const createStoreWithMiddleware = applyMiddleware()(configureStore);

export const store = createStoreWithMiddleware({
  reducer: { contactModal: contactModalReducer },
});
