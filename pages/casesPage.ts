import { expect, type Locator, type Page } from '@playwright/test';

const pageUri = "https://platma.com/cases/";
const pageTitle = "Cases - platma";
const urlSubPageBuildingRobustWebApp = pageUri + "building-robust-web-applications-best-practices-and-tips/";
const titleSubPageBuildingRobustWebApp = "Building Robust Web Applications: Best Practices and Tips - platma";
const urlSubPageOptimizingBusPro = pageUri + "optimizing-business-processes-with-workflow-builders/";
const titleSubPageOptimizingBusPro = "Optimizing Business Processes with Workflow Builders - platma";

export class CasesPage {
    readonly page: Page;
    readonly pageUniqueElementXpath: Locator;
    readonly linkSubPageBuildingRobustWebApp: Locator;
    readonly uniqeElementSubPageBuildingRobustWebApp: Locator;
    readonly linkSubPageOptimizingBusPro: Locator;
    readonly uniqeElementSubPageOptimizingBusPro: Locator;

    constructor(page: Page) {
        this.page = page;
        this.pageUniqueElementXpath = page.locator("//div[@class='header_logo']");
        this.linkSubPageBuildingRobustWebApp = page.locator("(//a[@title='Building Robust Web Applications: Best Practices and Tips'])[2]");
        this.uniqeElementSubPageBuildingRobustWebApp = page.locator("//div[text()='Web application development']");
        this.linkSubPageOptimizingBusPro = page.locator("(//a[@title='Optimizing Business Processes with Workflow Builders'])[2]");
        this.uniqeElementSubPageOptimizingBusPro = page.locator("//div[text()='WorkFlow builder']");
    }

    async goto() {
        await this.page.goto(pageUri);
    }

    async isPageLoaded() {
        expect(this.page.url()).toBe(pageUri);
        await expect(this.page).toHaveTitle(pageTitle);
        await expect(this.pageUniqueElementXpath).toBeVisible();
    }

    async clickSubPageBuildingRobustWebApp() {
        await expect(this.linkSubPageBuildingRobustWebApp).toBeVisible();
        await this.linkSubPageBuildingRobustWebApp.click();
    }

    async isSubPageLoadedBuildingRobustWebApp() {
        await expect(this.page.url()).toBe(urlSubPageBuildingRobustWebApp);
        await expect(this.page).toHaveTitle(titleSubPageBuildingRobustWebApp);
        await expect(this.uniqeElementSubPageBuildingRobustWebApp).toBeVisible();
    }

    async clickSubPageOptimizingBusProc() {
        await expect(this.linkSubPageOptimizingBusPro).toBeVisible();
        await this.linkSubPageOptimizingBusPro.click();
    }

    async isSubPageLoadedOptimizingBusProc() {
        expect(this.page.url()).toBe(urlSubPageOptimizingBusPro);
        await expect(this.page).toHaveTitle(titleSubPageOptimizingBusPro);
        await expect(this.uniqeElementSubPageOptimizingBusPro).toBeVisible();
    }
    
}