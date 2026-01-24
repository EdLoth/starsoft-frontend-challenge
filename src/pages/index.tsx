import { useEffect, useState, useMemo } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { dehydrate, QueryClient, HydrationBoundary } from '@tanstack/react-query';

import { useProducts } from '@/hooks/useProducts';
import { ProductCard } from '@/components/ProductCard';
import { SkeletonCard } from '@/components/SkeletonCard';
import { Header } from '@/components/Header';
import { LoadMore } from '@/components/LoadMore';
import { BackToTop } from '@/components/BackToTop';
import { SEO } from '@/components/SEO';
import { ErrorFeedback } from '@/components/ErrorFeedback';
import { addToCart } from '@/store/cartSlice';
import { Product, getProducts } from '@/services/api';
import { Footer } from '@/components/Footer';
import { CartSidebar } from '@/components/CartSidebar';
import { preloadImages } from '@/utils/image-helper';

const Container = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.surface};
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  max-width: 1600px; 
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
  position: relative;
  flex: 1;
`;

const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-top: 2rem;
  justify-items: center; 

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export default function Home({ dehydratedState }: { dehydratedState: any }) {
  const dispatch = useDispatch();
  
  const [visibleProducts, setVisibleProducts] = useState<Product[]>([]);
  const [isImageLoading, setIsImageLoading] = useState(false);
  
  const { 
    data, 
    isLoading: isApiLoading, 
    isError, 
    fetchNextPage, 
    isFetchingNextPage 
  } = useProducts({ 
    rows: 8,
    sortBy: 'id',
    orderBy: 'DESC'
  });

  const serverProducts = useMemo(() => {
    const allProducts = data?.pages.flatMap(page => page.products) ?? [];
    return Array.from(new Map(allProducts.map(item => [item.id, item])).values());
  }, [data]);

  const totalCount = data?.pages[0]?.count ?? 0;
  const isProcessingNewItems = serverProducts.length > visibleProducts.length;

  useEffect(() => {
    if (isProcessingNewItems) {
      const newItems = serverProducts.slice(visibleProducts.length);
      setIsImageLoading(true);
      
      preloadImages(newItems).then(() => {
        setVisibleProducts(prev => [...prev, ...newItems]);
        setIsImageLoading(false);
      });
    }
  }, [serverProducts, visibleProducts.length, isProcessingNewItems]);

  useEffect(() => {
    if (visibleProducts.length > 8 && !isImageLoading) {
       setTimeout(() => {
          window.scrollBy({ top: 300, behavior: 'smooth' });
       }, 100);
    }
  }, [visibleProducts.length, isImageLoading]);

  const showBottomLoading = isFetchingNextPage || isProcessingNewItems || isImageLoading;

  return (
    <HydrationBoundary state={dehydratedState}>
      <Container>
        <SEO title="Home" description="Confira nossa seleção exclusiva de NFTs." />
        <Header />
        <CartSidebar />
        
        <Main role="main" aria-label="Lista de Produtos">
          {isError && <ErrorFeedback onRetry={() => window.location.reload()} />}

          <Grid aria-busy={isApiLoading || showBottomLoading} aria-label="Grade de produtos">
            
            {isApiLoading && visibleProducts.length === 0 && (
               Array.from({ length: 8 }).map((_, i) => (
                <SkeletonCard key={`initial-skeleton-${i}`} />
              ))
            )}

            {visibleProducts.map((product, index) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  type: "spring",
                  stiffness: 50,
                  damping: 15,
                  delay: (index % 8) * 0.1 
                }}
                style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
              >
                <ProductCard 
                  product={product} 
                  onAddToCart={(p) => dispatch(addToCart(p))} 
                />
              </motion.div>
            ))}

            {showBottomLoading && (
              Array.from({ length: 4 }).map((_, i) => (
                <SkeletonCard key={`more-skeleton-${i}`} />
              ))
            )}
          </Grid>

          {!isApiLoading && !isError && visibleProducts.length > 0 && (
            <LoadMore 
              onClick={() => fetchNextPage()}
              isLoading={showBottomLoading}
              currentCount={visibleProducts.length}
              totalCount={totalCount}
            />
          )}
        </Main>
        
        <Footer />
        <BackToTop />
      </Container>
    </HydrationBoundary>
  );
}

export async function getServerSideProps() {
  const queryClient = new QueryClient();
  const params = { rows: 8, sortBy: 'id', orderBy: 'DESC' };

  await queryClient.prefetchInfiniteQuery({
    queryKey: ['products', params],
    queryFn: () => getProducts({ ...params, page: 1 }),
    initialPageParam: 1,
  });

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
}