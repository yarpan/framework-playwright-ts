import { expect, test } from "@playwright/test";
import { CasesPage } from "../pages/casesPage";
import testSuite from "../pages/casesPageData.json";

for (const testCase of testSuite) {
  test(testCase.test_name, async ({ page }) => {
    console.log("Test Case: " + testCase.test_name);
    const casesPage = new CasesPage(page);
    await casesPage.goto();
    await casesPage.isPageLoaded();
    await casesPage.openSubPage(testCase.sub_locator);
    await casesPage.isSubPageLoaded(
      testCase.sub_url,
      testCase.sub_title,
      testCase.unique_text
    );
  });
}
