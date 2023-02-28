import { test, expect } from '@playwright/test';

test('Comprar articulo en el sitio web de @Advantage', async ({ page }) => {
  await page.goto('https://www.advantageonlineshopping.com/#/');
  await page.getByRole('link', { name: 'TabletsCategory', exact: true }).click();
  await page.locator('[id="\\31 8"]').click();
  await page.getByRole('button', { name: 'ADD TO CART' }).click();
  await page.getByRole('button', { name: 'CHECKOUT ($479.00)' }).click();
  await page.locator('label').filter({ hasText: 'TOTAL $479.00' }).locator('span').click();
  
});