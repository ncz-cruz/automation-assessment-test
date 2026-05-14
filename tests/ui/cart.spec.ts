import { test, expect } from '@playwright/test';
import { ProductsPage } from '../../pages/ProductsPage';
import { CartPage } from '../../pages/CartPage';

test.describe('Scope 2: Cart and Order Summary', () => {
  test('should accurately calculate total price when adding 4 units of a product', async ({ page }) => {
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);

    const targetProductId = '1'; // Blue Top
    const quantityToAdd = 4;

    await productsPage.navigate();
    
    // Add product to cart with quantity
    await productsPage.addProductToCart(targetProductId, quantityToAdd);
    
    // View cart
    await productsPage.viewCart();

    // Validations
    const qty = await cartPage.getCartItemQuantity(targetProductId);
    expect(qty).toBe(quantityToAdd);

    const price = await cartPage.getCartItemPrice(targetProductId);
    const expectedTotal = price * quantityToAdd;

    const actualTotal = await cartPage.getCartItemTotal(targetProductId);
    expect(actualTotal).toBe(expectedTotal);
  });
});
