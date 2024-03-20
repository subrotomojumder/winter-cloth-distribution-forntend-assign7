import { baseApi } from "@/redux/api/baseApi";

const donationsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createDonation: builder.mutation({
      query: (body) => ({
        url: "/donations",
        method: "POST",
        body,
      }),
      invalidatesTags: ["donations"],
    }),
    getAllDonation: builder.query({
      query: () => ({
        url: "/donations",
        method: "GET",
      }),
      providesTags: ["donations"],
    }),
    getAllDonor: builder.query({
      query: () => ({
        url: "/donors",
        method: "GET",
      }),
      providesTags: ["donations"],
    }),
    addComments: builder.mutation({
      query: ({ id, body }) => ({
        url: `/comments/${id}`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["comments"],
    }),
    getAllComments: builder.query({
      query: () => ({
        url: `/comments`,
        method: "GET",
      }),
     providesTags: ["comments"],
    }),
  }),
});
export const {
  useCreateDonationMutation,
  useGetAllDonationQuery,
  useGetAllDonorQuery,
  useAddCommentsMutation,
  useGetAllCommentsQuery
} = donationsApi;
