import { configureStore } from "@reduxjs/toolkit";
import { api } from "./Api/apiSlice";
import userReducer from "./Features/User/userSlice";
import bookReducer from "./Features/Books/bookSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    book: bookReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
