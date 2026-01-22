import { useEffect, useState, useMemo } from "react";
import Head from "next/head";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { useProducts } from "@/hooks/useProducts";
import { ProductCard } from "@/components/ProductCard";
import { Header } from "@/components/Header";
import { LoadMore } from "@/components/LoadMore";
import { BackToTop } from "@/components/BackToTop";
import { addToCart } from "@/store/cartSlice";
import { Product } from "@/types/api";

const Container = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
`;

const Main = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  position: relative;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const FeedbackMessage = styled.div`
  text-align: center;
  padding: 4rem;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const preloadImages = (products: Product[]) => {
  return Promise.all(
    products.map((product) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = product.image;
        img.onload = resolve;
        img.onerror = resolve;
      });
    }),
  );
};

export default function Home() {
  const dispatch = useDispatch();

  const [visibleProducts, setVisibleProducts] = useState<Product[]>([]);
  const [isImageLoading, setIsImageLoading] = useState(false);

  const {
    data,
    isLoading: isApiLoading,
    isError,
    fetchNextPage,
    isFetchingNextPage,
  } = useProducts({
    rows: 8,
    sortBy: "id",
    orderBy: "DESC",
  });

  const serverProducts = useMemo(() => {
    return data?.pages.flatMap((page) => page.products) ?? [];
  }, [data]);

  const totalCount = data?.pages[0]?.count ?? 0;

  useEffect(() => {
    if (serverProducts.length > visibleProducts.length) {
      const newItems = serverProducts.slice(visibleProducts.length);

      setIsImageLoading(true);

      preloadImages(newItems).then(() => {
        setVisibleProducts((prev) => [...prev, ...newItems]);
        setIsImageLoading(false);
      });
    }
  }, [serverProducts, visibleProducts.length]);

  useEffect(() => {
    if (visibleProducts.length > 8) {
      setTimeout(() => {
        window.scrollBy({ top: 300, behavior: "smooth" });
      }, 100);
    }
  }, [visibleProducts.length]);

  const handleAddToCart = (product: Product) => {
    dispatch(addToCart(product));
  };

  return (
    <Container>
      <Head>
        <title>Starsoft NFT Market</title>
      </Head>

      <Header />

      <Main>
        {isApiLoading && visibleProducts.length === 0 && (
          <FeedbackMessage>Carregando produtos...</FeedbackMessage>
        )}

        {isError && (
          <FeedbackMessage>Erro ao carregar produtos.</FeedbackMessage>
        )}

        <Grid>
          {visibleProducts.map((product, index) => (
            <motion.div
              key={product.id}
              layoutId={`product-${product.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                type: "spring",
                stiffness: 50,
                damping: 15,
                delay: (index % 8) * 0.1,
              }}
            >
              <ProductCard product={product} onAddToCart={handleAddToCart} />
            </motion.div>
          ))}
        </Grid>

        {!isApiLoading && !isError && (
          <LoadMore
            onClick={() => fetchNextPage()}
            isLoading={isFetchingNextPage || isImageLoading}
            currentCount={visibleProducts.length}
            totalCount={totalCount}
          />
        )}
      </Main>

      <BackToTop />
    </Container>
  );
}
