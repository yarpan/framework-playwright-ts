import { test, expect } from "@playwright/test";
import { LandingPage } from "./wikiEngPage";

const baseURL = 'https://www.wikipedia.org/'
const englishButton = '//a[@id="js-link-box-en"]'
const loginButton = '//li[@id="pt-login-2"]'
const fieldUsername = '//input[@id="wpName1"]'
const fieldPassword = '//input[@id="wpPassword1"]'
const buttonSubmit = '//button[@id="wpLoginAttempt"]'

test.beforeEach(async ({ page }) => {
    await page.goto(baseURL);
});

test.describe('login suite', async () => {

    test("login with correct credentials", async ({ page }) => {
        const landingPage = new LandingPage(page);
        await landingPage.goto();
        await expect(page).toHaveTitle(/Wikipedia/);
        await page.locator(englishButton).click()
        await page.locator(loginButton).click()
        await page.locator(fieldUsername).fill('test@gmail.com')
        await page.locator(fieldPassword).fill('password')
        await page.locator(buttonSubmit).click()
        //check element after login
        await expect(page.getByLabel('Log in').locator('div').filter({ hasText: 'Incorrect username or' }).nth(3)).toBeVisible
    })

    test("login with incorrect login", async ({ page }) => {
        await page.goto(baseURL);
        await expect(page).toHaveTitle(/Wikipedia/);
        await page.locator(englishButton).click()
        await page.locator(loginButton).click()
        await page.locator(fieldUsername).fill('test@gmail.com')
        await page.locator(fieldPassword).fill('password')
        await page.locator(buttonSubmit).click()
        //check element after login
        await expect(page.getByLabel('Log in').locator('div').filter({ hasText: 'Incorrect username or' }).nth(3)).toBeVisible
    })

    test("login with incorrect password", async ({ page }) => {
        await page.goto(baseURL);
        await expect(page).toHaveTitle(/Wikipedia/);
        await page.locator(englishButton).click()
        await page.locator(loginButton).click()
        await page.locator(fieldUsername).fill('test@gmail.com')
        await page.locator(fieldPassword).fill('password')
        await page.locator(buttonSubmit).click()
        //check element after login
        await expect(page.getByLabel('Log in').locator('div').filter({ hasText: 'Incorrect username or' }).nth(3)).toBeVisible
    })

})
