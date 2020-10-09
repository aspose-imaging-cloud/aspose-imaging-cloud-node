module.exports = {
    preset: 'ts-jest',
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
