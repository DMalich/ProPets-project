import { createReducer } from "@reduxjs/toolkit";
import { setFavorite } from "./ActionCreators";

const favoritesReducer = createReducer([], (builder) => {
    builder
        .addCase(setFavorite, (state, { payload }) => {
            state.isFavorite = payload.isFavorite;
            state.userID = payload.userID;
        })
});

export default favoritesReducer; 
