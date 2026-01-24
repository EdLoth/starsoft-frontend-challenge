import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  z-index: 99999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

export const Container = styled(motion.div)`
    background: ${({ theme }) => theme.colors.background};
  width: 100%;
  max-width: 400px;
  border-radius: 8px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  box-shadow: 0 10px 25px rgba(0,0,0,0.2);

  h2 {
    font-family: var(--font-poppins), sans-serif;
    font-weight: 700;
    font-size: 1.5rem;
    color: #111;
    text-align: center;
    margin-top: 0.5rem;
  }

  p {
    font-family: var(--font-poppins), sans-serif;
    color: #666;
    text-align: center;
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

export const ActionButton = styled.button<{ $variant?: 'primary' | 'secondary' }>`
  width: 100%;
  height: 48px;
  border-radius: 8px;
  font-family: var(--font-poppins), sans-serif;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s;
  text-transform: uppercase;
  background: ${({ $variant, theme }) => $variant === 'primary' ? theme.colors.primary : 'transparent'};
  color: ${({ $variant, theme }) => $variant === 'primary' ? '#FFF' : theme.colors.primary};
  border: ${({ $variant, theme }) => $variant === 'primary' ? 'none' : `2px solid ${theme.colors.primary}`};

  &:hover {
    filter: brightness(1.1);
    transform: translateY(-2px);
  }
`;