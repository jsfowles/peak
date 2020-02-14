module.exports = {
  testURL: 'http://localhost/',
  coverageDirectory: './.coverage',
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx}'],
  testPathIgnorePatterns: ['/node_modules/'],
  setupFilesAfterEnv: ['./tests/setup-tests.tsx'],
};
