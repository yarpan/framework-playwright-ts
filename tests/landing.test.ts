import { test, expect } from "@playwright/test";
import { LandingPage } from "../pages/landing";

test("Check if LandingPage loading", async ({ page }) => {
  const landingPage = new LandingPage(page);
  await landingPage.goto();
  await landingPage.isPageLoaded();
});

test("Check Links for different locales ", async ({ page }) => {
  const landingPage = new LandingPage(page);
  for (let i = 0; i < landingPage.localeData.length; i++) {
    await test.step(`Check for ${landingPage.localeData[i][0]} language`, async () => {
      await landingPage.goto();
      await landingPage.openLink(i);
      await landingPage.checkOpenedLink(i);
    });
  }
});
