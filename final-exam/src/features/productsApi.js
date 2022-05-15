import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const productsApi = createApi({
    reducerPath: "productsApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000"} ),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => 'api/beans',
        }),
     }),
});

export const { useGetAllProductsQuery } = productsApi;