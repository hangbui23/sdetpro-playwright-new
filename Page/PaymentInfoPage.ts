import { Page } from "@playwright/test";
import BasePage from "./BasePage";
import BasePaymentInfoComponent from "../component/checkout/BasePaymentInfoComponent";
import POPaymentInfomationComponent from "../component/checkout/POPaymentInfomationComponent";
import CreditCartPaymentInformationComponent from "../component/checkout/CreditCartPaymentInformationComponent";
import NoPaymentMethodComponent from "../component/checkout/NoPaymentMethodComponent";

export default class PaymentInfoPage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    public async getPaymentInfo(method: string): Promise<BasePaymentInfoComponent> {
        const paymentInfo = await this.page.locator(BasePaymentInfoComponent.SELECTOR);
        if (method.includes('Cash') || method.includes('Check')) {
            return new NoPaymentMethodComponent(paymentInfo);
        }
        else if (method.includes('Purchase')) {
            return new POPaymentInfomationComponent(paymentInfo);
        }
        else {
            return new CreditCartPaymentInformationComponent(paymentInfo);
        }
    }

    public async processPayment(method: string, paymentData: any): Promise<void> {
        const paymentInfoComponent = await this.getPaymentInfo(method);

        if (method.includes('Purchase')) {
            await paymentInfoComponent.processPayment(paymentData.purchaseOrder);
        }
        else if (method.includes('Credit')) {
            await paymentInfoComponent.processPayment(paymentData.creditCard);
        }
        else {
            await paymentInfoComponent.processPayment(); // Cash / Check
        }
    }
}