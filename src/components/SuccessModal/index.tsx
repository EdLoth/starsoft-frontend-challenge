import Image from 'next/image';
import * as S from './styles';

interface SuccessModalProps {
  onDownload: () => void;
  onNewPurchase: () => void;
}

export function SuccessModal({ onDownload, onNewPurchase }: SuccessModalProps) {
  return (
    <S.Overlay
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <S.Container
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring' }}
      >
        <Image 
          src="/assets/logo.svg" 
          alt="Starsoft" 
          width={180} 
          height={70} 
          style={{ objectFit: 'contain' }} // Garante que a logo apareça corretamente se for svg preta/branca
        />

        <div>
          <h2 style={{ color: '#fff' }}>Compra realizada!</h2>
          <p>Seu pedido foi processado com sucesso.</p>
        </div>

        <S.ButtonGroup>
          <S.ActionButton $variant="primary" onClick={onNewPurchase}>
            Nova Compra
          </S.ActionButton>
          
          <S.ActionButton $variant="secondary" onClick={onDownload}>
            Baixar Comprovante
          </S.ActionButton>
        </S.ButtonGroup>
      </S.Container>
    </S.Overlay>
  );
}