/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  }
};

export default config;