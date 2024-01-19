import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const baseURL = process.env.REACT_APP_IP ;
// Define a service using a base URL and expected endpoints
export const fetchUserIp = createApi({
  reducerPath: 'fetchUserIp',
  baseQuery: fetchBaseQuery({ baseUrl: baseURL}),
  endpoints: (builder) => ({
    getUserIp: builder.query({
      query: () => '?format=json',
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetUserIpQuery } = fetchUserIp