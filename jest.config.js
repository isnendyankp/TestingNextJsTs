 module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '^@components/(.*)$': '<rootDir>/src/components/$1',
         '^@pages//(.*)$': '<rootDir>/src/components/$1'
    }
}


// explaination:
// 1. '^@components/(.*)$': '<rootDir>/src/components/$1', for test components folder
// 2. '^@pages//(.*)$': '<rootDir>/src/components/$1' for test pages folder