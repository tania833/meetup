module.exports = {
    preset: 'ts-jest',
    verbose: true,
    moduleFileExtensions: ['js', 'ts', 'tsx', 'json', 'node', 'vue'],
    transform: {
        '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest',
    },
    testMatch: ['**/*.spec.ts'],
    setupFilesAfterEnv: ['<rootDir>/vuetifySetup.ts'],
};
