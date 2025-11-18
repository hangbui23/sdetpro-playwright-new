import { expect, Page } from "@playwright/test";
import { CUSTOMER_SERVICE, INFORMATION } from "../../utilities/FooterInfo";
import InformationColumnComponent from "../global/footer/InformationColumnComponent";
import PageGeneratorManager from "../../PageGeneratorManager/pageGeneratorManager";

export default class FooterTestFlow {

  constructor(private page: Page) {
    this.page = page;
  }

  public async verifyFooter(pageName: string) {
    let pageObject;
    switch (pageName) {
      case 'Home':
        pageObject = PageGeneratorManager.getHomePage(this.page);
        break;
      case 'Electronic':
        pageObject = PageGeneratorManager.getElectronicPage(this.page);
        break;
      default:
        console.log(`There is no ${pageName}`);
        break;
    }
    if (!pageObject) {
      throw new Error(`Page object for "${pageName}" is undefined.`);
    }
    const infoConlumn: InformationColumnComponent = pageObject.footer.InformationColumnComponnent();
    let allInfo = await infoConlumn.getAllLinks();
    const cusomerColumn = pageObject.footer.CustomerServiceColumnComponnent();
    let allCustomer = await cusomerColumn.getAllLinks();
    await expect(allInfo).toEqual(INFORMATION);
    await expect(allCustomer).toEqual(CUSTOMER_SERVICE);
  }
}