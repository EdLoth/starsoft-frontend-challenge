import Head from 'next/head';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useProducts } from '@/hooks/useProducts';
import { ProductCard } from '@/components/ProductCard';
import { Header } from '@/components/Header';
import { addToCart } from '@/store/cartSlice';
import { Product } from '@/types/api';

const Container = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
`;

const Main = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const FeedbackMessage = styled.div`
  text-align: center;
  padding: 4rem;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.secondary};
`;

export default function Home() {
  const dispatch = useDispatch();
  
  const { data, isLoading, isError } = useProducts({ 
    page: 1, 
    rows: 12, 
    sortBy: 'id',
    orderBy: 'DESC'
  });

  const handleAddToCart = (product: Product) => {
    dispatch(addToCart(product));
  };

  return (
    <Container>
      <Head>
        <title>Starsoft NFT Market</title>
        <meta name="description" content="O melhor marketplace de NFTs" />
      </Head>
      
      <Header />
      
      <Main>
        {isLoading && <FeedbackMessage>Carregando produtos...</FeedbackMessage>}
        
        {isError && <FeedbackMessage>Erro ao carregar produtos. Tente novamente.</FeedbackMessage>}

        {!isLoading && !isError && (
          <Grid>
            {data?.products.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onAddToCart={handleAddToCart} 
              />
            ))}
          </Grid>
        )}
      </Main>
    </Container>
  );
}