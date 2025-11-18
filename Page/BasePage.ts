import { expect, Page } from "@playwright/test";
import { castNamedParameter, castRestParameter } from "../utilities/StringHelper";
import { INFORMATION } from "../utilities/FooterInfo";
import FooterComponent from "../component/global/footer/FooterComponent";
import HeaderComponent from "../component/global/header/HeaderComponent";

export default class BasePage {
  protected page: Page;
  private readonly SELECTOR_LINK = '//a[text()="%s"]';

  constructor(page: Page) {
    this.page = page;
  }

  public get footer(): FooterComponent {
    const footerLoc = this.page.locator(FooterComponent.SELECTOR);
    return new FooterComponent(footerLoc);
  }

  public get header(): HeaderComponent {
    const headerLoc = this.page.locator(HeaderComponent.SELECTOR);
    return new HeaderComponent(headerLoc);
  }

  public formatLocator(locator: string, ...values: string[]): string {
    return castRestParameter(locator, ...values);
  }

  public formatLocatorByName(locator: string, values: Record<string, string>): string {
    return castNamedParameter(locator, values);
  }

  public getLocator(locatorTemplate: string, ...values: string[]) {
    const locator = this.formatLocator(locatorTemplate, ...values);
    return this.page.locator(locator);
  }

  public async clickOnLink(linkName: string): Promise<void> {
    let link = this.formatLocator(this.SELECTOR_LINK,linkName);
    await this.page.locator(link).click();
  }
}