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


test("check modal closed", async ({page})=> {
    await page.goto("https://www.phn.sterbc.com/login");
    await page.locator("//a[@id='signUp']").click();

    console.log(await page.locator("//div[@id='online-access']//p[1]").innerText);
    await page.locator("//div[@id='online-access']//button[@class='icon-float']").click();
})


test("check modal actions", async ({page, context, browser})=> {
    await page.goto("https://www.phn.sterbc.com/login");
    await page.locator("//a[@id='signUp']").click();

    let someText = await page
        .locator("//div[@id='online-access']//p[1]")
        .innerText();
    
    await page.locator("//div[@id='online-access']//a").click();
    
    // wait untill context load all tabs
    await page.waitForTimeout(1000);

    let pages = await context.pages();
    console.log(pages.length);

    await pages[1].close();
    await page.locator("asd").click();

    let contexts = await browser.contexts();
    let pageOneFirstContext: Page = await contexts[0].pages[0]; 
})
