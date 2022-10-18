import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import modalReducer from "./modalWindow/ModalWindowReducer";
// import postsReducer from "./posts/PostsReducer";
import registrationReducer from "./registration/RegistrationReducer";
import userReducer from "./user/UserReducer";
import favoritesReducer from "./favorites/FavoritesReducer";

const rootReducer = combineReducers({
  modalWindow: modalReducer,
  // posts: postsReducer,
  registration: registrationReducer,
  user: userReducer,
  favorites: favoritesReducer,
});

const composedEnhancers = composeWithDevTools(applyMiddleware(thunk));

const initialState = {
  modalWindow: {
    isShown: false,
  },
  // posts: {
  //     posts: [],
  // },
  registration: {
    user: {
      name: "",
      email: "",
      password: "",
    },
  },
  user: {
    email: "",
    token: "",
    id: "",
  },
  favorites: {
    isFavorite: false,
    userID: null,
  },
};

const store = createStore(rootReducer, initialState, composedEnhancers);

export default store;
