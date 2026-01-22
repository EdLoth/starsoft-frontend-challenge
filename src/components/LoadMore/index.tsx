import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  margin-bottom: 3rem;
  width: 100%;
`;

const Button = styled.button<{ $progress: number }>`
  background-color: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};
  border: none;
  padding: 1.25rem 2rem;
  width: 100%;
  max-width: 380px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  text-transform: uppercase;
  font-size: 0.875rem;
  letter-spacing: 1px;
  transition: all 0.2s;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0,0,0,0.2);
    filter: brightness(1.1);
  }

  &:disabled {
    cursor: default;
    opacity: 0.7;
    transform: none;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 4px;
    background-color: ${({ theme }) => theme.colors.primary};
    width: ${({ $progress }) => $progress}%;
    transition: width 0.4s ease-in-out;
  }
`;

interface LoadMoreProps {
  onClick: () => void;
  isLoading: boolean;
  currentCount: number;
  totalCount: number;
}

export function LoadMore({ onClick, isLoading, currentCount, totalCount }: LoadMoreProps) {
  const progress = totalCount > 0 ? Math.min((currentCount / totalCount) * 100, 100) : 0;
  const isFinished = currentCount >= totalCount;

  return (
    <Container>
      <Button 
        onClick={onClick} 
        disabled={isLoading || isFinished}
        $progress={progress}
      >
        {isLoading 
          ? 'Carregando...' 
          : isFinished 
            ? 'Você já viu tudo' 
            : 'Carregar mais'}
      </Button>
    </Container>
  );
}