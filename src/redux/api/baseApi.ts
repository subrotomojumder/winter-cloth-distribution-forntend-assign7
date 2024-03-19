import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://winter-clothes-server-assin6.vercel.app/api/v1",
  }),
  endpoints: () => ({}),
  tagTypes: ["users", "clothes", "donations"],
});
