import { Locator } from "@playwright/test";
import { paymentData } from "../test_data/PaymentData";
import BasePaymentInfoComponent from "./BasePaymentInfoComponent";

export default class POPaymentInfomationComponent extends BasePaymentInfoComponent{
    
    private PO ='#PurchaseOrderNumber';

    async processPayment(): Promise<void> {
        await this.component.locator(this.PO).fill(paymentData.purchaseOrder.poNumber);
        this.clickOnContinueButton();
    }
}