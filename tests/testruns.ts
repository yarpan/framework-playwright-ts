import {test, expect} from "@playwright/test";

[
    {a: 1, b: 1, expected: 2},
    {a: 1, b: 2, expected: 3},
    {a: 2, b: 1, expected: 3},
].forEach(({a, b, expected}) => {
    test(`given ${a} and ${b} as arguments, returns ${expected}`, ({page}) => {
        expect(a + b).toEqual(expected);
    })
});


const testCases = [
    ['JohnDeere', 'sf#4rdw'],
    ['BillBates', 'fdkco#$5'],
    ['PeterPon', 'slkfc%$er'],
];


for (const testCase of testCases) {
    test(`Check login for ${testCase[0]}`, async ({page}) => {
        await page.goto("table with data");
        await page.fillLoginForm(testCase[0], testCase[1]);
        await page.locator("buttonSubmit").click();
        expect(page.url()).toBe("homePageUrl");
    });
}

//reassign array members
for (const testCase of testCases) {
    const userName = testCase[0];
    const userPass = testCase[1];
    test(`Check login for ${userName}`, async ({page}) => {
        await page.goto("table with data");
        await page.fillLoginForm(userName, userPass);
        await page.locator("buttonSubmit").click();
        expect(page.url()).toBe("homePageUrl");
    });
}

//use destructuring assignment
for (const [userName, userPass] of testCases) {
    test(`Check login for ${userName}`, async ({page}) => {
        await page.goto("table with data");
        await page.fillLoginForm(userName, userPass);
        await page.locator("buttonSubmit").click();
        expect(page.url()).toBe("homePageUrl");
    });
}


