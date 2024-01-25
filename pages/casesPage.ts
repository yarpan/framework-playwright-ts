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

  async openSubPage(sub_locator: string) {
    const subPage = this.page.locator(xpathCommonForSubPages + sub_locator + "']");
    await expect(subPage).toBeVisible();
    await subPage.click();
  }

  async isSubPageLoaded(sub_url: string, sub_title: string, unique_text: string) {
    expect(this.page.url()).toBe(pageUri + sub_url);
    await expect(this.page).toHaveTitle(sub_title);
    const uniqeElement = this.page.locator(xpathCommonForUniqueText + unique_text + '")]');
    console.log('uniqeElement: '+ uniqeElement);
    await expect(uniqeElement).toBeVisible();
  }
}
