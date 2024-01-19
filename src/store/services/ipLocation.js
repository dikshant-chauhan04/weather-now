// api.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseURL = process.env.REACT_APP_LOCATION ;
const key = process.env.REACT_APP_LOCATION_KEY ;
export const ipLocation = createApi({
  reducerPath: "ipLocation",
  baseQuery: fetchBaseQuery({
    baseUrl: baseURL,
  }),
  endpoints: (builder) => ({
    getIpInfo: builder.query({
      query: (ip) => `info?apikey=${key}&ip=${ip}`,
    }),
  }),
});

export const { useGetIpInfoQuery } = ipLocation;

