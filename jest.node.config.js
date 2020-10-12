module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    setupTestFrameworkScriptFile: './jest.setup.js',
    reporters: [
        'default',
        ['jest-junit', {
            suiteName: "node",
            classNameTemplate: "node.{classname}-{title}",
            titleTemplate: "{classname}-{title}",
            outputDirectory: 'test_reports',
            outputName: 'jest-junit-node.xml',
        }]
    ]
};
