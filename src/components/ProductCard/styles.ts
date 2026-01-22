import styled from 'styled-components';

export const Card = styled.article`
  background: white;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  background: #f0f0f0;
  border-radius: 4px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.secondary};
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

export const PriceRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  
  span {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primary};
  }

  button {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 600;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.9;
    }
  }
`;