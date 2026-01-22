import { Product } from '@/types/api';
import * as S from './styles';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(Number(product.price));

  return (
    <S.Card>
      <S.ImageContainer>
        <img src={product.image} alt={product.name} loading="lazy" />
      </S.ImageContainer>
      
      <S.Info>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
      </S.Info>

      <S.PriceRow>
        <span>{formattedPrice}</span>
        <button onClick={() => onAddToCart(product)}>
          Comprar
        </button>
      </S.PriceRow>
    </S.Card>
  );
}