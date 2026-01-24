import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 345px;
  height: 555px;
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.border.radius};
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border: 1px solid transparent;
`;

export const SkeletonBlock = styled.div<{ $width?: string; $height?: string }>`
  width: ${({ $width }) => $width || '100%'};
  height: ${({ $height }) => $height || '20px'};
  border-radius: 4px;
  background: #2a2a2a;
  background-image: linear-gradient(
    to right,
    #2a2a2a 0%,
    #3a3a3a 20%,
    #2a2a2a 40%,
    #2a2a2a 100%
  );
  background-repeat: no-repeat;
  background-size: 1000px 100%;
  animation: ${shimmer} 2s infinite linear forwards;
`;

export const ContentGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  flex: 1;
`;

export const FooterGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: auto;
`;