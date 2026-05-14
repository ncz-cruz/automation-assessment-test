import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { SignupPage } from '../../pages/SignupPage';
import { faker } from '@faker-js/faker';

test.describe('Scope 1: User Registration', () => {
  test('should successfully register a new user with dynamic data', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const signupPage = new SignupPage(page);

    // Dynamic data generation
    const name = faker.person.fullName();
    const email = faker.internet.email();
    const password = faker.internet.password();

    const userData = {
      password: password,
      day: '15',
      month: '5',
      year: '1990',
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      company: faker.company.name(),
      address: faker.location.streetAddress(),
      country: 'United States',
      state: faker.location.state(),
      city: faker.location.city(),
      zipcode: faker.location.zipCode(),
      mobileNumber: faker.phone.number()
    };

    await loginPage.navigate();
    await expect(page).toHaveTitle(/Automation Exercise/);

    await loginPage.startSignup(name, email);
    
    // Assert we are on the signup details page
    await expect(page.getByText('Enter Account Information')).toBeVisible();

    // Fill form and create account
    await signupPage.fillDetailsAndCreateAccount(userData);

    // Validate successful registration
    await expect(signupPage.accountCreatedMessage).toBeVisible();
    await expect(signupPage.accountCreatedMessage).toHaveText('Account Created!');
  });
});
