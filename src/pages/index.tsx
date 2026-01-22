import Head from 'next/head';
import styled from 'styled-components';
import { useProducts } from '@/hooks/useProducts';
import { ProductCard } from '@/components/ProductCard';
import { Product } from '@/types/api';

const Grid = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Loading = styled.div`
  text-align: center;
  padding: 4rem;
  font-size: 1.5rem;
`;

export default function Home() {
  const { data, isLoading, isError } = useProducts({ 
    page: 1, 
    rows: 10,
    sortBy: 'id',
    orderBy: 'DESC'
  });

  const handleAddToCart = (product: Product) => {
    console.log(product);
  };

  if (isLoading) return <Loading>Carregando...</Loading>;
  if (isError) return <Loading>Erro ao carregar dados.</Loading>;

  return (
    <>
      <Head>
        <title>Starsoft NFT Market</title>
      </Head>
      
      <Grid>
        {data?.products.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onAddToCart={handleAddToCart} 
          />
        ))}
      </Grid>
    </>
  );
}