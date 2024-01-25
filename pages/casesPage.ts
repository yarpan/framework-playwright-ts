import { expect, type Locator, type Page } from "@playwright/test";

const pageUri = "https://platma.com/cases/";
const pageTitle = "Cases - platma";
const xpathCommonForSubPages = "//div[@class='case_item_title colored_text']//a[@title='";
const xpathCommonForUniqueText = '//p[contains(text(), "';

export class CasesPage {
  readonly page: Page;
  readonly pageUniqueElementXpath: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pageUniqueElementXpath = page.locator("//div[@class='header_logo']");
  }

  async goto() {
    await this.page.goto(pageUri);
  }

  async isPageLoaded() {
    expect(this.page.url()).toBe(pageUri);
    await expect(this.page).toHaveTitle(pageTitle);
    await expect(this.pageUniqueElementXpath).toBeVisible();
  }

  async openSubPage(subLocator: string) {
    const subPage = this.page.locator(xpathCommonForSubPages + subLocator + "']");
    await expect(subPage).toBeVisible();
    await subPage.click();
  }

  async isSubPageLoaded(subUrl: string, subTitle: string, uniqueText: string) {
    expect(this.page.url()).toBe(pageUri + subUrl);
    await expect(this.page).toHaveTitle(subTitle);
    const uniqeElement = this.page.locator(xpathCommonForUniqueText + uniqueText + '")]');
    console.log('uniqeElement: '+ uniqeElement);
    await expect(uniqeElement).toBeVisible();
  }
}
