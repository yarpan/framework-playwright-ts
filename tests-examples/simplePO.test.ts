import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/homePage";
import { ContactsPage } from "../pages/contactsPage";

test('Open home page', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await homePage.isPageLoaded();
})

test('Show validation on sending empty feedback', async ({ page }) => {
    const contactPage = new ContactsPage(page);
    await contactPage.goto();
    await contactPage.isPageLoaded();
    await contactPage.clickButtonFeedback();
    await contactPage.checkEmptyFeedbackValidation();
})


