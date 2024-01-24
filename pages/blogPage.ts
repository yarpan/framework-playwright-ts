import { expect, type Locator, type Page } from '@playwright/test';

const pageUri = "https://platma.com/blog/";
const pageTitle = "Find useful content to know about low/no-code development";
const uniqueElementXpath = "//div[@class='subscribe_info']";

export class BlogPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto(pageUri);
    }

    async isPageLoaded() {
        await expect(this.page.url()).toBe(pageUri);
        await expect(this.page).toHaveTitle(pageTitle);
        await expect(this.page.locator(uniqueElementXpath)).toBeVisible();
    }
}