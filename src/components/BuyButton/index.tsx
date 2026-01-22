import { ButtonHTMLAttributes } from 'react';
import * as S from './styles';

interface BuyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isInCart: boolean;
  onClick: () => void;
}

export function BuyButton({ isInCart, onClick, ...props }: BuyButtonProps) {
  return (
    <S.Container 
      type="button"
      onClick={onClick}
      $isInCart={isInCart}
      disabled={isInCart} // Impede clicar novamente se já está no carrinho
      {...props}
    >
      {isInCart ? 'ADICIONADO AO CARRINHO' : 'COMPRAR'}
    </S.Container>
  );
}