import Image from 'next/image';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import * as S from './styles';

export function Header() {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const itemCount = cartItems.length;

  return (
    <S.Container>
      <Image 
        src="/assets/logo.svg" 
        alt="Starsoft" 
        width={101} 
        height={38} 
        priority 
      />

      <S.CartButton aria-label="Carrinho de compras">
        <Image 
          src="/assets/bag.svg"
          alt="Carrinho" 
          width={24} 
          height={24} 
        />
        
        {itemCount > 0 && <S.Badge>{itemCount}</S.Badge>}
      </S.CartButton>
    </S.Container>
  );
}