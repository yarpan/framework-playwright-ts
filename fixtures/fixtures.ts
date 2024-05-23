import { test as base } from '@playwright/test';
import { LandingPage } from '../page-object/landingPage';
import { ContactsPage } from '../page-object/contactsPage';

type MyFixtures = {
  landingPage: LandingPage;
  contactsPage: ContactsPage;
};

export const test = base.extend<MyFixtures>({
  landingPage: async ({ page }, use) => {
    const landingPage = new LandingPage(page);
    await landingPage.goto();
    await landingPage.isPageLoaded();

    await use(landingPage);
  },

  contactsPage: async ({ page }, use) => {
    const contactsPage = new ContactsPage(page);
    await contactsPage.goto();
    await contactsPage.isPageLoaded();

    await use(contactsPage);
  },
});

export { expect } from '@playwright/test';