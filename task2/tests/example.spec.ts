import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page.locator('h1')).toContainText(
    'Playwright enables reliable end-to-end testing for modern web apps.',
  );
});
