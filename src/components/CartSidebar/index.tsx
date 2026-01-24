import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { RootState } from "@/store";
import { toggleCart, clearCart } from "@/store/cartSlice";
import * as S from "./styles";
import { CartItemCard } from "./CartItemCard";
import { ButtonFinish } from "@/components/ButtonFinish";
import { SuccessModal } from "@/components/SuccessModal";
import Image from "next/image";
import { formatPrice } from "@/utils/format";

export function CartSidebar() {
  const dispatch = useDispatch();
  const { isCartOpen, items } = useSelector((state: RootState) => state.cart);
  
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const total = items.reduce((acc, item) => {
    return acc + Number(item.price) * item.quantity;
  }, 0);

  useEffect(() => {
    if (isCartOpen) {
      // Trava o scroll e evita que a página "pule" caso tenha scrollbar
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "var(--scrollbar-width, 0px)"; 
    } else {
      // Libera o scroll
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
    }

    // Cleanup para garantir que o scroll volte se o componente for desmontado
    return () => {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
    };
  }, [isCartOpen]);

  const handleClose = () => {
    dispatch(toggleCart(false));
    setTimeout(() => {
      setIsSuccess(false);
      setIsLoading(false);
      setShowModal(false);
    }, 300);
  };

  const triggerConfetti = () => {
    const end = Date.now() + 3 * 1000;
    const colors = ["#FF8310", "#ffffff"];

    (function frame() {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors,
        zIndex: 99999, 
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors,
        zIndex: 99999,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  };

  const handleFinish = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      triggerConfetti();
      
      setTimeout(() => {
        setShowModal(true);
      }, 1000); // Abre o modal 1 segundo após o confete começar
    }, 1500);
  };

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob(
      [`COMPROVANTE STARSOFT\n\nData: ${new Date().toLocaleString()}\nTotal: ${formatPrice(Number(total))} ETH\n\nItens:\n${items.map(i => `- ${i.name} (${i.quantity}x)`).join('\n')}`], 
      {type: 'text/plain'}
    );
    element.href = URL.createObjectURL(file);
    element.download = "comprovante-starsoft.txt";
    document.body.appendChild(element); 
    element.click();
    document.body.removeChild(element);
  };

  const handleNewPurchase = () => {
    dispatch(clearCart());
    handleClose();
  };

  return (
    <>
      <AnimatePresence>
        {isCartOpen && (
          <S.Overlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          >
            <S.Container
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
            >
              <S.Header>
                <S.CloseButton onClick={handleClose} aria-label="Voltar">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 12H5" />
                    <path d="M12 19l-7-7 7-7" />
                  </svg>
                </S.CloseButton>
                <h2>Mochila de Compras</h2>
              </S.Header>

              <S.Content>
                {items.length === 0 ? (
                  <p style={{ color: "#999", textAlign: "center", marginTop: "2rem" }}>
                    Sua mochila está vazia.
                  </p>
                ) : (
                  items.map((item) => (
                    <CartItemCard key={item.id} product={item} />
                  ))
                )}
              </S.Content>

              <S.Footer>
                <S.Total>
                  <span>Total</span>
                  <S.Price>
                    <Image
                      src="/assets/money.png"
                      alt="ETH"
                      width={29}
                      height={29}
                      style={{ maxWidth: "29px", maxHeight: "29px", objectFit: "contain" }}
                    />
                    <span>{formatPrice(Number(total))} ETH</span>
                  </S.Price>
                </S.Total>

                <ButtonFinish 
                  onClick={handleFinish} 
                  isSuccess={isSuccess} 
                  isLoading={isLoading}
                />
              </S.Footer>
            </S.Container>
          </S.Overlay>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showModal && (
          <SuccessModal 
            onDownload={handleDownload}
            onNewPurchase={handleNewPurchase}
          />
        )}
      </AnimatePresence>
    </>
  );
}