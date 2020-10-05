module.exports = {
  preset: 'ts-jest',
  testMatch: ["***/test/**/*-tests-*v*.ts"],
  testEnvironment: 'jsdom',
  setupTestFrameworkScriptFile: './jest.setup.js'
};
