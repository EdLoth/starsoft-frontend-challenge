import * as S from './styles';

export function SkeletonCard() {
  return (
    <S.Container role="status" aria-label="Carregando item">
      <S.SkeletonBlock $height="258px" />

      <S.ContentGroup>
        <S.SkeletonBlock $width="70%" $height="24px" />
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <S.SkeletonBlock $width="100%" $height="14px" />
          <S.SkeletonBlock $width="100%" $height="14px" />
          <S.SkeletonBlock $width="80%" $height="14px" />
        </div>
      </S.ContentGroup>

      <S.FooterGroup>
        <S.SkeletonBlock $width="40%" $height="28px" />
        <S.SkeletonBlock $width="100%" $height="48px" />
      </S.FooterGroup>
    </S.Container>
  );
}