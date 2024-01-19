// apiSlice.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = process.env.REACT_APP_BASE_API;
const apiKey = process.env.REACT_APP_BASE_API_KEY;

export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl}),
  endpoints: (builder) => ({
    getWeather: builder.query({
      query: (CITY_NAME,units='metric') => `weather?q=${CITY_NAME}&units=${units}&appid=${apiKey}`,
    }),
  }),
});

export const { useGetWeatherQuery } = weatherApi;
