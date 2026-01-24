import { ButtonHTMLAttributes } from 'react';
import * as S from './styles';

interface BuyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isInCart: boolean;
  onClick: () => void;
}

export function BuyButton({ isInCart, onClick, ...props }: BuyButtonProps) {
  const buttonTitle = isInCart 
    ? 'Este produto já está no seu carrinho' 
    : 'Adicionar este produto ao carrinho';

  return (
    <S.Container 
      type="button"
      onClick={onClick}
      $isInCart={isInCart}
      disabled={isInCart}
      title={buttonTitle}  
      {...props}
    >
      {isInCart ? 'ADICIONADO AO CARRINHO' : 'COMPRAR'}
    </S.Container>
  );
}