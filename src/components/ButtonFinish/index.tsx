import { ButtonHTMLAttributes } from 'react';
import * as S from './styles';

interface ButtonFinishProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isSuccess?: boolean;
  isLoading?: boolean;
}

export function ButtonFinish({ 
  isSuccess = false, 
  isLoading = false, 
  children, 
  ...rest 
}: ButtonFinishProps) {
  
  const getButtonTitle = () => {
    if (isLoading) return 'Processando seu pedido...';
    if (isSuccess) return 'Seu pedido foi finalizado!';
    return 'Finalizar a compra e realizar pedido';
  };

  return (
    <S.Container 
      disabled={isLoading || isSuccess} 
      $isLoading={isLoading}
      $isSuccess={isSuccess}
      title={getButtonTitle()}
      aria-busy={isLoading}
      aria-live="polite"
      {...rest}
    >
      {isLoading ? (
        <S.Spinner />
      ) : isSuccess ? (
        'Compra Finalizada!'
      ) : (
        children || 'Finalizar Compra'
      )}
    </S.Container>
  );
}