import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  display: flex;
  gap: 1.9rem;
  padding: 1.875rem;
  background: #2b2b2b;
  border-radius: 8px;
  position: relative;

`;

export const ImageWrapper = styled.div`
  width: 161px;
  height: 161px;
  position: relative;
  background: #22232c;
  border-radius: 8px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 110%;
    max-height: 110%;
    border-radius: 8px;

    object-fit: contain;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5rem;
  flex: 1;
`;

export const TitleProduct = styled.h3`
  font-family: Poppins;
  font-weight: 500;
  font-size: 18px;
  line-height: 140%;
  letter-spacing: 0%;
`;

export const DecriptionProduct = styled.p`
  font-family: Poppins;
  font-weight: 300;
  font-size: 12px;
  line-height: 12px;
  letter-spacing: 0px;
`;

export const Price = styled.span`
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding-top: 12px;
  font-size: 1.2rem;
  color: #fff;
`;

export const Actions = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: flex-end;
  gap: 0.75rem;
  justify-content: space-between;
  height: 100%;
`;

export const QuantitySelector = styled.div`
  display: flex;
  width: 115px;
  height: 49px;
  align-items: center;
  justify-content: space-around;
  background: #232323;
  border-radius: 8px;
  padding: 4px;
  button {
    background: transparent;
    border: none;
    color: #fff;
    width: 16px;
    height: 16px;
    cursor: pointer;
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: color 0.2s;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }

    &:disabled {
      opacity: 0.3;
      cursor: not-allowed;
    }
  }

  span {
    color: #fff;
    font-size: 1.2rem;
    width: 20px;
    text-align: center;
    font-weight: 600;
    margin: 0 4px;
  }
`;

export const RemoveButton = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  border: none;
  cursor: pointer;
  color: white;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.75rem;
  transition: opacity 0.2s;
  font-size: 1.5rem;
  padding: 0.875rem;
  border-radius: 50%;
  &:hover {
    opacity: 0.8;
  }
`;
