import { Page } from "@playwright/test";
import BasePage from "./BasePage";
import PaymentMethodComponent from "../component/checkout/PaymentMethodComponent";

export default class PaymentMethodPage extends BasePage {

    constructor(page:Page) {
        super(page);
    }

    public async PaymentMethod():Promise<PaymentMethodComponent>{
        return new PaymentMethodComponent(this.page.locator(PaymentMethodComponent.SELECTOR));
    }

    public async selectRandomPaymentMethodAndContinue(): Promise<string> {
       const paymentMethodComponent = await this.PaymentMethod();
       const paymentMethodName = await paymentMethodComponent.selectRandomPaymentMethod();
       await paymentMethodComponent.clickOnContinueButton();
       return paymentMethodName;
    }
}