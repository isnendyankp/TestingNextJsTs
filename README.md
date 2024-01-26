# About Project

This project is  learn unit testing with nextjs and typescript.

## Built With

1. install axios: npm i axios.

## Run testing

1. npm run test


## step installer for testing

1. install npm i -D jest @testing-library/react @testing-library/jest-dom

2. setup on tsconfig.json change "jsx": "preserve" to "jsx": "react-jsx"

3. rerun npm run dev(it ok step number 2 back to default)

4. add "test": "jest" on package.json > scripts

5. install npm i -D ts-jest @terminal

6. create file jest.config.js and add this code

```javascript
 module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '^@components/(.*)$': '<rootDir>/src/components/$1'
    }
}
```

7. install npm i -D jest-environment-jsdom

8. npm i --save-dev @types/jest

9. setting tsconfig.json

```javascript

{
  "compilerOptions": {
    "target": "ESNext",
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "CommonJS",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "paths": {
      "@/*": [
        "./src/*"
      ]
    },
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ]
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx"
  ],
  "exclude": [
    "node_modules"
  ]
}

```

10. install npm install --save-dev @babel/preset-typescript

11. cr8 file babel.config.js and add this code

```javascript
module.exports = {
  presets: [
    ['@babel/preset-env', {targets: {node: 'current'}}],
    '@babel/preset-typescript',
  ],
};
```

12. install npm install --save-dev @babel/preset-typescript @babel/preset-react

13. edit file babel.config.js into this code

```javascript
module.exports = {
  presets: [
    ['@babel/preset-env', {targets: {node: 'current'}}],
    '@babel/preset-typescript',
    '@babel/preset-react',
  ],
};
```

14. install npm i -D @babel/preset-env

15. fix npm install -D jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom

16. npm init jest@latest

17. setting jest.config.js into jest.config.ts & add this code

```javascript
import type { Config } from 'jest'
import nextJest from 'next/jest.js'
 
const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})
 
// Add any custom config to be passed to Jest
const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
}
 
// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config)
```

18. npm i -D ts-node