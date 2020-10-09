module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    setupTestFrameworkScriptFile: './jest.setup.js',
    reporters: [
        'default',
        ['jest-junit', {
            outputDirectory: 'test_reports',
            outputName: 'jest-junit-node.xml',
        }]
    ]
};
