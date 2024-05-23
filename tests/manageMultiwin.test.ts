import { test, expect, chromium } from "@playwright/test";

test("Manage two Windows with tho Tabs each", async () => {
    let browser = await chromium.launch();
    const contextOne = await browser.newContext();
    const contextTwo = await browser.newContext();

    const page11 = await contextOne.newPage();
    const page12 = await contextOne.newPage();
    const page21 = await contextTwo.newPage();
    const page22 = await contextTwo.newPage();

    await page11.goto("https://www.wikipedia.org");
    await page12.goto("https://playwright.dev");
    await page21.goto("https://www.google.com");
    await page22.goto("https://amazon.com");

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
    console.log('# number of pages opened' + pages.length);

    await pages[1].close();
    //await page.locator("asd").click();
    let contexts = browser.contexts();
    //let pageOneFirstContext: Page = await contexts[0].pages[0]; 
})
