import { expect, type Locator, type Page } from '@playwright/test';

const baseUri = "https://platma.com/";
const pageTitle = "PLATMA - an extreme no-code platform to create IT solutions";
const uniqueElementXpath = "//div[@class='header_logo']";

export class HomePage {
    readonly page: Page;
    readonly buttonMenuContact: Locator;
    readonly buttonMenuCases: Locator;

    constructor(page: Page) {
        this.page = page;
        this.buttonMenuContact = page.locator("//ul[@id='menu-main-menu']//*[contains(text(),'Contacts us')]");
        this.buttonMenuCases = page.locator("//ul[@id='menu-main-menu']//*[contains(text(),'Use cases')]");
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

    async clickMenuItemCases(){
        await expect(this.buttonMenuCases).toBeVisible();
        await this.buttonMenuCases.click();
    }

}