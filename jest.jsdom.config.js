module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    setupTestFrameworkScriptFile: './jest.setup.js',
    reporters: [
        'default',
        ['jest-junit', {
            suiteName: "jsdom",
            classNameTemplate: "jsdom.{classname}-{title}",
            titleTemplate: "{classname}-{title}",
            outputDirectory: 'test_reports',
            outputName: 'jest-junit-jsdom.xml',
        }]
    ]
};
