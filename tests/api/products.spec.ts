import { test, expect } from '@playwright/test';

test.describe('Scope 3: API Testing', () => {
  test('should return 200 and valid non-null data for /api/productsList', async ({ request }) => {
    const response = await request.get('/api/productsList');
    
    // Assert status 200
    expect(response.status()).toBe(200);

    // Parse JSON
    // Note: The automationexercise API actually returns HTML when it errors out, 
    // or stringified JSON depending on the endpoint. We will try to parse JSON.
    const bodyText = await response.text();
    let body;
    try {
      body = JSON.parse(bodyText);
    } catch (e) {
      throw new Error('API did not return valid JSON. Body was: ' + bodyText.substring(0, 200));
    }

    // Expect valid data wrapper
    expect(body).toBeDefined();
    expect(body).not.toBeNull();
    
    // Specific assertion based on common API behavior of this site
    // Often this API returns { responseCode: 200, products: [...] }
    if (body.responseCode) {
        expect(body.responseCode).toBe(200);
    }
    
    // Verify products list is present and has items
    expect(body.products).toBeDefined();
    expect(Array.isArray(body.products)).toBeTruthy();
    expect(body.products.length).toBeGreaterThan(0);
    
    // Validate first item is non-null
    const firstProduct = body.products[0];
    expect(firstProduct).not.toBeNull();
    expect(firstProduct.id).toBeDefined();
    expect(firstProduct.name).toBeDefined();
    expect(firstProduct.price).toBeDefined();
  });
});
