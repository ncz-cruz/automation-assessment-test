# Automation Exercise QA Framework

This project is a robust, end-to-end QA automation framework utilizing the Page Object Model (POM) architecture to test the Automation Exercise e-commerce platform.

## Technologies Used
- **Language:** TypeScript
- **Framework:** Playwright Test
- **Test Data Generation:** Faker.js (`@faker-js/faker`)
- **Environment:** Node.js

## How to Install and Run

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation
1. Clone the repository:
   ```bash
   git clone <your-repository-url>
   cd automation-assessment-test
   ```
2. Install the project dependencies:
   ```bash
   npm install
   ```
3. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

### Running Tests
To execute the automated test suites (Registration, Cart, and API):
```bash
npx playwright test
```

To run tests in UI mode (interactive execution):
```bash
npx playwright test --ui
```



> This is a challenge by [Coodesh](https://coodesh.com/)
