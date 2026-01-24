import Link from 'next/link';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CartSidebar } from '@/components/CartSidebar';
import { SEO } from '@/components/SEO';

const NotFoundContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.surface};
`;

const Content = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  text-align: center;
`;

const ErrorCode = styled.h1`
  font-size: clamp(5rem, 15vw, 10rem);
  font-weight: 800;
  color: ${({ theme }) => theme.colors.primary};
  line-height: 1;
  margin-bottom: 1rem;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 2rem;
`;

const StyledLink = styled(Link)`
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: #FFF;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: transform 0.2s, filter 0.2s;

  &:hover {
    transform: scale(1.05);
    filter: brightness(1.1);
  }
`;

export default function NotFound() {
  return (
    <NotFoundContainer>
      <SEO title="404 - Página não encontrada" />
      <Header />
      <CartSidebar />

      <Content>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ErrorCode>404</ErrorCode>
          <Title>Ops! Não encontramos o NFT que você procurava.</Title>
          <StyledLink href="/">
            Voltar para a Vitrine
          </StyledLink>
        </motion.div>
      </Content>

      <Footer />
    </NotFoundContainer>
  );
}