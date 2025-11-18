import test, { expect } from "@playwright/test";
import { CUSTOMER_SERVICE, INFORMATION } from "../utilities/FooterInfo";
import PageGeneratorManager from "../PageGeneratorManager/pageGeneratorManager";

test.describe('Footer Component', () => {
    test('Verify HomePage Footer Componnets', async ({ page }) => {
        await page.goto('https://demowebshop.tricentis.com/');
        const homePage = PageGeneratorManager.getHomePage(page);
        const inforColumn = homePage.footer.InformationColumnComponnent();
        const customerComlun = homePage.footer.CustomerServiceColumnComponnent();
        const allInfor = await inforColumn.getAllLinks();
        const allCustomer = await customerComlun.getAllLinks();
        console.log(allInfor);
        console.log(allCustomer);
        expect(allInfor).toEqual(INFORMATION)
        expect(allCustomer).toEqual(CUSTOMER_SERVICE)
    });

    test('Verify Electronic Footer Componnets', async ({ page }) => {
        await page.goto('https://demowebshop.tricentis.com/electronics');
        const electronicPage = PageGeneratorManager.getElectronicPage(page);
        const inforColumn = electronicPage.footer.InformationColumnComponnent();
        const customerComlun = electronicPage.footer.CustomerServiceColumnComponnent();
        const allInfor = await inforColumn.getAllLinks();
        const allCustomer = await customerComlun.getAllLinks();
        console.log(allInfor);
        console.log(allCustomer);
        expect(allInfor).toEqual(INFORMATION)
        expect(allCustomer).toEqual(CUSTOMER_SERVICE)
    });

     test('Verify Electronic Footer Component by difference way', async ({ page }) => {
        await page.goto('https://demowebshop.tricentis.com/electronics');
        let footerFlow = PageGeneratorManager.getFooterFlow(page)
        await footerFlow.verifyFooter("Electronic");
    });
});