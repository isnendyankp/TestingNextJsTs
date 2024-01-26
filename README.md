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