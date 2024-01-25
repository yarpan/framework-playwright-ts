import { expect, type Locator, type Page } from '@playwright/test';

const pageUri = "https://platma.com/team/";
const pageTitle = "PLATMA professional team is here to enhance your business";
const uniqueElementXpath = "(//div[@class='wrapper_team'])[1]";

export class TeamPage {
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