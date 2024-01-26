 module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transform : {
        '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    },
    globals: {
        'ts-jest': {
            tsConfig: 'tsconfig.test.json',
        },
    },
}


// explaination:
// 1. '^@components/(.*)$': '<rootDir>/src/components/$1', for test components folder
// 2. '^@pages//(.*)$': '<rootDir>/src/components/$1' for test pages folder