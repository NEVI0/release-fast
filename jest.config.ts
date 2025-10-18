import type { Config } from 'jest';

const config: Config = {
  verbose: true,
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testEnvironment: 'node',
  testMatch: ['<rootDir>/__tests__/**/*.test.ts'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleNameMapper: {
    '^@domain/(.*)$': '<rootDir>/src/domain/$1',
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
