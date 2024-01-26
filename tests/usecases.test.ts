import { expect, test } from "@playwright/test";
import { CasesPage } from "../pages/casesPage";
import testSuite from "../pages/casesPageData.json";

for (const testCase of testSuite) {
  test(testCase.testName, async ({ page }) => {
    console.log("Test Case: " + testCase.testName);
    const casesPage = new CasesPage(page);
    await casesPage.goto();
    await casesPage.isPageLoaded();
    await casesPage.openSubPage(testCase.subLocator);
    await casesPage.isSubPageLoaded(
      testCase.subUrl,
      testCase.subTitle,
      testCase.uniqueText
    );
  });
}
