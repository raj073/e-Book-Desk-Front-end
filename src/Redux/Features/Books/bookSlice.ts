/* eslint-disable @typescript-eslint/require-await */
// bookSlice.ts

import {
  Action,
  createSlice,
  PayloadAction,
  ThunkAction,
} from "@reduxjs/toolkit";
import { IBook } from "../../../Pages/Types/globalTypes";
import { RootState } from "../../store";

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

interface BookState {
  books: IBook[];
  searchQuery: string;
}

const initialState: BookState = {
  books: [],
  searchQuery: "",
};

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { setSearchQuery } = bookSlice.actions;

export default bookSlice.reducer;

// Action to update search query
export const updateSearchQuery =
  (query: string): AppThunk =>
  async (
    dispatch: (arg0: { payload: string; type: "books/setSearchQuery" }) => void
  ) => {
    dispatch(setSearchQuery(query));
  };
