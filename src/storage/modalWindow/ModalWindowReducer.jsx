import { createReducer } from "@reduxjs/toolkit";
import { toggleModal } from "./ActionCreators";

const modalReducer = createReducer({}, (builder) => {
  builder.addCase(toggleModal, (state) => {
    state.isShown = !state.isShown;
  });
});

export default modalReducer;
