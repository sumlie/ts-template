export default {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  testMatch: [
    "<rootDir>/src/**/*.test.ts",
    "<rootDir>/tests/**/*.test.ts",
  ],
};
