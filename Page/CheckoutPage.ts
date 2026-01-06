import { Page } from "@playwright/test";
import BasePage from "./BasePage";
import BillingAddressComponent from "../component/checkout/BillingAddressComponent";
import ShippingAddressComponent from "../component/checkout/ShippingAddressComponent";
import ShippingMethodComponent from "../component/checkout/ShippingMethodComponent";
import PaymentMethodComponent from "../component/checkout/PaymentMethodComponent";
import ConfirmOrderComponent from "../component/checkout/ConfirmOrderComponent";
import BasePaymentInfoComponent from "../component/checkout/BasePaymentInfoComponent";
import POPaymentInfomationComponent from "../component/checkout/POPaymentInfomationComponent";
import CreditCartPaymentInformationComponent from "../component/checkout/CreditCartPaymentInformationComponent";
import NoPaymentMethodComponent from "../component/checkout/NoPaymentMethodComponent";

export default class CheckoutPage extends BasePage  {
    // Implementation of CheckoutPage methods and properties

    constructor(page:Page) {
        super(page);
    }

    public get BillingAddressComponent(): BillingAddressComponent{
        const loc = this.page.locator(BillingAddressComponent.SELECTOR);
        return new BillingAddressComponent(loc);
    }

    public get ShippingAddressComponent(): ShippingAddressComponent{
        const loc = this.page.locator(ShippingAddressComponent.SELECTOR);
        return new ShippingAddressComponent(loc);
    }

    public get ShippingMethodComponent(): ShippingMethodComponent{
        const loc = this.page.locator(ShippingMethodComponent.SELECTOR);
        return new ShippingMethodComponent(loc);
    }

    public get PaymentMethodComponent(): PaymentMethodComponent{
        const loc = this.page.locator(PaymentMethodComponent.SELECTOR);
        return new PaymentMethodComponent(loc);
    }

    /**
     * Get payment info component based on the selected payment method
     */
    public async getPaymentInfo(method: string): Promise<BasePaymentInfoComponent> {
        const paymentInfo = this.page.locator(BasePaymentInfoComponent.SELECTOR);
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

    public get ConfirmOrderComponent(): ConfirmOrderComponent{
        const loc = this.page.locator(ConfirmOrderComponent.SELECTOR);
        return new ConfirmOrderComponent(loc);
    }

    

}
