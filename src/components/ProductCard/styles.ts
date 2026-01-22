import styled from 'styled-components';

export const Card = styled.article`
  background: ${({ theme }) => theme.colors.surface}; 
  border-radius: ${({ theme }) => theme.border.radius}; 
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: transform 0.2s;
  border: 1px solid transparent;

  &:hover {
    transform: translateY(-4px);
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  background: #111;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    padding: 10px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;

  h3 {
    font-size: 1.1rem;
    color: ${({ theme }) => theme.colors.text};
    font-weight: 600;
  }

  p {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

export const PriceRow = styled.div`
  display: flex;
  flex-direction: column; 
  gap: 1rem;
  margin-top: auto;
  
  span {
    font-size: 1.25rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primary};
  }
`;


export const BuyButton = styled.button`
  width: 100%;
  background: ${({ theme }) => theme.colors.secondary};
  color: white;
  border: none;
  padding: 0.75rem;
  border-radius: ${({ theme }) => theme.border.radius};
  cursor: pointer;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.875rem;
  transition: all 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
  }
`;