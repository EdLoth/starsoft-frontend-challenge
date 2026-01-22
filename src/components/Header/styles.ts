import styled from "styled-components";

export const Container = styled.header`
  background-color: ${({ theme }) => theme.colors.surface};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;

  border-bottom: 1px solid rgba(255, 255, 255, 0.21);

  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
`;

export const CartButton = styled.button`
  background: transparent;
  border: none;
  position: relative;
  cursor: pointer;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    filter: brightness(0) invert(1);
  }
`;

export const Badge = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  font-size: 0.75rem;
  font-weight: bold;
  height: 20px;
  min-width: 20px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 4px;
`;
