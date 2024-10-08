import { expect, type Locator, type Page } from "@playwright/test";


export class LandingPage {
  readonly page: Page;
  readonly pageUri: string;
  readonly pageTitle: string;
  readonly pageUniqueElementXpath: string;
  readonly localeData: string | any[];

  constructor(page: Page) {
    this.page = page;
    this.pageUri = "https://www.wikipedia.org/";
    this.pageTitle = "Wikipedia";
    this.pageUniqueElementXpath = '//span[text()="Read Wikipedia in your language "]';

    this.localeData = [
      [
        "English",
        "English — Wikipedia — The Free Encyclopedia",
        "https://en.wikipedia.org/wiki/Main_Page",
        "Wikipedia, the free encyclopedia",
      ],
      [
        "Chineese",
        "Nihongo — ウィキペディア — フリー百科事典",
        "https://ja.wikipedia.org/wiki/%E3%83%A1%E3%82%A4%E3%83%B3%E3%83%9A%E3%83%BC%E3%82%B8",
        "Wikipedia",
      ],
      [
        "German",
        "Deutsch — Wikipedia — Die freie Enzyklopädie",
        "https://de.wikipedia.org/wiki/Wikipedia:Hauptseite",
        "Wikipedia – Die freie Enzyklopädie",
      ],
      [
        "Italian",
        "Italiano — Wikipedia — L'enciclopedia libera",
        "https://it.wikipedia.org/wiki/Pagina_principale",
        "Wikipedia, l'enciclopedia libera",
      ],
      [
        "Spanish",
        "Español — Wikipedia — La enciclopedia libre",
        "https://es.wikipedia.org/wiki/Wikipedia:Portada",
        "Wikipedia, la enciclopedia libre",
      ],
      [
        "Franch",
        "français — Wikipédia — L’encyclopédie libre",
        "https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Accueil_principal",
        "Wikipédia, l'encyclopédie libre",
      ],
      [
        "Japaneese",
        "Zhōngwén — 维基百科 / 維基百科 — 自由的百科全书 / 自由的百科全書",
        "https://zh.wikipedia.org/wiki/Wikipedia:%E9%A6%96%E9%A1%B5",
        "维基百科，自由的百科全书",
      ],
    ];
  }

  async goto() {
    await this.page.goto(this.pageUri);
  }

  async isPageLoaded() {
    expect(this.page.url()).toBe(this.pageUri);
    await expect(this.page).toHaveTitle(this.pageTitle);
    await expect(this.page.locator(this.pageUniqueElementXpath)).toBeVisible();
  }

  async openLink(i: number) {
    const localeTitle = this.localeData[i][1];
    await this.page.locator(`//a[@title="${localeTitle}"]`).click();
  }

  async checkOpenedLink(i: number) {
    expect(this.page.url()).toBe(this.localeData[i][2]);
    await expect(this.page).toHaveTitle(this.localeData[i][3]);
  }
}
