import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TPost } from "../typing/types/TPost";

const API_URL = "https://jsonplaceholder.typicode.com";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    method: "Get",
    mode: "cors",
    headers: {
      "content-type": "Application-Json",
    },
  }),
  keepUnusedDataFor: 30,
  endpoints: (builder) => ({
    getPosts: builder.query<TPost[], { limit: number; start: number }>({
      query: ({ limit, start }) => ({
        url: `/posts?&_limit=${limit}&_start=${start}`,
      }),
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge(currentCacheData, responseData) {
        return [...currentCacheData, ...responseData];
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
    getPostByTitle: builder.query<TPost[], { title: string }>({
      query: ({ title }) => ({
        url: `/posts?title=${title}`,
      }),
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
    }),
  }),
});
