import styled from 'styled-components';

export const Card = styled.article`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.border.radius};
  padding: 1.5rem;
  width: 100%;
  max-width: 345px;
  height: 555px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border: 1px solid transparent;
  transition: all 0.2s;

  &:hover {
    border-color: ${({ theme }) => theme.colors.border};
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 258px;
  background: #111;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    padding: 1rem;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  flex: 1;

  h3 {
    font-size: 1.125rem;
    font-weight: 500;
    color: #CCCCCC;
    line-height: 1.4;
  }

  p {
    font-size: 0.75rem;
    font-weight: 300;
    color: #FFFFFF;
    line-height: 1.6;
    display: -webkit-box;
    -webkit-line-clamp: 4; 
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

export const PriceRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: auto;
`;

export const PriceValue = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  span {
    font-size: 1.25rem;
    font-weight: 600;
    color: #F0F0F0;
    text-transform: uppercase;
  }
`;