import { test, expect } from "@playwright/test";
import { ContactsPage } from "../pages/contactsPage";

test('Show validation on sending empty feedback', async ({ page }) => {
    const contactPage = new ContactsPage(page);
    await contactPage.goto();
    await contactPage.isPageLoaded();
    await contactPage.clickButtonFeedback();
    await contactPage.checkEmptyFeedbackValidation();
})