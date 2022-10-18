import { createReducer } from "@reduxjs/toolkit";
import { setUser, removeUser } from "./ActionCreators";

const userReducer = createReducer([], (builder) => {
    builder
        .addCase(setUser, (state, { payload }) => { 
            state.email = payload.email;
            state.token = payload.token;
            state.id = payload.id;
        })
        .addCase(removeUser, (state, { payload }) => {
            state.email = null;
            state.token = null;
            state.id = null;
        });
    });

export default userReducer;
