import { test, expect } from "@playwright/test";
import { ContactUs } from "../po/contactUs";
import { WikiEnMainPage } from "../po/wikiEnMainPage";
import testSuiteBodyLinks from "../po/contactUs.BodyLinks.json";
import testSuiteLeftMenu from "../po/contactUs.LeftMenu.json";

test("Check BackToMainPage Button", async ({ page }) => {
  const contactUsPage = new ContactUs(page);
  await contactUsPage.goto();
  await contactUsPage.isPageLoaded();
  await contactUsPage.clickButtonBack();

  const wikiEnMainPage = new WikiEnMainPage(page);
  await wikiEnMainPage.isPageLoaded();
});

test.describe("Check Body Links", () => {
  for (const testCase of testSuiteBodyLinks) {
    test(testCase.testName, async ({ page }) => {
      console.log("Test Case: " + testCase.testName);
      const contactUsPage = new ContactUs(page);
      await contactUsPage.goto();
      await contactUsPage.isPageLoaded();
      await contactUsPage.validateLink(testCase.linkLocator, testCase.linkUri);
    });
  }
});

test.describe("Check Left Menu Items", () => {
  for (const testCase of testSuiteLeftMenu) {
    test(testCase.testName, async ({ page }) => {
      console.log("Test Case: " + testCase.testName);
      const contactUsPage = new ContactUs(page);
      await contactUsPage.goto();
      await contactUsPage.isPageLoaded();

      await contactUsPage.openSubPage(testCase.subPageLocator);
      await contactUsPage.isSubPageLoaded(
        testCase.subPageUrl,
        testCase.subPageTitle,
        testCase.subPageUniqueText
      );
    });
  }
});
