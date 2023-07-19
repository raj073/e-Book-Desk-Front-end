/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { api } from "../../Api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    postBook: builder.mutation({
      query: ({ data }) => ({
        url: `/addbook`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["updatedBook"],
    }),

    updateBook: builder.mutation({
      query: ({ id, data }) => {
        return {
          url: `/book/${id}`,
          method: "PUT",
          body: data,
        };
      },
      invalidatesTags: ["updatedBook"],
    }),

    getBook: builder.query({
      query: () => ({ url: `/books` }),
      providesTags: ["updatedBook"],
    }),

    getSingleBook: builder.query({
      query: (id: string | undefined) => ({ url: `/book/${id}` }),
      providesTags: ["updatedBook"],
    }),

    deleteBook: builder.mutation({
      query: ({ id, data }) => {
        return {
          url: `/book/${id}`,
          method: "DELETE",
          body: data,
        };
      },
      invalidatesTags: ["updatedBook"],
    }),

    postReview: builder.mutation({
      query: ({ id, data }) => {
        return {
          url: `/review/${id}`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["reviews"],
    }),

    getReview: builder.query({
      query: (id) => ({ url: `/review/${id}` }),
      providesTags: ["reviews"],
    }),
  }),
});

export const {
  usePostBookMutation,
  useGetBookQuery,
  useGetSingleBookQuery,
  useUpdateBookMutation,
  useDeleteBookMutation,
  usePostReviewMutation,
} = bookApi;
