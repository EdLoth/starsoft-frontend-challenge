import styled, { keyframes, css } from 'styled-components';

interface ContainerProps {
  $isSuccess?: boolean;
  $isLoading?: boolean;
}

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.button<ContainerProps>`
  width: 100%;
  height: 81px; 
  background: #FF8310;
  color: #FFFFFF;
  border: none;
  border-radius: 8px;
  font-family: var(--font-poppins), sans-serif;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.5;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ $isSuccess }) => $isSuccess && css`
    background: #00875F;
  `}

  &:hover:not(:disabled) {
    filter: brightness(1.1);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.8;
    
    background: ${({ $isSuccess }) => ($isSuccess ? '#00875F' : '#FF8310')}; 

    &:hover {
      filter: none;
    }
  }
`;

export const Spinner = styled.div`
  width: 24px;
  height: 24px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: #ffffff;
  animation: ${rotate} 1s linear infinite;
`;