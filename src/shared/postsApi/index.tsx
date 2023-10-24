import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TPost } from '../typing/types/TPost';

const API_URL = '/api'
 
export const postApi = createApi({
    reducerPath: 'postApi',
    baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
    endpoints: (builder) => ({
        getPosts: builder.query<TPost[], { limit: number}>({
            query: ({ limit }) => ({
                url: `/posts?_limit=${limit}`,
                method: 'GET',
                mode: 'no-cors',
                headers: {
                    'content-type': 'Application-Json'
                }
            })
        })
    })
})

