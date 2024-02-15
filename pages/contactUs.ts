import { expect, type Locator, type Page } from "@playwright/test";

const pageUri = "https://en.wikipedia.org/wiki/Wikipedia:Contact_us";
const pageTitle = "Wikipedia:Contact us - Wikipedia";
const pageUniqueElementXpath = '//figure[@class="mw-halign-right"]';
const buttonBackXpath = '//span[@class="mw-ui-button"]';
const xpathCommonForSubPages = '//a[@title="';
const xpathCommonForUniqueText = '//p[contains(text(), "';

export class ContactUs {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto(pageUri);
  }

  async isPageLoaded() {
    expect(this.page.url()).toBe(pageUri);
    await expect(this.page).toHaveTitle(pageTitle);
    await expect(this.page.locator(pageUniqueElementXpath)).toBeVisible();
  }

  async clickButtonBack() {
    const buttonBack = this.page.locator(buttonBackXpath);
    await expect(buttonBack).toBeVisible();
    await buttonBack.click();
  }

  async validateLink(linkLocator: string, linkUri: string) {
    const linkItem = this.page.locator(linkLocator);
    await expect(linkItem).toBeVisible();
    await expect(linkItem).toHaveAttribute("href", linkUri);
    await linkItem.click();
  }

  async openSubPage(subLocator: string) {
    const subPage = this.page.locator(xpathCommonForSubPages + subLocator + '"]');
    await expect(subPage).toBeVisible();
    await subPage.click();
  }

  async isSubPageLoaded(subUrl: string, subTitle: string, uniqueText: string) {
    expect(this.page.url()).toBe(pageUri + subUrl);
    await expect(this.page).toHaveTitle(subTitle);
    const uniqeElement = this.page.locator(xpathCommonForUniqueText + uniqueText + '")]');
    await expect(uniqeElement).toBeVisible();
  }
}
