import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { fetchUserIp } from "./services/fetchUserIp";
import { weatherApi } from "./services/weatherData";
import { ipLocation } from "./services/ipLocation";

export const store = configureStore({
  reducer: {
    [fetchUserIp.reducerPath]: fetchUserIp.reducer,
    [weatherApi.reducerPath]: weatherApi.reducer,
    [ipLocation.reducerPath]: ipLocation.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      fetchUserIp.middleware,
      weatherApi.middleware,
      ipLocation.middleware
    ]),
});

setupListeners(store.dispatch);
