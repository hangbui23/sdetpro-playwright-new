import { Locator } from "@playwright/test";

export default abstract class BasePaymentInfoComponent {
    public static readonly SELECTOR = '#opc-payment_info';
    private CONTINUE_BUTTON = "input[value='Continue']";

    constructor(protected component: Locator) {
        this.component = component;
    }

   abstract processPayment(data?:any): Promise<void>;

   public async clickOnContinueButton(): Promise<void> {
       await this.component.locator(this.CONTINUE_BUTTON).click();
   }
}