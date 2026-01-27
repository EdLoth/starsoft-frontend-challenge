import axios from 'axios';
import { z } from 'zod';

const ProductSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  image: z.string(),
  price: z.preprocess((val) => Number(val), z.number()),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
});

const ProductsResponseSchema = z.object({
  count: z.number(),
  products: z.array(ProductSchema).default([]),
});

export type Product = z.infer<typeof ProductSchema>;
export type ProductsResponse = z.infer<typeof ProductsResponseSchema>;

export type SortField = 'id' | 'name' | 'price';
export type SortOrder = 'ASC' | 'DESC';

export interface ProductParams {
  page?: number;
  rows?: number;
  sortBy?: SortField | string;
  orderBy?: SortOrder | string;
}

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_STARSOFT_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getProducts = async (params: ProductParams): Promise<ProductsResponse> => {
  const { data } = await api.get('/', {
    params: {
      page: params.page || 1,
      rows: params.rows || 10,
      sortBy: params.sortBy || 'id',
      orderBy: params.orderBy || 'DESC'
    },
  });

  return ProductsResponseSchema.parse(data);
};