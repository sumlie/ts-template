# ts-template
[![Node.js Version][node-badge]][node-url]
[![TypeScript][typescript-badge]][typescript-url]
[![Nodemon][nodemon-badge]][nodemon-url]
[![Jest][jest-badge]][jest-url]
[![ESLint][eslint-badge]][eslint-url]
[![Prettier][prettier-badge]][prettier-url]

A powerful TypeScript template for Node.js projects

## Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/sumlie/ts-template.git
   cd ts-template
   ```
2. **Install dependencies**
   ```bash
   pnpm i
   ```
3. **Start project**
   ```bash
   pnpm start
   ```

## Scripts
- `pnpm dev` - start in development mode (nodemon)
- `pnpm dev:silent` - start in development mode with only your program's output (nodemon logs hidden)
- `pnpm build` - compile ts to the dist/ directory
- `pnpm test` - run jest tests
- `pnpm test:watch` - run jest tests in watch mode (automatically re-runs on file changes)
- `pnpm lint` - run eslint
- `pnpm lint:fix` - autofix lint errors
- `pnpm enhance` - check for available dependency updates

## License
Licensed under the [MIT License](LICENSE).

[node-badge]: https://img.shields.io/badge/Nodejs->=18.0.0-green?style=for-the-badge&logo=node.js
[node-url]: https://nodejs.org/
[typescript-badge]: https://img.shields.io/badge/TypeScript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=FFF
[typescript-url]: https://www.typescriptlang.org/
[nodemon-badge]: https://img.shields.io/badge/Nodemon-000.svg?style=for-the-badge&logo=nodemon&logoColor=4D4B3E&labelColor=72C849&color=FFF
[nodemon-url]: https://nodemon.io/
[jest-badge]: https://img.shields.io/badge/Jest-%23C21325.svg?style=for-the-badge&logo=jest&logoColor=white
[jest-url]: https://jestjs.io/
[eslint-badge]: https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white
[eslint-url]: https://eslint.org/
[prettier-badge]: https://img.shields.io/badge/Prettier-222?style=for-the-badge&logo=prettier&logoColor=white
[prettier-url]: https://prettier.io/
