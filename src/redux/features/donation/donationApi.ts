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
  }),
});
export const { useCreateDonationMutation, useGetAllDonationQuery } =
  donationsApi;
