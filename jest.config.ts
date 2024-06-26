export default {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    // process `*.tsx` files with `ts-jest`
  },
  moduleNameMapper: {
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__ mocks __/fileMock.js',
    '\\.(css|less|scss|sss|styl)$': 'identity-obj-proxy',
  },
  coverageReporters: ['text', 'lcov', 'html'],
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
};
