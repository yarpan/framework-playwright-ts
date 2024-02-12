import { test, expect } from "@playwright/test";
import { ContactsPage } from "../pages/contactsPage";

test('Show validation on sending empty feedback', async ({ page }) => {
    const contactPage = new ContactsPage(page);
    await contactPage.goto();
    await contactPage.isPageLoaded();
    await contactPage.clickButtonFeedback();
    await contactPage.checkEmptyFeedbackValidation();

    await new Promise(r => setTimeout(r, 200));
    await page.waitForTimeout(1000);
    

})