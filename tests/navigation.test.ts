import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/homePage";
import { WhatsPage } from "../pages/whatsPage";
import { CasesPage } from "../pages/casesPage";
import { TemplatesPage } from "../pages/templatesPage";
import { BlogPage } from "../pages/blogPage";
import { TeamPage } from "../pages/teamPage";
import { ContactsPage } from "../pages/contactsPage";

test('Open Home page', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await homePage.isPageLoaded();
})

test('Open page WhatsPlatma from menu', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await homePage.clickMenuItem(homePage.mainMenu.item1);

    const whatsPage = new WhatsPage(page);
    await whatsPage.isPageLoaded();
})

test('Open page UseCases from menu', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await homePage.clickMenuItem(homePage.mainMenu.item2);

    const casesPage = new CasesPage(page);
    await casesPage.isPageLoaded();
})

test('Open page Templates from menu', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await homePage.clickMenuItem(homePage.mainMenu.item3);

    const templatesPage = new TemplatesPage(page);
    await templatesPage.isPageLoaded();
})

test('Open page Blog from menu', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await homePage.clickMenuItem(homePage.mainMenu.item4);

    const blogPage = new BlogPage(page);
    await blogPage.isPageLoaded();
})

test('Open page Team from menu', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await homePage.clickMenuItem(homePage.mainMenu.item5);

    const teamPage = new TeamPage(page);
    await teamPage.isPageLoaded();
})

test('Open page ContactUs from menu', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await homePage.clickMenuItem(homePage.mainMenu.item6);

    const contactPage = new ContactsPage(page);
    await contactPage.isPageLoaded();
})