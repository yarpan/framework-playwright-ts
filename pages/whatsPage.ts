import { expect, type Locator, type Page } from '@playwright/test';

const pageUri = "https://platma.com/whats-platma/";
const pageTitle = "PLATMA allows you to create IT solutions fast and easy";
const uniqueElementXpath = "(//div[@class='whats_points_item_point_title'])[1]";

export class WhatsPage {
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
}