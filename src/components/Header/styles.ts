import styled from 'styled-components';
import Link from 'next/link';

export const Container = styled.header`
  width: 100%;
  height: 100px;
  background: ${({ theme }) => theme.colors.surface};
  
  max-width: 1920px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 4.6875rem 0 2.875rem;

  @media (max-width: 1024px) {
    padding: 0 2rem;
    height: 80px;
  }
`;

export const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  cursor: pointer;
  
  img {
    height: auto;
  }
`;

export const CartContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;

export const CartCount = styled.div`
  display: flex;
  flex-direction: column;
  
  span {
    font-size: 1.3rem;
    color: #FFFFFF;
    font-weight: 600;
  }
`;