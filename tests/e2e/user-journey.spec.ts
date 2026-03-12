import { test, expect } from '@playwright/test';

test('user journey from home to contact form submission', async ({ page }) => {

  // Start at Home page
  await page.goto('/');
  await expect(page.locator('body')).toBeVisible();

  // Navigate to About
  await page.click('text=About');
  await expect(page.locator('body')).toBeVisible();

  // Navigate to Developers
  await page.click('text=Developers');
  await expect(page.locator('body')).toBeVisible();

  // Navigate to Portfolio
  await page.click('text=Portfolio');
  await expect(page.locator('body')).toBeVisible();

  // Navigate to Contact
  await page.click('text=Contact');

  // Wait for the contact form to appear
  await expect(page.locator('form')).toBeVisible();

  // Mock API response for form submission
  await page.route('**/api/contact', async (route) => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({ success: true })
    });
  });

  // Fill the form fields (first input, second input, textarea)
  const inputs = page.locator('input');
  const message = page.locator('textarea');

  await inputs.nth(0).fill('Test User');
  await inputs.nth(1).fill('test@example.com');
  await message.fill('This is a test message.');

  // Submit form
  await page.locator('button[type="submit"]').click();

  // Verify success UI appears
  await expect(page.locator('text=Thank')).toBeVisible();

});