module.exports = {
    preset: 'ts-jest',
    testMatch: ["***/test/**/*-tests-*v*.ts"],
    testEnvironment: 'jsdom',
    setupTestFrameworkScriptFile: './jest.setup.js',
    reporters: [
        'default',
        ['jest-junit', {
            outputDirectory: 'test_reports',
            outputName: 'jest-junit-jsdom.xml',
        }]
    ]
};
