import { PhoneShortInfo } from "@/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Cart } from "./cartSlice";
import { User } from "@/types/user";

export const productApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/" }),
  endpoints: (builder) => ({
    getProduct: builder.query<PhoneShortInfo[], null>({
      query: () => `mobiles`,
    }),
    registerUser: builder.mutation<User, User>({
      query: (user: User) => ({
        url: `user/register`,
        method: "POST",
        body: user,
      }),
    }),
    loginUser: builder.mutation<User, User>({
      query: (user: User) => ({
        url: `user/login`,
        method: "POST",
        body: user,
      }),
    }),
  }),
});

export const {
  useGetProductQuery,
  useRegisterUserMutation,
  useLoginUserMutation,
} = productApi;
