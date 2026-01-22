import 'styled-components';
import { theme } from '../styles/theme'; // Importa o objeto de tema que criamos

// Infere os tipos automaticamente baseados no seu arquivo theme.ts
type Theme = typeof theme;

declare module 'styled-components' {
  // Sobrescreve a interface padrão para incluir seus tipos
  export interface DefaultTheme extends Theme {}
}