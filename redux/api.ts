import { PhoneShortInfo } from "@/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Cart } from "./cartSlice";

export const productApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/" }),
  endpoints: (builder) => ({
    getProduct: builder.query<PhoneShortInfo[], null>({
      query: () => `mobiles`,
    }),
    getProductByCart: builder.mutation<PhoneShortInfo[], any>({
      query: (carts) => ({
        url: `mobiles`,
        method: "POST",
        body: { id: carts },
      }),
    }),
  }),
});

export const { useGetProductQuery, useGetProductByCartMutation } = productApi;
