import { test, expect } from "@playwright/test";
import { ContactsPage } from "../pages/contactsPage";
import { CasesPage } from "../pages/casesPage";

test('Show validation on sending empty feedback', async ({ page }) => {
    const contactPage = new ContactsPage(page);
    await contactPage.goto();
    await contactPage.isPageLoaded();
    await contactPage.clickButtonFeedback();
    await contactPage.checkEmptyFeedbackValidation();
})

test('Use case - Web Application', async ({ page }) => {
    const casesPage = new CasesPage(page);
    await casesPage.isPageLoaded();
    await casesPage.clickSubPageBuildingRobustWebApp();
    await casesPage.isSubPageLoadedBuildingRobustWebApp();
})

test('Use case - Workflow builder', async ({ page }) => {
    const casesPage = new CasesPage(page);
    await casesPage.isPageLoaded();
    await casesPage.clickSubPageOptimizingBusProc();
    await casesPage.isSubPageLoadedOptimizingBusProc();
})
