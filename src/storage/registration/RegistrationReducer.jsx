import { createReducer } from "@reduxjs/toolkit";
import { setUserName, setUserEmail, setUserPassword } from "./ActionCreators";

const registrationReducer = createReducer([], (builder) => {
    builder
        .addCase(setUserName, (state, { payload }) => {
            state.user.name = payload.name;
        })
        .addCase(setUserEmail, (state, { payload }) => {
            state.user.email = payload.email;
        })
        .addCase(setUserPassword, (state, { payload }) => {
            state.user.password = payload.password;
        })

});

export default registrationReducer;