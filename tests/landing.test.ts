import { test, expect } from "@playwright/test";
import { LandingPage } from "../pages/landing";

test.only("Check if LandingPage loading", async ({ page }) => {
  const landingPage = new LandingPage(page);
  await landingPage.goto();
  await landingPage.isPageLoaded();
  //await expect(page).toHaveScreenshot({ fullPage: true });
  expect(await page.screenshot({ fullPage: true })).toMatchSnapshot('./snapshots/landing-page-chromium-win32.png');

});

test.skip("Check Links for different locales ", async ({ page }) => {
  const landingPage = new LandingPage(page);
  for (let i = 0; i < landingPage.localeData.length; i++) {
    await test.step(`Check for ${landingPage.localeData[i][0]} language`, async () => {
      await landingPage.goto();
      await landingPage.openLink(i);
      await landingPage.checkOpenedLink(i);
    });
  }
});
