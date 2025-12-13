# Mocha API Testing Project

This project provides a template for testing REST APIs using [Mocha](https://mochajs.org/), [SuperTest](https://github.com/ladjs/supertest), and related tools. It is designed for easy setup and quick test execution, even after a long break from the project.

> **Note:** This project is tested with Node.js `v20.18.0`.

---

## Quick Start

1. **Clone the repository** (if you haven't already):
	```sh
	git clone <your-repo-url>
	cd mocha-api-testing
	```

2. **Install dependencies:**
	```sh
	npm install
	```

3. **Configure environment variables:**
	- Create a `.env` file in the project root (see [Environment Variables](#environment-variables)).

4. **Run tests:**
	```sh
	npm test
	```

5. **Generate a test report:**
	```sh
	npm run test-report
	```

---

## Environment Variables

This project uses a `.env` file to store sensitive information and configuration. Example:

```env
BASE_URL=https://gorest.co.in/public/v2/
TOKEN=your_api_token_here
```

- `BASE_URL`: The base URL for the API under test (e.g., Go REST API).
- `TOKEN`: Your personal access token for authentication. Obtain this by logging in at [Go REST API](https://gorest.co.in/) and copying your access token from your account.

**Never commit your `.env` file to version control.**

---

## Project Structure

- `config/` – Configuration files (e.g., request setup, token management)
- `helpers/` – Helper functions for API calls
- `test/` – Mocha test files
- `.env` – Environment variables (not committed)
- `.mocharc.yaml` – Mocha configuration (uses Babel for ES6+ support)

---

## Scripts

- `npm test` – Runs all tests with Mocha
- `npm run test-report` – Runs tests and generates a Mochawesome HTML report

---

## Packages & Their Purpose

Below are the main packages used in this project, with a brief description of why each is included:

### Core Testing
- **mocha**: Test runner for JavaScript, used to structure and run tests.
- **chai**: Assertion library for writing readable test assertions.
- **supertest**: HTTP assertions for testing REST APIs, works well with Mocha.

### Babel (for ES6+ Support)
- **@babel/core**: Babel compiler core.
- **@babel/cli**: Command-line interface for Babel.
- **@babel/node**: Run Node.js scripts with Babel transpilation.
- **@babel/register**: Hook to compile files on the fly when required.
- **@babel/preset-env**: Smart preset to compile ES6+ down to ES5.

### Utilities
- **dotenv**: Loads environment variables from `.env` into `process.env`.
- **@faker-js/faker**: Generates fake data for testing (e.g., random names, emails).

### Reporting
- **mochawesome**: Generates beautiful HTML/CSS test reports for Mocha.

---

## Example: Generating Fake Data

To generate random data in your tests, use Faker:

```js
import { faker } from '@faker-js/faker';
const randomName = faker.person.fullName();
```

---

## Example: Running with Custom Reporter

To generate a Mochawesome report:

```sh
npm run test-report
```
The report will be saved in the `mochawesome-report/` directory.

---

## Troubleshooting & Gotchas

- **Chai v5 import issues:**
  - [Chai 5 import error](https://github.com/chaijs/chai/issues/1561): Project uses Chai 4.2 due to compatibility issues with ES module imports.

---

## References

- [Go REST API Documentation](https://gorest.co.in/)
- [Mocha Documentation](https://mochajs.org/)
- [SuperTest Documentation](https://github.com/ladjs/supertest)
- [Chai Documentation](https://www.chaijs.com/)
- [Faker Documentation](https://fakerjs.dev/)
- [Mochawesome Documentation](https://github.com/adamgruber/mochawesome)
- [Source Tutorial on YouTube](https://www.youtube.com/playlist?list=PL6AdzyjjD5HDR2kNRU2dA1C8ydXRAaaBV)
- [Source Tutorial Repository](https://github.com/dilpreetj/JavaScript-API-Automation-Tests)
