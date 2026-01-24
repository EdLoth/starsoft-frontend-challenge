import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  // Forneça o caminho para o seu app Next.js para carregar next.config.js e arquivos .env
  dir: './',
})

// Configurações personalizadas do Jest
/** @type {import('jest').Config} */
const config = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    // Lida com aliases (se você usa @/ no seu projeto)
    '^@/(.*)$': '<rootDir>/src/$1',
  },
}

export default createJestConfig(config)