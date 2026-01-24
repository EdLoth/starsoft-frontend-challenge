import { useDispatch } from "react-redux";
import { Product } from "@/services/api";
import { changeQuantity, removeFromCart } from "@/store/cartSlice";
import * as S from "./styles";
import { getShortDescription } from "@/utils/getShortDescription";
import Image from "next/image";
import { formatPrice } from "@/utils/format";

interface CartItemProps {
  product: Product & { quantity: number };
}

export function CartItemCard({ product }: CartItemProps) {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(changeQuantity({ id: product.id, type: "increase" }));
  };

  const handleDecrease = () => {
    dispatch(changeQuantity({ id: product.id, type: "decrease" }));
  };

  const handleRemove = () => {
    dispatch(removeFromCart(product.id));
  };

  const TrashIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="22"
      viewBox="0 0 20 22"
      fill="none"
    >
      <path
        d="M17.3927 7.87122C17.3927 7.87122 16.809 15.1113 16.4704 18.1611C16.3091 19.6177 15.4093 20.4713 13.9355 20.4982C11.1308 20.5487 8.32293 20.5519 5.51933 20.4928C4.10141 20.4638 3.21668 19.5995 3.05866 18.1686C2.71788 15.092 2.13738 7.87122 2.13738 7.87122M18.8798 4.4006H0.649902M15.3671 4.40058C14.5232 4.40058 13.7965 3.80395 13.631 2.97728L13.3697 1.67008C13.2085 1.067 12.6624 0.649902 12.04 0.649902H7.48949C6.86706 0.649902 6.32096 1.067 6.15971 1.67008L5.89849 2.97728C5.73294 3.80395 5.00624 4.40058 4.16236 4.40058"
        stroke="white"
        stroke-width="1.3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );

  return (
    <S.Container layout exit={{ opacity: 0, x: -50 }}>
      <S.ImageWrapper>
        <img src={product.image} alt={product.name} />
      </S.ImageWrapper>

      <S.Info>
        <S.TitleProduct>{product.name}</S.TitleProduct>
        <S.DecriptionProduct title={product.description}>
          {getShortDescription(product.description)}
        </S.DecriptionProduct>
        <S.Price>
          <Image
            src="/assets/money.png"
            alt="ETH"
            width={29}
            height={29}
            style={{
              maxWidth: "29px",
              maxHeight: "29px",
              objectFit: "contain",
            }}
          />
          <span>{formatPrice(Number(product.price))} ETH</span>
        </S.Price>

        <S.Actions>
          <S.QuantitySelector>
            <button onClick={handleDecrease} disabled={product.quantity <= 1}>
              -
            </button>
            <span>{product.quantity}</span>
            <button onClick={handleIncrease}>+</button>
          </S.QuantitySelector>

          <S.RemoveButton onClick={handleRemove} aria-label="Remover item">
            {TrashIcon}
          </S.RemoveButton>
        </S.Actions>
      </S.Info>
    </S.Container>
  );
}
