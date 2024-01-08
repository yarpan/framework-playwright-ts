import { test, expect } from "@playwright/test";
const baseUri = 'https://platma.com/';


test.beforeEach(async ({ page }) => {
  //await page.goto(baseUri);
});


test('Open home page', async ({ page }) => {
  await page.goto(baseUri);
  expect(page.url()).toBe(baseUri);
  await expect(page).toHaveTitle("PLATMA - an extreme no-code platform to create IT solutions");
  await expect(page.locator("//div[@class='header_logo']")).toBeVisible();
})



test('Open page Contact us', async ({ page }) => {
  await page.goto(baseUri);
  expect(page.url()).toBe(baseUri);
  const contactUsButtonLocator = page.locator("//ul[@id='menu-main-menu']//*[contains(text(),'Contacts us')]");
  await expect(contactUsButtonLocator).toBeVisible();

  await contactUsButtonLocator.click();
  expect(page.url()).toBe(baseUri + 'contacts/');
  await expect(page).toHaveTitle("Still have questions? Contact us");

  const newPageBannerLocator = page.locator("//div[text()='Our addresses:']");
  await expect(newPageBannerLocator).toBeVisible();
})



test('Show error on sending empty feedback', async ({ page }) => {
  await page.goto(baseUri + 'contacts/');
  expect(page.url()).toBe(baseUri + 'contacts/');

  const sendFeedbackButtonLocator = page.locator("//button[contains(text(),'Send a feedback')]");
  await expect(sendFeedbackButtonLocator).toBeVisible();
  await sendFeedbackButtonLocator.click();

  const inputNameFieldLocator = page.locator('input[name="name"]');
  const inputEmailFieldLocator = page.locator('input[name="email"]');
  const inputTextFieldLocator = page.locator('input[name="phone"]');

  await expect(inputNameFieldLocator).toHaveClass('inputForm error');
  await expect(inputEmailFieldLocator).toHaveClass('inputForm error');
  await expect(inputTextFieldLocator).toHaveClass('inputForm error');
})



test('Use case - Web Application', async ({ page }) => {
  await page.goto(baseUri + 'cases/');
  expect(page.url()).toBe(baseUri + 'cases/');

  const sendFeedbackButtonLocator = page.locator("(//a[@title='Building Robust Web Applications: Best Practices and Tips'])[2]");
  await expect(sendFeedbackButtonLocator).toBeVisible();
  await sendFeedbackButtonLocator.click();

  expect(page.url()).toBe('https://platma.com/cases/building-robust-web-applications-best-practices-and-tips/');
  await expect(page).toHaveTitle("Building Robust Web Applications: Best Practices and Tips - platma");

  const newPageBannerLocator = page.locator("//div[text()='Web application development']");
  await expect(newPageBannerLocator).toBeVisible();
})



test('Use case - Workflow builder', async ({ page }) => {
  await page.goto(baseUri + 'cases/');
  expect(page.url()).toBe(baseUri + 'cases/');

  const sendFeedbackButtonLocator = page.locator("(//a[@title='Optimizing Business Processes with Workflow Builders'])[2]");
  await expect(sendFeedbackButtonLocator).toBeVisible();
  await sendFeedbackButtonLocator.click();

  expect(page.url()).toBe('https://platma.com/cases/optimizing-business-processes-with-workflow-builders/');
  await expect(page).toHaveTitle("Optimizing Business Processes with Workflow Builders - platma");
  const newPageBannerLocator = page.locator("//div[text()='WorkFlow builder']");
  await expect(newPageBannerLocator).toBeVisible();
})







