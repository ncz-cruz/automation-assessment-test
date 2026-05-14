import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class SignupPage extends BasePage {
  readonly titleMrRadio: Locator;
  readonly passwordInput: Locator;
  readonly daysSelect: Locator;
  readonly monthsSelect: Locator;
  readonly yearsSelect: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly companyInput: Locator;
  readonly address1Input: Locator;
  readonly countrySelect: Locator;
  readonly stateInput: Locator;
  readonly cityInput: Locator;
  readonly zipcodeInput: Locator;
  readonly mobileNumberInput: Locator;
  readonly createAccountButton: Locator;
  readonly accountCreatedMessage: Locator;

  constructor(page: Page) {
    super(page, '/signup');
    this.titleMrRadio = page.locator('#id_gender1');
    this.passwordInput = page.locator('[data-qa="password"]');
    this.daysSelect = page.locator('[data-qa="days"]');
    this.monthsSelect = page.locator('[data-qa="months"]');
    this.yearsSelect = page.locator('[data-qa="years"]');
    this.firstNameInput = page.locator('[data-qa="first_name"]');
    this.lastNameInput = page.locator('[data-qa="last_name"]');
    this.companyInput = page.locator('[data-qa="company"]');
    this.address1Input = page.locator('[data-qa="address"]');
    this.countrySelect = page.locator('[data-qa="country"]');
    this.stateInput = page.locator('[data-qa="state"]');
    this.cityInput = page.locator('[data-qa="city"]');
    this.zipcodeInput = page.locator('[data-qa="zipcode"]');
    this.mobileNumberInput = page.locator('[data-qa="mobile_number"]');
    this.createAccountButton = page.locator('[data-qa="create-account"]');
    this.accountCreatedMessage = page.locator('[data-qa="account-created"]');
  }

  async fillDetailsAndCreateAccount(data: any) {
    await this.titleMrRadio.check();
    await this.passwordInput.fill(data.password);
    await this.daysSelect.selectOption(data.day);
    await this.monthsSelect.selectOption(data.month);
    await this.yearsSelect.selectOption(data.year);
    
    await this.firstNameInput.fill(data.firstName);
    await this.lastNameInput.fill(data.lastName);
    await this.companyInput.fill(data.company);
    await this.address1Input.fill(data.address);
    await this.countrySelect.selectOption(data.country);
    await this.stateInput.fill(data.state);
    await this.cityInput.fill(data.city);
    await this.zipcodeInput.fill(data.zipcode);
    await this.mobileNumberInput.fill(data.mobileNumber);
    
    await this.createAccountButton.click();
  }
}
