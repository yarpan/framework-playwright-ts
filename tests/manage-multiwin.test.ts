import { test, expect, chromium } from "@playwright/test";
import { LandingPage } from "../pages/landing";

test("Page has title", async () => {
    let browser = await chromium.launch();
    let page = await browser.newPage();
    await page.goto('https://www.wikipedia.org')

    expect (await page.title()).toContain("Wikipedia");
    await browser.close();
});


test("Manage two Pages", async () => {
    let browser = await chromium.launch();
    const context = await browser.newContext();
    const pageOne = await context.newPage();
    const pageTwo = await context.newPage();

    await pageOne.goto("https://www.wikipedia.org");
    await pageTwo.goto("https://playwright.dev");

    await browser.close();
});


