import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (userInfo) => ({
        url: "/register",
        method: "POST",
        body: userInfo,
      }),
    }),
    login: builder.mutation({
      query: (userInfo) => ({
        url: "/login",
        method: "POST",
        body: userInfo,
      }),
    }),
    getSingleUser: builder.query({
      query: (id) => ({
        url: `/users/${id}`,
        method: "GET",
      }),
    }),
    createVolunteer: builder.mutation({
      query: ({ id, body }) => ({
        url: `/volunteers/${id}`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["users"],
    }),
    getAllVolunteers: builder.query({
      query: () => ({
        url: `/volunteers`,
        method: "GET",
      }),
      providesTags: ["users"],
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useGetSingleUserQuery,
  useCreateVolunteerMutation,
  useGetAllVolunteersQuery
} = authApi;
