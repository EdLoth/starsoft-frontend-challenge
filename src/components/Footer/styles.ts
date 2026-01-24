import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  height: 76px;
  background: ${({ theme }) => theme.colors.surface};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 26px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #FFFFFF; 
  opacity: 0.41;
  text-align: center;
  margin: 0;
`;
