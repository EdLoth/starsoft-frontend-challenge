export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: string;
  createdAt: string;
}

export interface ProductsResponse {
  products: Product[];
  count: number;
}

export type SortField = 'id' | 'name' | 'price' | 'brand';
export type SortOrder = 'ASC' | 'DESC';

export interface ProductParams {
  page?: number;
  rows?: number;
  sortBy?: SortField;
  orderBy?: SortOrder;
}