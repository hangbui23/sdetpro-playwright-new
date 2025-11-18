import { Page } from "@playwright/test";
import BasePage from "./BasePage";
import BillingAddressComponent from "../component/checkout/BillingAddressComponent";
import ShippingAddressComponent from "../component/checkout/ShippingAddressComponent";
import ShippingMethodComponent from "../component/checkout/ShippingMethodComponent";

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
}   