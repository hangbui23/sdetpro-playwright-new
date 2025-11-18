import { defineConfig, expect, Page, test } from '@playwright/test';
import HomePage from '../Page/HomePage';
import {INFORMATION,CUSTOMER_SERVICE,MY_ACCOUNT,FOLLOW_US} from '../utilities/FooterInfo';

test.describe('Demo Web Shop', () => {
    test('Verify Footer Text', async ({ page }) => {
       let BASE_URL = 'https://demowebshop.tricentis.com';
        await page.goto(BASE_URL);

       let homePage = new HomePage(page);
       let footerText = await homePage.footer.getFooterText();
       expect(footerText).toContain("Powered by nopCommerce");
       
       let infos = await homePage.footer.getAllInfoInColumnSection('INFORMATION');
        expect(infos).toEqual(INFORMATION);

        let customerServices = await homePage.footer.getAllInfoInColumnSection('CUSTOMER SERVICE');
        expect(customerServices).toEqual(CUSTOMER_SERVICE);

        let myAccount = await homePage.footer.getAllInfoInColumnSection('MY ACCOUNT');
        expect(myAccount).toEqual(MY_ACCOUNT);

         let followUs = await homePage.footer.getAllInfoInColumnSection('FOLLOW US');
        expect(followUs).toEqual(FOLLOW_US);

        await homePage.clickOnLink(INFORMATION[0].text);
        expect(page.url()).toBe(BASE_URL + INFORMATION[0].href);

        await page.goBack();
        
        await homePage.clickOnLink(INFORMATION[1].text);
        expect(page.url()).toBe(BASE_URL + INFORMATION[1].href);
    });

     test('Verify Product Items', async ({ page }) => {
        await page.goto('https://demowebshop.tricentis.com/');
       let homePage = new HomePage(page);
       let pageBody = homePage.PageBodyComponent();
        let productItemList = await pageBody.productItemsList();
      for(const productItem of productItemList){
        let productTitle = await productItem.getProductTitle();
        let productPrice = await productItem.getProductPrice();
        console.log(`Product Title: ${productTitle} | Product Price: ${productPrice}`);
      }
    });
})