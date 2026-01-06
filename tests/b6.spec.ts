import test, { expect } from "@playwright/test";
import StandardComputer from "../component/computer/StandardComputer";
import ExpensiveComputer from "../component/computer/ExpensiveComputer";
import PageGeneratorManager from "../PageGeneratorManager/pageGeneratorManager";
import { standardComputerData, expensiveComputerData } from "../component/test_data/ComputerData";
import {billingInfo} from "../component/test_data/BillingInfo";


test.describe('Test computer', () => {
  test('Standard computer', async ({ page }) => {
    await page.goto('https://demowebshop.tricentis.com/build-your-own-computer');
    let std = new StandardComputer(page.locator('.product-essential'));
    await std.selectRAM('4GB');
    //await std.clickOnSoftware('Acrobat Reader');
    await page.waitForTimeout(5000)
  })

  test('Expensive computer', async ({ page }) => {
    await page.goto('https://demowebshop.tricentis.com/build-your-own-expensive-computer-2');
    let std = new ExpensiveComputer(page.locator('.product-essential'));
    await std.selectRAM('4GB');
    await page.waitForTimeout(5000)
  })

  test('Standard computer 1', async ({ page }) => {
    await page.goto('https://demowebshop.tricentis.com/build-your-own-computer');
    let detailPage = PageGeneratorManager.getComputerDetailPage(page);
    let std = detailPage.ComputerComponent('standard');
    await std.selectRAM('4GB');
    await std.selectProcessor('2.2 GHz');
    await std.selectHDD('320 GB');
    await std.selectOS('Windows 10');
    await std.selectSoftware(['Acrobat Reader', 'Total Commander']);
    //await std.selectOption('Acrobat Reader');
    await page.waitForTimeout(5000)
  })

  test('Expensive computer 1', async ({ page }) => {
    await page.goto('https://demowebshop.tricentis.com/build-your-own-expensive-computer-2');
    let detailPage = PageGeneratorManager.getComputerDetailPage(page);
    let expensive = detailPage.ComputerComponent('expensive');
    await expensive.selectProcessor('Slow');
    await expensive.selectRAM('4GB');
    //await expensive.selectOption('Office Suite');
    await page.waitForTimeout(5000)
  })

  test('Standard computer 2', async ({ page }) => {
    await page.goto('build-your-own-computer');
    let computerFlow = PageGeneratorManager.getComputerFlow(page, standardComputerData);
    let detailPage = await computerFlow.buildComputer();
    await detailPage.clickOnLink('Shopping cart');
    await expect(page).toHaveURL('/cart');
    let shoppingCartPage = PageGeneratorManager.getShoppingCartPage(page);
    await shoppingCartPage.verifyShoppingCart();
    const signInPage = await shoppingCartPage.ClickTermOfServiceAndCheckout();
    await signInPage.CheckOutAsGuestOrRegister.clickCheckOutAsGuest();
    await expect(page).toHaveURL('/onepagecheckout');
    const checkoutPage = PageGeneratorManager.getCheckOutPage(page);
    await checkoutPage.BillingAddressComponent.fillBillingAddressForm(billingInfo);
    await checkoutPage.BillingAddressComponent.clickContinue();
    await checkoutPage.ShippingAddressComponent.clickOnContinueButton();
    await checkoutPage.ShippingMethodComponent.selectRandomShippingMethodAndContinue();
    const selectedPaymentMethod = await checkoutPage.PaymentMethodComponent.selectRandomPaymentMethodAndContinue();
    const paymentInfoType = await checkoutPage.getPaymentInfo(selectedPaymentMethod);
    await paymentInfoType.processPayment();
    //await paymentInfoType.fillPaymentInfo();
    await page.waitForTimeout(500)
  })

  test('Expensive computer 2', async ({ page }) => {
    await page.goto('build-your-own-expensive-computer-2');
    let computerFlow = PageGeneratorManager.getComputerFlow(page, expensiveComputerData);
    let detailPage =  await computerFlow.buildComputer();
    await detailPage.clickOnLink('Shopping cart');
    await expect(page).toHaveURL('/cart');
    let shoppingCartPage = PageGeneratorManager.getShoppingCartPage(page);
    await shoppingCartPage.verifyShoppingCart();
     const signInPage = await shoppingCartPage.ClickTermOfServiceAndCheckout();
    await signInPage.CheckOutAsGuestOrRegister.clickCheckOutAsGuest();
    await expect(page).toHaveURL('/onepagecheckout');
    const checkoutPage = PageGeneratorManager.getCheckOutPage(page);
    await checkoutPage.BillingAddressComponent.fillBillingAddressForm(billingInfo);
    await checkoutPage.BillingAddressComponent.clickContinue();
    await checkoutPage.ShippingAddressComponent.clickOnContinueButton();
    await checkoutPage.ShippingMethodComponent.selectRandomShippingMethodAndContinue();
    const selectedPaymentMethod = await checkoutPage.PaymentMethodComponent.selectRandomPaymentMethodAndContinue();
    const paymentInfoType = await checkoutPage.getPaymentInfo(selectedPaymentMethod);
    await paymentInfoType.processPayment();
    await checkoutPage.ConfirmOrderComponent.clickConfirmButton();
    await page.waitForTimeout(5000)
  })
});