import { baseApi } from "../../api/baseApi";

const clothesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    postClothes: builder.mutation({
      query: (body) => ({
        url: "/clothes",
        method: "POST",
        body,
      }),
      invalidatesTags: ["clothes"],
    }),
    getAllClothes: builder.query({
      query: () => ({
        url: "/clothes",
        method: "GET",
      }),
      providesTags: ["clothes"],
    }),
    getSingleClothe: builder.query({
      query: (id) => ({
        url: `/clothes/${id}`,
        method: "GET",
      }),
      providesTags: ["clothes"],
    }),
    updateClothe: builder.mutation({
      query: ({ id, updateData }) => ({
        url: `/clothes/${id}`,
        method: "PATCH",
        body: updateData,
      }),
      invalidatesTags: ["clothes"],
    }),
    deleteClothe: builder.mutation({
      query: (id) => ({
        url: `/clothes/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["clothes"],
    }),
  }),
});

export const {
  useGetAllClothesQuery,
  useGetSingleClotheQuery,
  usePostClothesMutation,
  useDeleteClotheMutation,
  useUpdateClotheMutation,
} = clothesApi;
