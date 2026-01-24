import { useSelector } from 'react-redux';
import Image from 'next/image';
import { RootState } from '@/store';
import { BuyButton } from '@/components/BuyButton';
import { formatPrice } from '@/utils/format';
import * as S from './styles';
import { Product } from '@/services/api';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const isInCart = useSelector((state: RootState) => 
    state.cart.items.some(item => item.id === product.id)
  );

  return (
    <S.Card>
      <S.ImageContainer>
        <Image 
          src={product.image} 
          alt={product.name} 
          width={200} 
          height={200} 
          loading="lazy"
        />
      </S.ImageContainer>

      <S.Info>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
      </S.Info>
      
      <S.PriceRow>
        <S.PriceValue>
          <Image 
            src="/assets/money.png" 
            alt="ETH" 
            width={29} 
            height={29} 
            style={{ 
              maxWidth: '29px', 
              maxHeight: '29px',
              objectFit: 'contain' 
            }}
          />
          <span>{formatPrice(Number(product.price))} ETH</span>
        </S.PriceValue>
        
        <BuyButton 
          isInCart={isInCart} 
          onClick={() => onAddToCart(product)} 
        />
      </S.PriceRow>
    </S.Card>
  );
}