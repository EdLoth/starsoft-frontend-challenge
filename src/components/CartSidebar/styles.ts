import styled from "styled-components";
import { motion } from "framer-motion";

export const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5); 
  z-index: 999;
  display: flex;
  justify-content: flex-end; 
`;

export const Container = styled(motion.aside)`
  width: 100%;
  max-width: 679px;
  height: 100%;
  background: ${({ theme }) => theme.colors.surface};

  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  padding: 2rem;
  position: relative;

  @media (max-width: 500px) {
    max-width: 100%;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; 
  position: relative; 
  margin-bottom: 2rem;
  min-height: 60px; 


  h2 {
    font-family: Poppins;
    font-weight: 500;
    font-style: Medium;
    font-size: 24px;
    line-height: 110%;
    letter-spacing: 0%;
    margin: 0;
    text-align: center;
  }
`;

export const CloseButton = styled.button`
  background: #373737;
  color: ${({ theme }) => theme.colors.primary};
  border: none;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s;

 
  position: absolute;
  left: 0; 
  top: 50%; 
  transform: translateY(-50%);

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Content = styled.div`
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-right: 0.5rem;

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: #333;
    border-radius: 4px;
  }
`;

export const Footer = styled.div`
  margin-top: auto;
  padding-top: 2rem;
`;

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;

  font-family: Poppins;
  font-weight: 700;
  font-style: Bold;
  line-height: 26px;
  letter-spacing: -1px;
  text-transform: uppercase;
`;

export const Price = styled.span`
  font-family: Poppins;
  font-weight: 600;
  font-style: SemiBold;
  font-size: 24px;
  line-height: 110%;
  letter-spacing: 0%;

  display: flex;
  align-items: center;
  gap: 0.6rem;
`;

export const CheckoutButton = styled.button`
  width: 100%;
  background: #ff8310; 
  color: #fff;
  border: none;
  height: 60px;
  border-radius: 8px;
  font-weight: 700;
  font-size: 1.25rem;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    filter: brightness(1.1);
  }
`;
