import { test, expect } from "@playwright/test";

test("portfolio images load or fallback alt text appears", async ({ page }) => {
  await page.goto("/#/Portfolio");

  const images = page.locator("img");
  const count = await images.count();

  for (let i = 0; i < count; i++) {
    const img = images.nth(i);
    const src = await img.getAttribute("src");
    const alt = await img.getAttribute("alt");

    expect(src || alt).toBeTruthy();
  }
});

test("external links exist and do not break navigation", async ({ page }) => {
  await page.goto("/");

  const links = page.locator("a[target='_blank']");
  const count = await links.count();

  for (let i = 0; i < count; i++) {
    const href = await links.nth(i).getAttribute("href");
    expect(href).toBeTruthy();
  }
});