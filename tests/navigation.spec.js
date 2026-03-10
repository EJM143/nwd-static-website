const { test, expect } = require('@playwright/test');

test('Navigation loop test for all top-level pages', async ({ page }) => {
  const pages = [
    { name: 'Home', hash: '#/Home' },
    { name: 'Contact', hash: '#/Contact' },
    { name: 'About', hash: '#/About' },
    { name: 'Developers', hash: '#/Developers' },
    { name: 'Portfolio', hash: '#/Portfolio' },
  ];

  // Start on Home
  await page.goto('/#/Home');

  for (const p of pages) {
    // Click the link that matches the route (works even if there are duplicates by text)
    const link = page.locator(`a[href="${p.hash}"]`).first();
    await expect(link, `Link for ${p.name} (${p.hash}) should exist`).toBeVisible();

    const hashRegex = new RegExp(`${p.hash.replace('#', '\\#')}$`);

    await Promise.all([
      page.waitForURL(hashRegex, { timeout: 10000 }),
      link.click(),
    ]);

    // ✅ URL changed
    await expect(page).toHaveURL(hashRegex);

    // ✅ Page rendered content
    await expect(page.getByRole('heading').first()).toBeVisible();
  }
});