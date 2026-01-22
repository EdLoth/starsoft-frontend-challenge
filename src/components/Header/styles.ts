import styled from 'styled-components';

export const Container = styled.header`
  background-color: white;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  position: sticky;
  top: 0;
  z-index: 100;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

export const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.text};
  letter-spacing: -1px;
  
  span {
    color: ${({ theme }) => theme.colors.primary};
  }
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
`;

export const Badge = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  background-color: red;
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