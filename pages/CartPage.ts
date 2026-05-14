import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class CartPage extends BasePage {
  constructor(page: Page) {
    super(page, '/view_cart');
  }

  async getCartItemRow(productId: string): Promise<Locator> {
    return this.page.locator(`#product-${productId}`);
  }

  async getCartItemQuantity(productId: string): Promise<number> {
    const row = await this.getCartItemRow(productId);
    const qtyText = await row.locator('.cart_quantity button').innerText();
    return parseInt(qtyText, 10);
  }

  async getCartItemPrice(productId: string): Promise<number> {
    const row = await this.getCartItemRow(productId);
    const priceText = await row.locator('.cart_price p').innerText();
    // Assuming format "Rs. 500"
    return parseFloat(priceText.replace(/[^0-9]/g, ''));
  }

  async getCartItemTotal(productId: string): Promise<number> {
    const row = await this.getCartItemRow(productId);
    const totalText = await row.locator('.cart_total_price').innerText();
    return parseFloat(totalText.replace(/[^0-9]/g, ''));
  }
}
