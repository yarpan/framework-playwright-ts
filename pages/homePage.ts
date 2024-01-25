import { expect, type Locator, type Page } from "@playwright/test";

const pageUri = "https://platma.com/";
const pageTitle = "PLATMA - an extreme no-code platform to create IT solutions";
const uniqueElementXpath = "//div[@class='header_logo']";
const buttonMenuXpath = "//ul[@id='menu-main-menu']//*[contains(text(),'";

enum mainMenu {
  item1 = "What’s Platma",
  item2 = "Use cases",
  item3 = "Templates",
  item4 = "Blog",
  item5 = "Team",
  item6 = "Contacts us"
}

const isValueInEnum = isValueInStringEnum(mainMenu);
function isValueInStringEnum<E extends string>(strEnum: Record<string, E>) {
  const enumValues = Object.values(strEnum) as string[];
  return (value: string): value is E => enumValues.includes(value);
}

export class HomePage {
  static readonly mainMenu = mainMenu;
  readonly mainMenu = HomePage.mainMenu;
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
    await expect(this.page.locator(uniqueElementXpath)).toBeVisible();
  }

  async clickMenuItem(item: string) {
    const buttonMenu = this.page.locator(buttonMenuXpath + item + "')]");
    expect(isValueInEnum(item)).toBeTruthy();
    await expect(buttonMenu).toBeVisible();
    await buttonMenu.click();
  }
}