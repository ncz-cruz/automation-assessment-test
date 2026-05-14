import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class ProductsPage extends BasePage {
  readonly viewCartLink: Locator;

  constructor(page: Page) {
    super(page, '/products');
    this.viewCartLink = page.locator('a[href="/view_cart"]');
  }

  async addProductToCart(productId: string, quantity: number) {
    // The application has an 'Add to cart' overlay and a product detail page.
    // Easiest is to go to product details and add quantity there.
    await this.page.goto(`/product_details/${productId}`);
    
    const quantityInput = this.page.locator('#quantity');
    await quantityInput.fill(quantity.toString());
    
    const addToCartButton = this.page.locator('button.cart');
    await addToCartButton.click();
    
    // Wait for the modal and click continue shopping
    const continueShoppingButton = this.page.locator('button.close-modal, .modal-footer button');
    await continueShoppingButton.waitFor({ state: 'visible' });
    await continueShoppingButton.click();
  }

  async viewCart() {
    // Navigate to cart
    await this.page.goto('/view_cart');
  }
}
