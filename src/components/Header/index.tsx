import Image from 'next/image';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import * as S from './styles';

export function Header() {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const itemCount = cartItems.length;

  return (
    <S.Container>
      {/* Logo da Starsoft */}
      <Image 
        src="/assets/logo.svg" 
        alt="Starsoft" 
        width={160} // Ajuste conforme necessário
        height={40} 
        priority 
      />

      <S.CartButton aria-label="Carrinho de compras">
        {/* Ícone da Sacola (Bag) do Figma */}
        <Image 
          src="/assets/bag.svg" // Nome do seu arquivo aqui
          alt="Carrinho" 
          width={24} 
          height={24} 
        />
        
        {/* Mostra o badge apenas se tiver itens */}
        {itemCount > 0 && <S.Badge>{itemCount}</S.Badge>}
      </S.CartButton>
    </S.Container>
  );
}