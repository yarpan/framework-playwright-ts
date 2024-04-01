import { expect, type Locator, type Page } from "@playwright/test";

const pageUri = 'https://en.wikipedia.org/wiki/Wikipedia:Main';
const pageTitle = 'Wikipedia, the free encyclopedia';
const uniqueElementXpath = '//span[@id="Welcome_to_Wikipedia"]';

export class MainEnPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async isPageLoaded() {
    expect(this.page.url()).toBe(pageUri);
    await expect(this.page).toHaveTitle(pageTitle);
    await expect(this.page.locator(uniqueElementXpath)).toBeVisible();
  }
}
