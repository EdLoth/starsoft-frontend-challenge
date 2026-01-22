import { useQuery } from '@tanstack/react-query';
import { getProducts } from '@/services/api';
import { ProductParams, ProductsResponse } from '@/types/api';

export function useProducts(params: ProductParams) {
  return useQuery<ProductsResponse>({
    queryKey: ['products', params],
    queryFn: () => getProducts(params),
    placeholderData: (previousData) => previousData, 
  });
}