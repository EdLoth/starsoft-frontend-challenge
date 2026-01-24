import styled from 'styled-components';

interface ContainerProps {
  $isInCart: boolean;
}

export const Container = styled.button<ContainerProps>`
  width: 100%;
  border: none;
  padding: 1.375rem 0;
  
  border-radius: 8px;
  cursor: pointer;
  
  font-weight: 600;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: #FFFFFF;
  
  transition: all 0.2s ease-in-out;

  background-color: ${({ $isInCart }) => ($isInCart ? '#393939' : '#FF8310')};

  &:hover:not(:disabled) {
    filter: brightness(1.1);
    transform: translateY(-2px);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 1;
    
    &:hover {
      filter: none;
      transform: none;
    }
  }

  @media (max-width: 768px) {
    padding: 1rem 0; 
  }
`;