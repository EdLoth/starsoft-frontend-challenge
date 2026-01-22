import Image from 'next/image';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import * as S from './styles';

export function Header() {
  const cartSize = useSelector((state: RootState) => state.cart.items.length);

  return (
    <S.Container>
      <S.LogoContainer href="/">
        <Image 
          src="/assets/logo.svg" 
          alt="Starsoft" 
          width={140} 
          height={40} 
          priority 
        />
      </S.LogoContainer>

      <S.CartContainer>
        <Image 
          src="/assets/bag.svg" 
          alt="Carrinho" 
          width={29} 
          height={29} 
        />
        
        <S.CartCount>
           <span>{cartSize}</span>
        </S.CartCount>
      </S.CartContainer>
    </S.Container>
  );
}