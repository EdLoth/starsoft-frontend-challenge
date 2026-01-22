import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Button = styled(motion.button)`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  z-index: 999;
  
  &:hover {
    filter: brightness(1.1);
  }
  
  svg {
    width: 24px;
    height: 24px;
  }
`;