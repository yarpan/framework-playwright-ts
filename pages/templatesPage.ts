import { expect, type Locator, type Page } from '@playwright/test';

const pageUri = "https://platma.com/platmas-ready-made-templates/";
const pageTitle = "PLATMA’s Ready-Made Templates - platma";
const uniqueElementXpath = "//div[@class='templates_hero_list']";;

export class TemplatesPage {
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