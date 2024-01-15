import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/homePage";
import { ContactPage } from "../pages/contactPage";
import { CasesPage } from "../pages/casesPage";

test('Open home page', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await homePage.isPageLoaded();
})

test('Open page Contacts from menu', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await homePage.clickMenuItemContacts();

    const contactPage = new ContactPage(page);
    await contactPage.isPageLoaded();
})

test('Show validation on sending empty feedback', async ({ page }) => {
    const contactPage = new ContactPage(page);
    await contactPage.goto();
    await contactPage.isPageLoaded();
    await contactPage.clickButtonFeedback();
    await contactPage.checkEmptyFeedbackValidation();
})

test('Use case - Web Application', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await homePage.clickMenuItemCases();

    const casesPage = new CasesPage(page);
    await casesPage.isPageLoaded();
    await casesPage.clickSubPageBuildingRobustWebApp();
    await casesPage.isSubPageLoadedBuildingRobustWebApp();
})

test('Use case - Workflow builder', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await homePage.clickMenuItemCases();

    const casesPage = new CasesPage(page);
    await casesPage.isPageLoaded();
    await casesPage.clickSubPageOptimizingBusProc();
    await casesPage.isSubPageLoadedOptimizingBusProc();
})





