/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { api } from "../../Api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    postBook: builder.mutation({
      query: ({ id, data }) => ({
        url: `/addbook`,
        method: "POST",
        body: data,
      }),
    }),
    getBook: builder.query({
      query: (id: string) => ({ url: `/book/${id}` }),
    }),
  }),
});

export const { usePostBookMutation } = bookApi;