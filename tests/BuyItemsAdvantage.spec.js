import { test, expect } from '@playwright/test';

test('Compra en advantage @Compra', async ({ page }) => {
  await page.goto('https://www.advantageonlineshopping.com/#/');
  await page.getByRole('link', { name: 'UserMenu' }).getByTitle('USER').click();
  await page.locator('input[name="username"]').click();
  await page.locator('input[name="username"]').fill('Usriotest28');
  await page.locator('input[name="password"]').click();
  await page.locator('input[name="password"]').press('CapsLock');
  await page.locator('input[name="password"]').fill('1Q');
  await page.locator('input[name="password"]').press('CapsLock');
  await page.locator('input[name="password"]').fill('1Q2w3e');
  await page.getByRole('button', { name: 'SIGN IN' }).click();
  await page.getByRole('link', { name: 'SpeakersCategory', exact: true }).click();
  await page.locator('[id="\\32 0"]').click();
  await page.getByRole('button', { name: 'ADD TO CART' }).click();
  await page.getByRole('link', { name: 'dvantage DEMO' }).click();
  await page.getByRole('link', { name: 'HeadphonesCategory', exact: true }).click();
  await page.locator('[id="\\31 4"]').click();
  await page.getByRole('button', { name: 'ADD TO CART' }).click();
  await page.getByRole('button', { name: 'CHECKOUT ($309.98)' }).click();
  await page.getByRole('button', { name: 'NEXT' }).click();
  await page.getByRole('button', { name: 'PAY NOW' }).click();
  await page.getByText('Thank you for buying with Advantage').click();
});