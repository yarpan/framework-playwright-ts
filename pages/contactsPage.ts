import { expect, type Locator, type Page } from '@playwright/test';

const pageUri = "https://platma.com/contacts/";
const pageTitle = "Still have questions? Contact us";
const uniqueElementXpath = "//div[text()='Our addresses:']";
const validationErrorClass = "inputForm error";

export class ContactsPage {
    readonly page: Page;
    readonly sendFeedbackButton: Locator;
    readonly inputNameFieldLocator: Locator;
    readonly inputEmailFieldLocator: Locator;
    readonly inputTextFieldLocator: Locator;

    constructor(page: Page) {
        this.page = page;
        this.sendFeedbackButton = page.locator("//button[contains(text(),'Send a feedback')]");
        this.inputNameFieldLocator = page.locator("input[name='name']");
        this.inputEmailFieldLocator = page.locator("input[name='email']");
        this.inputTextFieldLocator = page.locator("input[name='phone']");    
    }

    async goto() {
        await this.page.goto(pageUri);
    }

    async isPageLoaded() {
        expect(this.page.url()).toBe(pageUri);
        await expect(this.page).toHaveTitle(pageTitle);
        await expect(this.page.locator(uniqueElementXpath)).toBeVisible();
    }

    async clickButtonFeedback() {
        await expect(this.sendFeedbackButton).toBeVisible();
        await this.sendFeedbackButton.click();
    }

    async checkEmptyFeedbackValidation() {
        await expect(this.inputNameFieldLocator).toHaveClass(validationErrorClass);
        await expect(this.inputEmailFieldLocator).toHaveClass(validationErrorClass);  
        await expect(this.inputTextFieldLocator).toHaveClass(validationErrorClass);
    }
}