import { expect, type Locator, type Page } from "@playwright/test";

export class MainEnPage {
  readonly page: Page;
  readonly pageUri: string;
  readonly pageTitle: string;
  readonly uniqueElementXpath: string;

  constructor(page: Page) {
    this.page = page;
    this.pageUri = 'https://en.wikipedia.org/wiki/Wikipedia:Main';
    this.pageTitle = 'Wikipedia, the free encyclopedia';
    this.uniqueElementXpath = '//span[@id="Welcome_to_Wikipedia"]';
  }

  async isPageLoaded() {
    expect(this.page.url()).toBe(this.pageUri);
    await expect(this.page).toHaveTitle(this.pageTitle);
    await expect(this.page.locator(this.uniqueElementXpath)).toBeVisible();
  }
}
