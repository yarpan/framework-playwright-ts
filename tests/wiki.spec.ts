import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("https://www.wikipedia.org/");
});
test.describe("Wikipedia tests", () => {
  test("chack Wikipedia title", async ({ page }) => {
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Wikipedia/);
  });

  test("check English language", async ({ page }) => {
    await page
      .getByRole("link", { name: "English 6 758 000+ articles" })
      .click();

    await expect(
      page.getByRole("link", { name: "Banner logo Participate in" })
    ).toBeVisible();
    await expect(page.getByText("Welcome to Wikipedia")).toHaveText(
      "Welcome to Wikipedia"
    );
    await expect(page.getByText("Welcome to Wikipedia")).toContainText(
      "Wikipedia"
    );

    let textOfElement = await page
      .getByRole("heading", { name: "1,000,000+ articles" })
      .innerText();
    let splitted = textOfElement.split("+");
    let arrSplittedWithComma = splitted[0].split(",");
    let resultString = arrSplittedWithComma.join('');
    let someNumOfUsers = parseInt(resultString);
    expect(someNumOfUsers).toBeGreaterThanOrEqual(1000000);
  });
});
