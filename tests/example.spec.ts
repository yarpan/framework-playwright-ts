import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});


test.beforeEach(async ({ page }) => {
  await page.goto('https://www.wikipedia.org/');
});

test.describe('Wiki tests', () => {
  test('check Wiki title', async ({ page }) => {
    await expect(page).toHaveTitle(/Wikipedia/);
  });

    test('check English version', async ({ page }) => {
      await expect(page).toHaveTitle(/Wikipedia/);
    })



})
