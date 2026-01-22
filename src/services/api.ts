import axios from 'axios';
import { ProductParams, ProductsResponse } from '@/types/api';

export const api = axios.create({
  // Lê a URL do arquivo .env.local
  baseURL: process.env.NEXT_PUBLIC_STARSOFT_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getProducts = async (params: ProductParams): Promise<ProductsResponse> => {
  const { data } = await api.get<ProductsResponse>('/products', {
    params: {
      page: params.page || 1,
      rows: params.rows || 10,
      sortBy: params.sortBy || 'id',
      orderBy: params.orderBy || 'DESC'
    },
  });
  
  return data;
};