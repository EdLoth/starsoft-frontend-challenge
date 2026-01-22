import Head from 'next/head';
import styled from 'styled-components';

// Testando se o theme está funcionando (acessando theme.colors.primary)
const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 1.2rem;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Starsoft NFT | Teste Técnico</title>
        <meta name="description" content="Marketplace de NFTs criado com Next.js" />
      </Head>
      
      <Container>
        <Title>Setup Completo! 🚀</Title>
        <Subtitle>
          Next.js + Redux + React Query + Styled Components
        </Subtitle>
      </Container>
    </>
  );
}