import { Locator } from "@playwright/test";
import BasePaymentInfoComponent from "./BasePaymentInfoComponent";

export default class NoPaymentMethodComponent extends BasePaymentInfoComponent{
    
    constructor(component: Locator) {
        super(component);
    }

    public async processPayment(): Promise<void> {
       await this.clickOnContinueButton();
    }
}