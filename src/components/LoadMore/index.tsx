import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column; /* Empilha a barra e o botão */
  align-items: center;    /* Centraliza os itens */
  justify-content: center;
  margin-top: 9rem;
  margin-bottom: 9rem;
  width: 100%;
`;

const ProgressTrack = styled.div`
  width: 100%;
  max-width: 403px;
  height: 10px;
  background-color: #2A2A2A;
  border-radius: 8px;
  margin-bottom: 11px;
  overflow: hidden;
`;


const ProgressBar = styled.div<{ $progress: number }>`
  height: 100%;
  width: ${({ $progress }) => $progress}%;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  transition: width 0.4s ease-in-out;
`;

const Button = styled.button`
  background-color: #393939;
  color: ${({ theme }) => theme.colors.text};
  border: none;
  padding: 2rem;
  
  width: 100%;
  max-width: 403px; 
  
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 1.3rem;
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
`;

interface LoadMoreProps {
  onClick: () => void;
  isLoading: boolean;
  currentCount: number;
  totalCount: number;
  ariaLabel?: string;
}

export function LoadMore({ onClick, isLoading, currentCount, totalCount, ariaLabel }: LoadMoreProps) {
  const progress = totalCount > 0 ? Math.min((currentCount / totalCount) * 100, 100) : 0;
  const isFinished = currentCount >= totalCount;

  return (
    <Container>
      <ProgressTrack>
        <ProgressBar $progress={progress} role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100} />
      </ProgressTrack>

      <Button 
        onClick={onClick} 
        disabled={isLoading || isFinished}
        aria-label={ariaLabel || "Carregar mais produtos"}
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