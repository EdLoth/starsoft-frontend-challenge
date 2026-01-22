import { useInfiniteQuery } from '@tanstack/react-query';
import { getProducts } from '@/services/api';
import { ProductParams, ProductsResponse } from '@/types/api';

export function useProducts(params: ProductParams) {
  return useInfiniteQuery<ProductsResponse>({
    queryKey: ['products', params],
    queryFn: ({ pageParam = 1 }) => getProducts({ ...params, page: pageParam as number }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const totalPages = Math.ceil(lastPage.count / (params.rows || 10));
      const nextPage = allPages.length + 1;
      return nextPage <= totalPages ? nextPage : undefined;
    },
  });
}