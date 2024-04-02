
import { test, expect } from './fixtures';

test("Check if LandingPage loading", async ({ page, landingPage }) => {
  await page.screenshot({ path: './screenshots/screenshot.png' });
  await page.screenshot({ path: './screenshots/screenlong.png', fullPage: true });
});

test("Check Links for different locales - DataDriven by Array ", async ({ page, landingPage }) => {
  for (let i = 0; i < landingPage.localeData.length; i++) {
    await test.step(`Check for ${landingPage.localeData[i][0]} language`, async () => {
      await landingPage.goto();
      await landingPage.openLink(i);
      await landingPage.checkOpenedLink(i);
    });
  }
});
