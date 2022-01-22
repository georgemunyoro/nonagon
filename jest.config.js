module.exports = {
  moduleNameMapper: {
    "\\.(css)$": "<rootDir>/src/styleMock.js",
  },
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>./.tools/setupTests.js"],
};
