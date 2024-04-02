import { test, expect } from './fixtures';
import { MainEnPage } from "../pages/main";
import testSuiteBodyLinks from "../pages/contacts.BodyLinks.json";
import testSuiteLeftMenu from "../pages/contacts.LeftMenu.json";

test("Check BackToMainPage Button", async ({ page, contactsPage }) => {
  await contactsPage.clickButtonBack();

  const wikiEnMainPage = new MainEnPage(page);
  await wikiEnMainPage.isPageLoaded();
});

test.describe("Check Body Links - DataDriven by JSON", () => {
  for (const testCase of testSuiteBodyLinks) {
    test(testCase.testName, async ({ page, contactsPage }) => {
      console.log("Test Case: " + testCase.testName);
      await contactsPage.validateLink(testCase.linkLocator, testCase.linkUri);
    });
  }
});

test.describe("Check Left Menu Items - DataDriven by JSON", () => {
  for (const testCase of testSuiteLeftMenu) {
    test(testCase.testName, async ({ page, contactsPage }) => {
      console.log("Test Case: " + testCase.testName);
      await contactsPage.openSubPage(testCase.subPageLocator);
      await contactsPage.isSubPageLoaded(
        testCase.subPageUrl,
        testCase.subPageTitle,
        testCase.subPageUniqueText
      );
    });
  }
});
