import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
  padding: 4rem;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const RetryButton = styled.button`
  padding: 0.75rem 1.5rem;
  border: none;
  background-color: ${({ theme }) => theme.colors.primary};
  color: #FFF;
  font-weight: 600;
  border-radius: 4px;
  cursor: pointer;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(1.1);
  }
`;

interface ErrorFeedbackProps {
  onRetry: () => void;
}

export function ErrorFeedback({ onRetry }: ErrorFeedbackProps) {
  return (
    <Container role="alert" aria-live="assertive">
      <p>Erro ao carregar produtos.</p>
      <RetryButton onClick={onRetry} aria-label="Tentar novamente">
        Tentar Novamente
      </RetryButton>
    </Container>
  );
}