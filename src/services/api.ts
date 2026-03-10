import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Foods } from "../pages/Home";

export type PurchaseResponse = {
  orderId: string;
};

type Product = {
  id: number;
  price: number;
};
type PurchasePayload = {
  products: Product[];
  delivery: {
    receiver: string;
    address: {
      description: string;
      city: string;
      zipCode: string;
      number: number;
      complement: string;
    };
  };
  payment: {
    card: {
      name: string;
      number: string;
      code: number;
      expires: {
        month: number;
        year: number;
      };
    };
  };
};

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api-ebac.vercel.app/api/efood",
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<Foods[], void>({
      query: () => "restaurantes",
    }),
    getList: builder.query<Foods, string>({
      query: (id) => `restaurantes/${id}`,
    }),
    purchase: builder.mutation<PurchaseResponse, PurchasePayload>({
      query: (body) => ({
        url: "checkout",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useGetRestaurantsQuery, useGetListQuery, usePurchaseMutation } =
  api;

export default api;
