import { expect, type Locator, type Page } from '@playwright/test';
//TODO
const baseUri = "https://platma.com/team/";
const pageTitle = "PLATMA";
const uniqueElementXpath = "//div[@class='wrapper_team']";

export class HomePage {
    readonly page: Page;
    readonly buttonMenuContact: Locator;
    readonly buttonMenuCases: Locator;

    constructor(page: Page) {
        this.page = page;
        this.buttonMenuContact = page.locator("");
        this.buttonMenuCases = page.locator("");
    }

    async goto() {
        await this.page.goto(baseUri);
    }

    async isPageLoaded() {
        expect(this.page.url()).toBe(baseUri);
        await expect(this.page).toHaveTitle(pageTitle);
        await expect(this.page.locator(uniqueElementXpath)).toBeVisible();
    }

    async clickMenuItemContacts() {
        await expect(this.buttonMenuContact).toBeVisible();
        await this.buttonMenuContact.click();
    }


}