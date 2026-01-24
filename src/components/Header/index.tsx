import { useState } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import { RootState } from "@/store";
import * as S from "./styles";
import { toggleCart } from "@/store/cartSlice";

const MotionContainer = motion.create(S.Container);
const MotionCartContainer = motion.create(S.CartContainer);

export function Header() {
  const dispatch = useDispatch();
  const cartSize = useSelector((state: RootState) => state.cart.items.length);
  const [isSticky, setIsSticky] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsSticky(latest > 250);
  });

  const shakeAnimation = {
    whileHover: {
      scale: 1.05,
      rotate: [0, -10, 10, -10, 10, 0],
    },
    transition: {
      duration: 0.4,
      ease: "easeInOut" as const, 
    },
  };

  return (
    <>
      <MotionContainer
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      >
        <S.LogoContainer href="/" aria-label="Starsoft">
          <Image
            src="/assets/logo.svg"
            alt="Starsoft Logo"
            width={140}
            height={40}
            priority
          />
        </S.LogoContainer>

        <MotionCartContainer
          {...shakeAnimation}
          onClick={() => dispatch(toggleCart(true))}
        >
          <Image src="/assets/bag.svg" alt="" width={29} height={29} />
          <S.CartCount>
            <span>{cartSize}</span>
          </S.CartCount>
        </MotionCartContainer>
      </MotionContainer>

      <AnimatePresence>
        {isSticky && (
          <MotionContainer
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            transition={{ duration: 0.3, ease: "easeInOut" as const }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              zIndex: 100,
              background: "rgba(25, 26, 32, 0.95)",
              backdropFilter: "blur(10px)",
              height: "80px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
              maxWidth: "100%",
            }}
          >
            <S.LogoContainer href="/" aria-label="Starsoft">
              <Image
                src="/assets/logo.svg"
                alt="Starsoft Logo"
                width={120}
                height={35}
              />
            </S.LogoContainer>

            <MotionCartContainer
              {...shakeAnimation}
              onClick={() => dispatch(toggleCart(true))}
            >
              <Image src="/assets/bag.svg" alt="" width={25} height={25} />
              <S.CartCount>
                <span>{cartSize}</span>
              </S.CartCount>
            </MotionCartContainer>
          </MotionContainer>
        )}
      </AnimatePresence>
    </>
  );
}