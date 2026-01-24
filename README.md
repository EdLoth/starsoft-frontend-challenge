# 🚀 NFT Marketplace - Starsoft Challenge

Olá! Eu sou **Eduardo Ramos**, e este é o resultado do meu desenvolvimento para o desafio técnico de Desenvolvedor Front-End. O projeto consiste em um marketplace de NFTs moderno, focado em performance, validação rigorosa de dados e acessibilidade.

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/dev-edloth/)

## 🛠️ Tecnologias Utilizadas

### Core & Framework
* **Next.js 16**: Utilizando App Router/Pages, otimização de imagens e estratégias avançadas de Data Fetching.
* **React 19 & TypeScript**: Garantindo tipagem estática e segurança de dados em todo o ciclo de vida da aplicação.
* **Styled Components**: Estilização modular via CSS-in-JS com suporte a temas e props dinâmicas.

### Gerenciamento de Estado e Dados
* **Redux Toolkit**: Centralização do estado global para gerenciamento eficiente do carrinho de compras.
* **React Query (TanStack Query)**: Consumo de API otimizado com cache inteligente, refetching e sincronização de estados.
* **Zod**: Implementado na camada de serviços para validação de esquemas em tempo de execução, garantindo contratos de API resilientes.

### UX, Animações e Testes
* **Framer Motion**: Animações fluidas para componentes de UI e transições de modais.
* **Canvas Confetti**: Feedback visual de alta fidelidade para celebração de sucesso no checkout.
* **Jest & React Testing Library**: Suíte completa de testes unitários e de integração para componentes, hooks e utilitários.

---

## ✨ Diferenciais e Melhorias Implementadas

Apliquei princípios de **Clean Code** e **Acessibilidade**, elevando a qualidade técnica do desafio:

1.  **Acessibilidade (A11y)**:
    * Uso de `aria-busy` e `aria-live` para garantir que mudanças de estado sejam comunicadas corretamente.
    * Tooltips dinâmicos e cursores semânticos (`not-allowed`) para indicar estados bloqueados.
2.  **Performance e UX**:
    * **Skeleton Loading**: Implementação de `SkeletonCard` para eliminar o Cumulative Layout Shift (CLS).
    * **LCP Optimization**: Carregamento prioritário de assets críticos com o componente Image do Next.js.
3.  **Segurança com Zod**:
    * Substituição de tipos manuais por validação de esquemas, tornando a aplicação imune a inconsistências vindas da API externa.
4.  **Componentes Exclusivos**:
    * `BackToTop`: Melhoria na navegação de listas extensas.
    * `LoadMore`: Carregamento incremental de produtos.
    * `SuccessModal`: Experiência de confirmação imersiva pós-compra.

---

## ⚙️ Como Executar o Projeto

### Via Docker (Recomendado)
Execute o ambiente orquestrado com um único comando:

```bash
docker-compose up --build

Acesse em: `http://localhost:3000`.

### Localmente

1. Instale as dependências:
```bash
npm install
&
npm run dev

# Executar todos os testes
npm test

# Relatório de cobertura detalhado
npm run test:coverage

#Para verificar a integridade do código (Linting):
npm run lint
```
## 📂 Padrão de Commits

O projeto foi desenvolvido seguindo rigorosamente o padrão de **Conventional Commits** para garantir um histórico de alterações semântico e organizado:

* **feat**: Implementação de novas funcionalidades, componentes de UI e lógica de negócio.
* **fix**: Correções de bugs, ajustes de acessibilidade e compatibilidade de ambiente (Docker/Node).
* **refactor**: Migração para ferramentas mais robustas, como validação de esquemas com Zod.
* **test**: Adição de testes unitários e de integração com Jest e RTL.
* **docs/chore**: Manutenção de documentação (README) e configurações de ambiente/dependências.
* **style/asset**: Ajustes visuais, temas (Styled Components) e otimização de ativos.

---

## 🔗 Deploy

O projeto pode ser visualizado online através do link:
[👉 NFT Marketplace - Live Demo](https://starsoft-frontend-challenge-omega.vercel.app/)

**Candidato:** [Eduardo Ramos](https://www.linkedin.com/in/dev-edloth/)  
**Projeto:** Marketplace de NFTs (Starsoft Front-end Challenge)
