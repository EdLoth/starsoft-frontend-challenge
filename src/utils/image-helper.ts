import { Product } from '@/services/api';

export const preloadImages = (products: Product[]): Promise<void[]> => {
  return Promise.all(
    products.map((product) => {
      return new Promise<void>((resolve) => {
        const img = new Image();
        img.src = product.image;
        img.onload = () => resolve();
        img.onerror = () => resolve();
      });
    })
  );
};