import { test, expect } from "@playwright/test";
import { LandingPage } from "../pages/landing";

test("Check if LandingPage loading", async ({ page }) => {
  const landingPage = new LandingPage(page);
  await landingPage.goto();
  await landingPage.isPageLoaded();
  //await expect(page).toHaveScreenshot();
  //await expect(page).toHaveScreenshot({ fullPage: true });
  //xpect(await page.screenshot({ fullPage: true })).toMatchSnapshot('./snapshots/landing-page-chromium-win32.png');

});

test("Check Links for different locales - DataDriven by Array ", async ({ page }) => {
  const landingPage = new LandingPage(page);
  for (let i = 0; i < landingPage.localeData.length; i++) {
    await test.step(`Check for ${landingPage.localeData[i][0]} language`, async () => {
      await landingPage.goto();
      await landingPage.openLink(i);
      await landingPage.checkOpenedLink(i);
    });
  }
});
