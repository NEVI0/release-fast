import type { Config } from 'jest';

const config: Config = {
  verbose: true,
  preset: 'ts-jest/presets/default-esm',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testEnvironment: 'node',
  testMatch: ['<rootDir>/__tests__/**/*.test.ts'],
  extensionsToTreatAsEsm: ['.ts'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', { useESM: true }],
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  transformIgnorePatterns: ['node_modules/(?!(?:@faker-js/faker)/)'],
  moduleNameMapper: {
    '^server-only$': '<rootDir>/__mocks__/server-only.ts',
    '^@domain/(.*)$': '<rootDir>/src/domain/$1',
    '^@configs/(.*)$': '<rootDir>/src/configs/$1',
    '^@tests/(.*)$': '<rootDir>/__tests__/$1',
  },
  collectCoverageFrom: [
    '<rootDir>/src/domain/useCases/*.ts',
    '<rootDir>/src/domain/helpers/*.ts',
    '!<rootDir>/src/domain/useCases/index.ts',
    '!<rootDir>/src/domain/helpers/index.ts',
  ],
  coverageDirectory: 'coverage',
  collectCoverage: true,
  coverageReporters: ['lcov', 'text'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};

export default config;
