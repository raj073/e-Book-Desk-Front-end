import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://e-book-desk-back-end.vercel.app/",
  }),
  tagTypes: ["updatedBook", "reviews", "wishlist", "bookStatus"],
  endpoints: () => ({}),
});
