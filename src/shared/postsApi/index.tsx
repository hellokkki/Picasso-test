import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TPost } from "../typing/types/TPost";

const API_URL = "/api";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  keepUnusedDataFor: 30,
  endpoints: (builder) => ({
    getPosts: builder.query<TPost[], { limit: number; start: number }>({
      query: ({ limit, start }) => ({
        url: `/posts?&_limit=${limit}&_start=${start}`,
        method: "GET",
        mode: "no-cors",
        headers: {
          "content-type": "Application-Json",
        },
      }),
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge(currentCacheData, responseData) {
        console.log(currentCacheData)
        return [...currentCacheData, ...responseData]
      },
      forceRefetch({ currentArg, previousArg }) {
          return currentArg !== previousArg
      },
    }),
  }),
});
